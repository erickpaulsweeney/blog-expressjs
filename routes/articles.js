const express = require("express");
const Article = require("../models/article");

const router = express.Router();

router.get("/new", (req, res) => {
    res.render("articles/new");
});

router.post("/add", async (req, res) => {
    console.log(req.body);
    const newArticle = new Article({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
    });
    await newArticle.save();
    res.redirect("/");
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const article = await Article.findById(id);
    res.render("articles/detail", { article });
});

router.get("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const article = await Article.findByIdAndDelete(id);
    res.redirect("/");
}); 

router.get("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const article = await Article.findById(id);
    res.render("articles/edit", { article });
})

router.post("/edit/:id/save", async (req, res) => {
    // console.log(req.body);
    const id = req.params.id;
    const { title, author, body } = req.body;
    const article = await Article.findByIdAndUpdate(id, { title, author, body });
    res.redirect("/");
});

module.exports = router;
