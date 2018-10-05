const express = require("express");
const router = express.Router();
const axios = require("axios");
const keys = require("../../config/keys");

// @route   GET api/auth/test
// @desc    Test the api route.
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "Projects route working" });
});

// @route   GET api/projects/progress
// @desc    Get all projects
// @access  Public
router.get("/progress", (req, res) => {
  axios.post(keys.zohoToken).then(auth => {
    axios
      .get(keys.projectsPath, {
        headers: {
          Authorization: "Zoho-oauthtoken " + auth.data.access_token
        }
      })
      .then(response => {
        var development = 0;
        var design = 0;
        var hold = 0;

        response.data.projects.filter(project => {
          if (project.group_name == "Development") {
            development++;
          } else if (project.group_name == "Design") {
            design++;
          } else if (project.group_name == "Un-Responsive Clients") {
            hold++;
          }
        });

        res.json({
          total_projects: response.data.projects.length,
          development: development,
          design: design,
          hold: hold
        });
      })
      .catch(error =>
        res.json({
          error: "Woops, that wasn't supposed to happen, blame Matt."
        })
      );
  });
});

// Export router
module.exports = router;
