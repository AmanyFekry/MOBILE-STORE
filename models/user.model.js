const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
// Define user schema
const userSchema = Schema({
    name: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    nationalId: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
});
userSchema.pre("save", async function (next) 
{
    try
    {
        if (!this.isModified("password"))
        { return next() }
        let hashPassword = await bcrypt.hash(this.password, 8)
        this.password = hashPassword;
        next();
    } catch (error)
    {
        next(error)
    }
    {
        
    }
    
})
const User = mongoose.model("User",userSchema)
module.exports = User

