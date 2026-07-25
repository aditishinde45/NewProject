import {createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import httpStatus from "http-status";
import server from "../environment.js";
const client = axios.create({
  baseURL: `${server}/api/v1/user`,
});
export const AuthContext = createContext({});
export const AuthProvider=({children})=>{
    const [userData,setUserData]=useState();
    const router = useNavigate();
    const handleRegister = async (name, email, password) => {
    try {
      let request = await client.post("/signup", {
        name,
        email,
        password,
      });

      if (request.status === httpStatus.CREATED) {
        return request.data.message;
      }else if(request.status ==401 ||
         request.status==404 ||
          request.status ==400 ||
           request.status == 500){
            console.log(request.data.message);
            return request.data.message;
           }
    } catch (e) {
      throw e;
    }
  };

  const handleLogin=async(email,password)=>{
    try{
        let request=await client.post("/login",{
            email:email,
            password:password
        });
        if(request.status==httpStatus.OK){
          localStorage.setItem("token",request.data.token);
          router("/profile");
          return request.data.message;
        }else if(request.status ==401 ||
         request.status==404 ||
          request.status ==400 ||
           request.status == 500){
            console.log(request.data.message);
            return request.data.message;
           }
    }catch(e){
  throw e;
    }
  };

  const data = {
    // userData,
    // setUserData,
    // getHistoryUser,
    // addToUserHistory,
    handleRegister,
    handleLogin
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}