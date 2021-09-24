const Post = require("../../models/Post");
const authCheck = require("../../check-auth")
const {AuthenticationError} = require("apollo-server");
module.exports = {
    Query:{
        async getPosts(){
            try {
                const posts = await Post.find();
                return posts;
            }catch(err){
                throw new Error(err);
            }
        },
       async getPost(_,{id}){
          console.log("id:",id.trim());
            try{
              const post = await Post.findOne({id});
              console.log("post:",post);
                if(post){
                    return post
                }
                else {
                    throw new Error("not found post");
                }
            }catch(err){
                throw new Error
            }
        }
    },
    Mutation:{
        async createPost(_,{title,content,date},context){
            // const user = authCheck(context);
            // if(!user) {
            // throw new AuthenticationError("login first please");
            // }
            const post =await new Post({
                title,content,date
            })
            const res = await post.save();
            await  context.pubsub.publish("NEW_POST");
            return res;
        },
        async deletePost(_,data,context){
          const post = await Post.findByIdAndDelete(data.id);
          return post;

        }
    },
    Subscription:{
      postCreated:{
        subscribe: function (_,  __, {pubsub}) {
          pubsub.asyncIterator("NEW_POST");
          console.log("created new Post");
        }
      }
    }

}
