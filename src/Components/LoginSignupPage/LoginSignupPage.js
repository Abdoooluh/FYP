import React, { Component, useState } from "react";
import { Checkbox, Input, Button } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginSignup.css";
import { act } from "react-dom/test-utils";

const LoginSignup = () => {
   const [action, setAction] = useState("Log In");
   const [userType, setUsertype] = useState("Retailer");
   const [rememberMe, setRememberMe] = useState(false);
   const [loginUser, setLoginUser] = useState("");
   const [loginPass, setLoginPass] = useState("");
   const [signupUser, setSignupUser] = useState("");
   const [signupPass, setSignupPass] = useState("");
   const [signupMail, setSignupMail] = useState("");

   const onChangeRememberMe = (e) => {
      setRememberMe(e.target.checked);
      console.log(action);
   };

   const LoginButtonClick = () => {
      if (action !== "Log In") {
         setAction("Log In");
      } else {
         submitFunc();
      }
   };

   const SignupButtonClick = () => {
      if (action !== "Sign Up") {
         setAction("Sign Up");
      } else {
         submitFunc();
      }
   };

   const submitFunc = () => {
      console.log("Form Submitted");
   };

   return (
      <div className="window">
         <div className="Container">
            <div className="Header">
               <div className="Text">
                  <h1>{action}</h1>
               </div>
               <div className="Underline"></div>
            </div>
            <div className="Content">
               {action === "Log In" ? (
                  <div className="Log In">
                     <div className="Inputs">
                        <div className="Input">
                           <Input
                              placeholder="Enter your Username"
                              addonBefore=<UserOutlined />
                              onchange={(e) => setLoginUser(e.target.value)}
                              type="text"
                              maxLength={12}
                           />
                        </div>
                        <div className="Input">
                           <Input
                              placeholder="Enter your Password"
                              addonBefore=<LockOutlined />
                              onchange={(e) => setLoginPass(e.target.value)}
                              type="password"
                              maxLength={15}
                           />
                        </div>
                        <Checkbox
                           checked={rememberMe}
                           onChange={onChangeRememberMe}
                        >
                           Remember Me
                        </Checkbox>
                        <div className="Input"></div>
                     </div>
                  </div>
               ) : (
                  <div></div>
               )}
               {action === "Sign Up" ? (
                  <div className="Sign Up">
                     <div className="Inputs">
                        <div className="Input">
                           <Input
                              placeholder="Enter your Email"
                              addonBefore=<MailOutlined />
                              onchange={(e) => setSignupMail(e.target.value)}
                              type="email"
                              maxLength={12}
                           />
                        </div>
                        <div className="Input">
                           <Input
                              placeholder="Enter your Username"
                              addonBefore=<UserOutlined />
                              onchange={(e) => setSignupUser(e.target.value)}
                              type="text"
                              maxLength={12}
                           />
                        </div>
                        <div className="Input">
                           <Input
                              placeholder="Enter your Password"
                              addonBefore=<LockOutlined />
                              onchange={(e) => setSignupPass(e.target.value)}
                              type="password"
                              maxLength={15}
                           />
                        </div>
                     </div>
                  </div>
               ) : (
                  <div></div>
               )}
               <Button
                  className={action === "Log In" ? "Submit" : "Submit grayed"}
                  onClick={LoginButtonClick}
               >
                  Log In
               </Button>
               <Button
                  className={action === "Sign Up" ? "Submit" : "Submit grayed"}
                  onClick={SignupButtonClick}
               >
                  Sign Up
               </Button>
            </div>
         </div>
      </div>
   );
};

export default LoginSignup;
