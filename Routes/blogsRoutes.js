const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const mongoose = require("mongoose");
const blogsSchema = require("../Scheama/blogSchema");
const Blog = new mongoose.model("Blog", blogsSchema);
const userSchema = require("../Scheama/userSchema");
const User = new mongoose.model("User", userSchema);

router.post("/addBlogs", async (req, res) => {
  const initialData = new Blog(req.body);
  // console.log(initialData, "newData", req.query.user);

  const getUser = await User.findOne({ email: req.query.user });
  // console.log(getUser,"11111111111");
  if (getUser?.role === "admin") {
    console.log(getUser, "222222222222");
    const result = await Blog.create(initialData);
    if (result) {
      res.send({ success: true });
    } else {
      res.send({ error: "have an error from mongodb" });
    }
  } else {
    res.status(200).send({ error: "You are not Admin ." });
  }
});

router.put("/EditBlog", async (req, res) => {
  const initialData = new Blog(req.body);
  // console.log(initialData, "newData", req.query.user);
  const data = req.body;
  const mainId = req.body.mainId;
  const getUser = await User.findOne({ email: req.query.user });
  // console.log(getUser,"11111111111");
  if (getUser?.role === "admin") {
    delete data?.mainId;
    // console.log(data.mainId,"data....",mainId);
    // console.log(getUser, "222222222222",mainId);
    const filter = { _id: new ObjectId(mainId) };
    const options = { new: true, upsert: true };
    // console.log(filter, options, data);
    const result = await Blog.findOneAndUpdate(filter, data, options);
    if (result) {
      res.send({ success: true });
    } else {
      res.send({ error: "have an error from mongodb" });
    }
    console.log(result,"result=======");
  } else {
    res.status(200).send({ error: "You are not Admin ." });
  }
});

router.delete("/deleteBlog", async (req, res) => {
  const id = req.body._id;
  // console.log(id, "dddddddddd");
  const getUser = await User.findOne({ email: req.query.user });
  // console.log(getUser,"11111111111");
  if (getUser?.role === "admin") {
    // console.log(getUser, "222222222222");
    const result = await Blog.deleteOne({ _id: new ObjectId(id) });
    if (result) {
      res.send({ success: true });
    } else {
      res.send({ error: "have an error from mongodb" });
    }
  } else {
    res.send({ error: "please, send as admin" });
  }
});

router.get("/blogs", async (req, res) => {
  Blog.find({}, (error, result) => {
    if (error) {
      res.status(501).send({ error: error });
    } else {
      res.send(result);
    }
  }).sort({ time: -1, date: -1 });
});

module.exports = router;
