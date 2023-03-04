const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;

// middleware

mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.json());

// console.log("test");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}>@cluster0.ysfeeva.mongodb.net/?retryWrites=true&w=majority`;

// console.log(uri);

mongoose.connect(
  "mongodb://localhost:27017",
  () => {
    console.log("Connected".green.bold);
  },
  (e) => {
    console.error(e.red.bold.underline);
  }
);

// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log("✔✔✔✔✔✔✔✔connected✔✔✔✔✔✔✔");
//   })
//   .catch((error) =>
//     console.log("____error Start____", error, "_____error____")
//   );

app.use("/users", require("./Routes/userRouter"));
app.use("/blogs", require("./Routes/blogsRoutes"));

// app.use("users")
// mongoose.connect(uri,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(()=>console.log("connected"))

app.post("/addUser", async (req, res) => {
  // const result = await
  console.log(req.body, "......");
});

app.get("/", async (req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log(`server connected with ${port}`.green.bold);
});
