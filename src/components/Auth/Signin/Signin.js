import React from "react";
import { useState } from "react";
// import {useHistroy} from "react-router-dom"
// import { useNavigate } from "react-router-dom";
import "./Signin.css";
import lock from "../lock.svg";
import Header from "../../header";
import Footer from "../../footer";

const Signin = () => {
  // const histroy=useHistroy()
  const [username, setEmail] = useState("");
  const [password,setPass]=useState("")
  // const [show, setShow] = useState(false);
  const loginUser= async (e)=>{
    e.preventDefault();
     const res= await fetch("https://laundry-server.onrender.com/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },body:JSON.stringify({
        username,
        password
      })
     })
   const data= await res.json()
   console.log(res.status)
   console.log(data)
     if(data.status==="failed"){
         window.alert("Invaid creadential")
     }

     
     else{
      window.alert("Login Successfull")
      // histroy.push("/")
     }
  }
  return (
    <> <Header/>
      <div className="signin-cont">
        <div className="signin-cont-left">
          <h1 className="signin-cont-laundryhead">Laundry Service</h1>
          <p className="signin-cont-description">Doorstep Wash & Dryclean Service</p>
          <p className="signin-cont-noacc">Don't Have An Account?</p>
          <button className="signin-cont-regisbut">Register</button>
        </div>
        <div className="signin-cont-right">
          <p className="signin-cont-signinhead">SIGN IN</p>
          <form className="signin-form" method="POST" >
            <label class="inp two">
            
              <input 
                style={{ fontSize: "18px", color: "#77838F" }}
                value={username}
                onChange={(e)=>{setEmail(e.target.value)}}
                
                type= "text"
                placeholder="Email/Phone"
              />
            </label>
            <p></p>
            <br></br>
            <br></br>
            <label style={{ display: "flex" }} class="inp two">
              <input
                style={{ fontSize: "18px", color: "#77838F" }}
                value={password}
                onChange={(e)=>{setPass(e.target.value)}}
                placeholder="Password"
                type="password"
              />
               <img
                className="lock"
                src={lock}
                alt="show-pass"
                style={{ cursor: "pointer" }}
                
              />
            </label>

            <p
              style={{ fontSize: "17px", fontWeight: 500 }}
              className="signin-fpass"
            >
              Forget Password?
            </p>
            
            <button onClick={loginUser} >Sign In</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Signin;

