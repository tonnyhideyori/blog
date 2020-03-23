const {Schema,model} = require('mongoose')
const blogSchema = new Schema({
    title: { type: String },
    dateCreated: { type: Date, default: Date.now },
    _user: { type: Schema.Types.ObjectId, ref: "users" },
    content: { type: String },
    imageUrl:String
})
const Blog = model('blog', blogSchema)
module.exports=Blog