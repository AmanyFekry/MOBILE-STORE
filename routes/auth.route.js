const express = require("express")
const router = express.Router()
const authControler = require("../controllers/auth.control")

 
router.post("/register", authControler.register) 

module.exports = router;