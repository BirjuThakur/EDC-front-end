import React,{ useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./sinin.css";

const Sinin =() =>{
    const navigate = useNavigate();

    const [email,newEmail] = useState("");
    const [password,newpass] = useState("");
    
    const submitFoorm=async(event)=>{
        event.preventDefault();
        try {
            const res= await fetch('/sinin',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                email, password
                })
                })
                const data = res.json();
                if(res.status===400 || !data){
                    console.log("this is error in sinin")
                }else{
                    navigate("/stage1")
                    window.alert("registration successfully");
                }    
        } catch (error) {
            console.log(error)
        }
        
    }
    return(
        <>
        <div className="d-flex justify-content-center pt-5 pb-5 sininback">
        <form method="post" className="loginform">
            <label htmlFor="email" > eneter email</label>
            <input type="email" name="email" id="email" value={email} onChange={(event)=>newEmail(event.target.value)} /> <br/>
            <label htmlFor="password">enter passward</label>
            <input type="password" name="password" id="password" value={password}  onChange={(event)=>newpass(event.target.value)} /> <br/>
            <input type="submit" value="log-in" onClick={submitFoorm} className="loginbtn"/>
            <h4>Don't have an account</h4>
        <button className="loginbtn"><NavLink className="nav-link" to="/sinup"> register</NavLink></button>
        </form>
        </div>
        </>
    )
}

export default Sinin;