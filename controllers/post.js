const Post = require("../models/post");

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .select("_id title description")
    .then((posts) => {
      res
        .json({
          posts,
        })
        .catch((err) => {
          console.log(err);
        });
    });
};
exports.createPosts = (req, res) => {
  const post = new Post(req.body);
  post.save().then((result) => {
    res.json({
      post: result,
    });
  });
};
