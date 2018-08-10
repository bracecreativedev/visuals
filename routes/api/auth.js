const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route   GET api/auth/test
// @desc    Test the api route.
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "Auth route working" });
});

// @route   GET api/auth/token
// @desc    Gather auth token
// @access  Public
router.get("/token", (req, res) => {
  axios
    .post(
      "https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.183d5ad1600952bc612d678532c4dfbb.c612dc8680a8cb1d862fd07909654478&client_id=1000.68E0E02XQA7H57265TS5BZQJTQAJAE&client_secret=82ed5eb8570741321b7bc9a949e412e15bd06f84d8&grant_type=refresh_token"
    )
    .then(data => {
      res.json(data.data);
    });
});

// Export router
module.exports = router;
