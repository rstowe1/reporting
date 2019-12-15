const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Status = require("../models/Status");

router.get("/", async (req, res) => {
  try {
    const status = await Status.find().sort({ date: -1 });
    res.json(status);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  [
    check("name", "Please Add Name")
      .not()
      .isEmpty(),
    check("date", "Please add date")
      .not()
      .isEmpty(),
    check("comment", "Please add comment")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Status.create(req.body);
      res.json(req.body);
    } catch (err) {
      res.status(500).send("Server Error...");
    }
  }
);

module.exports = router;
