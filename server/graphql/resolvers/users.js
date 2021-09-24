const User  = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config")
const {UserInputError} = require("apollo-server")
const {registerValataion,loginValataion} = require("../../utils")
const Post = require("../../models/Post");

function generateToken({user,email,username}){
    const token = jwt.sign({
        id:user._id.toString(),
        email,
        username,
    },config.get("jwtSecret"),{"expiresIn":"1h"})
    return token;
}
module.exports = {
    Query:{
        async getUsers(){
            try {
                const users = await User.find();
                return users;
            }catch(err){
                throw new Error(err);
            }
        },
    },
    /**
     * @route post api/auth/register
     /* @description register new  user
     /* @access public
     */
    Mutation:{
        async login(_,{email,password},context,info){
            const {valid,errors} = loginValataion({password,email})
            if(!valid) throw new UserInputError("input errors",{errors} );
            console.log(valid,errors);
            const res = await User.findOne({email});
            console.log(res._id.toString());

            if(!res) {
                errors.general = 'User not found';
                throw new UserInputError("input errors",{errors} );
            }
            const match = await bcrypt.compare(password,res.password);
            if(!match){
                errors.password = 'wrong password';
                throw new UserInputError("input errors",{errors} );
            }
            const token  =  generateToken({user:res,email,username:res.username});
            console.log("token:",token);
            return {
                ...res._doc,
                id:res._id,
                token
            }
        },

        async register(parent,{registerInput:{username,password,email}},context,info) {
            const {valid,errors} = registerValataion({username,password,email})
            console.log(valid,errors);
            if(!valid) {
                throw new UserInputError("input errors",errors)
            }
          const res = await User.findOne({email})
            if(res){
                throw new UserInputError("Username is already in use",{
                    error : {
                        msg:"Username is already in use"
                    }
                })
            }
          const newUser = new User({email,password,username,createdAt:new Date().toISOString()});
          newUser.password = await bcrypt.hash(password,12);
          const user = await newUser.save();
          const token = jwt.sign({
              id:user._id,
              email,
              username,
          },config.get("jwtSecret"),{"expiresIn":"1h"})
          return {
              ...user._doc,
              id:user._id,
              token
          }
        }}
    }
