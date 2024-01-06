const express = require("express")
const router = express.Router()
const authControler = require("../controllers/auth.control")
const { registerationSchema } = require("../validations/auth.validate")
// const {} = require("joi")
const validate = require("../services/validate.service")
 
router.post("/register",validate(registerationSchema) ,authControler.register) 

module.exports = router;