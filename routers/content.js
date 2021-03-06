const Blog = require("../models/blog");
const reqAuth = require("../middleware/reqAuth");

module.exports = app => {
    app.get("/api/blog", reqAuth, async (req, res) => {
      const blogs = await Blog.find({ _user: req.id._id });
      console.log(req.id._id)
    res.send(blogs);
  });
  app.post("/api/post", reqAuth, async (req, res) => {
    
    let blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      _user: req.id._id,
      imageUrl:req.body.imageUrl
    });
    await blog.save()
    blog = await Blog.find({ _user: req.id._id });
    res.send(blog);
  });
    app.get('/api/allblog',reqAuth,  async (req, res) => {
        const allblogs = await Blog.find()
        res.send(allblogs)
    })
};

