const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  res.send("Hello User");
});

module.exports = router;

// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("This is the Users Page!");
// });

// module.exports = router;
