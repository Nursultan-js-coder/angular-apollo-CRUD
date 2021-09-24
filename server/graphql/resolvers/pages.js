const Page = require("../../models/Employee");

module.exports = {
  Query: {
    async getPages() {
      try {
        const pages = await Page.find();
        return pages;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation:{
    async addPage(_,{name,title,children,description},context){
      try{
        const newPage = await  new Page({
          name,
          title,
          description,
        })
        await newPage.save();
        return newPage;

      }catch(err){}
      throw new Error(err);

    }
  }
}
