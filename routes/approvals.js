const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Approval = require("../models/Approvals");

router.get("/", async (req, res) => {
  try {
    const approval = await Approval.find().sort({ date: -1 });
    res.json(approval);
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
    check("approved", "Please add approved numbers")
      .not()
      .isEmpty(),
    check("rejected", "Please add rejected numbers")
      .not()
      .isEmpty(),
    check("hours_worked", "Please add the amount of time worked")
      .not()
      .isEmpty(),
    check("original_approvals", "Please add if these are original approvals")
      .not()
      .isEmpty(),
    check("client", "Please add the client")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Approval.create(req.body);
      res.json(req.body);
    } catch (err) {
      res.status(500).send("Server Error...");
    }
  }
);
module.exports = router;
