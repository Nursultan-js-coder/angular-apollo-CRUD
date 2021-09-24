const registerValataion = ({username,email,password})=>{
const errors  = {};

if(username === "")errors.username = "username must not be empty";
if(email === "")errors.email = "email must not be empty";
if(password === "")password.email = "password must not be empty";
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const match = email.match(re);
if(!match)errors.email = "Invalid email ";
if(password.length < 3) password.email = "password must not be less than 3";

 return {
     errors,
     valid:Object.keys(errors).length < 1
 }
}
module.exports.registerValataion =registerValataion;


const loginValataion = ({email,password})=>{
    const errors  = {};

    if(email === "")errors.email = "email must not be empty";
    if(password === "")password.email = "password must not be empty";
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const match = email.match(re);
    if(!match)errors.email = "Invalid email ";
    return {
        errors,
        valid:Object.keys(errors).length < 1
    }
}
module.exports.loginValataion =loginValataion;
