var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form");
});
// nodemon refresh
router.post("/new", (req, res, next) => {
  let new_obj = {
    text: req.body.body,
    user: req.body.name,
    added: new Date(),
  };
  messages.push(new_obj);
  res.redirect("/");
});

module.exports = router;
