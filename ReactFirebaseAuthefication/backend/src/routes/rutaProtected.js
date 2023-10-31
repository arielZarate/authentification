const express = require("express");

const router = express.Router();
const { verifyFirebaseToken } = require("../../Firebase/firebase");

router.get("/", verifyFirebaseToken, async (req, res) => {
  try {
    const user = await req.user;
    console.log("********usuario*********:\n", user);
    return res.json({ message: "Token válido", user });
  } catch (error) {
    console.log(error.message);
    // res.json(error.message);
  }
});

module.exports = router;
