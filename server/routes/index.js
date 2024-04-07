const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("you are in the root route.");
});
router.use("/auth", require("./user.route"));
module.exports = router;
