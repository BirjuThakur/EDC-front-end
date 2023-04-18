import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Logout =() =>{
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("/logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
           navigate("/sinin")
           console.log("logout successfully")
        }).catch((err)=>console.log(err))
    })
    return(
        <>
        <h1>log out </h1>
        </>
    )
}

export default Logout;