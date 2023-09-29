const express = require("express");
const { jsonResponse } = require("../lib/jsonResponse");
const validatePassword = require("../src/controllers/validatePassword");
const router = express.Router();


router.post("/", async function (req, res, next) {
  const {username , password} = req.body
  try {
    const newCharacter = await validatePassword(username,password,)
    res.status(200).json(newCharacter)
    } catch (error) {
        res.status(500).json ({error:"probado"}); 
    }
});
;

module.exports = router;