const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const blogsSchema = require("../Scheama/blogSchema");
const Blog = new mongoose.model("Blog", blogsSchema);

router.post("/addBlogs", async (req, res) => {
  const initialData = new Blog(req.body);
  console.log(initialData, "newData");

  const result = await Blog.create(initialData);
    if (result) {
      res.send({ success: true });
    } else {
      res.send({ error: "have an error from mongodb" });
    }
})

router.get("/blogs", async (req, res) => {
  Blog.find({}, (error, result) => {
    if (error) {
      res.status(501).send({ error: error });
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
