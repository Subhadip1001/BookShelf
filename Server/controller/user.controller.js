import { user } from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signup = async(req, res)=>{
    try {
        const{name, email, password} = req.body;
        const findUser = await user.findOne({email});
        if(findUser){
            return res.status(400).json({msg:"User already exsist"});
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const createUser = new user({
            name,
            email,
            password: hashPassword
        });
        await createUser.save();
        return res.status(200).json({msg:"User create succefully", user:{
            _id: createUser._id,
            name: createUser.name,
            email: createUser.email
        }});
    } catch (error) {
        console.log("Error: ", error.message);
        return res.status(500).json({msg:"Internal server error"});
    }
};

export const login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const findUser = await user.findOne({email});
        const isMatch = await bcrypt.compare(password, findUser.password);
        if(!findUser || !isMatch){
            return res.status(400).json({msg:"Invalid email or password!"});
        }else{
            return res.status(200).json({msg:"Login successful", user:{
                _id: findUser._id,
                name: findUser.name,
                email: findUser.email
            }});
        }
    } catch (error) {
        console.log("Error: ",error.message);
        return res.status(500).json({msg:"Internal server error"});
    }
};