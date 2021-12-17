import "./register.scss";
import {useRef, useState} from "react";

export default function Register(){
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
   
    const emailRef=useRef()
    const passwordRef=useRef()
    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = ()=>{
        setPassword(passwordRef.current.value)
    }
    return(
        <div className="register">
            <div className="top">
                <div className="wrappers">
                <img className="logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                <button className="loginButton">Sign In</button>

                </div>
            </div>
            <div className="containers">
                <h1>Unlimited, Movies, TV Shows and More</h1>
                <h2>Watch anywhere, Cancel anytime</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {
                    !email ?(

                <div className="input">
                    <input type="email" placeholder="email address" ref={emailRef} />
                    <button className="registerButton" onClick={handleStart}> Get started</button>

                </div>
                    ):(
                        <form className="input">
                    <input type="password" placeholder="password" ref={passwordRef} />
                    <button className="registerButton" onClick={handleFinish}> 
                    Start</button>

                </form>
                    )
                }
            </div>

        </div>
    )
}