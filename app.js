const express = require("express");

//express app
const app = express();

//register view engine

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "computer science is evolving",
      description: "loream ais the party where wqe sfjhihfb oeehgiohg ouh",
    },
    {
      title: "programming is evolving",
      description: "loream ais the party where wqe sfjhihfb oeehgiohg ouh",
    },
    {
      title: "javascript is love",
      description: "loream ais the party where wqe sfjhihfb oeehgiohg ouh",
    },
  ];
  res.render("index", {
    title: "Home",
    blogs: blogs,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", {
    title: "Create",
  });
});

app.use((req, res) => {
  res.status(404).render("404", {
    title: "Error",
  });
});

//listen
app.listen(3000);
