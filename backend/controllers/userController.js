import { User } from "../models/user.js";
import httpStatus from "http-status";
import bcrypt,{hash} from "bcrypt";
import crypto from "crypto";

const register=async(req,res)=>{
   const {name,email,password}=req.body;
   try{
       const existinguser=await User.findOne({email});
       if(existinguser){
        return res.status(httpStatus.CONFLICT).json({
          message: "User already exists!"
        });
        
       }
       const hashedpassword=await bcrypt.hash(password,10);
       const newUser=new User({
        name:name,
        email:email,
        password:hashedpassword
       });
       //console.log("Hashed Password:", hashedpassword);
       await  newUser.save();
       res.status(httpStatus.CREATED).json({message:"user registred !"});
    }catch(e){
        res.json({messsage:`Ooops.. something went wrong ! ${e}`});
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    // 1️⃣ Validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please enter details!" });
    }
  
    try {
      // 2️⃣ Find user
      const user = await User.findOne({ email });
  
      if (!user) {
        return res
          .status(404)
          .json({ message: "User not found!" });
      }
// console.log("User from DB:", user);
// console.log("Entered password:", password);
// console.log("Stored password:", user.password);
      // 3️⃣ Password check
      const isMatch = await bcrypt.compare(password, user.password);
//console.log("Password matched:", isMatch);
      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "Invalid credentials!" });
      }
  
      // 4️⃣ Token generation
      const token = crypto.randomBytes(20).toString("hex");
      user.token = token;
      await user.save();
      // 5️⃣ Success (ONLY response)
      return res.status(httpStatus.OK).json({
        message: "Login successful!",
        token
      });
  
    } catch (error) {
      return res
        .status(500)
        .json({
          message: "Oops... something went wrong!",
          error: error.message,
        });
    }
  };

export {register,login};