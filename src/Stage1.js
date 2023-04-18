import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Stage1 = () => {
const navigate = useNavigate();
    const [olduser, newuser] = useState({
        fname: " ",
        title: " ",
        problem: " ",
        solution: " ",
        features:" ",
        products:" "
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        newuser((preuser) => {
            return {
                ...preuser,
                [name]: value
            }
        })
    }

    const submitForm = async (event) => {
        event.preventDefault();
        const { fname, title, problem, solution,features,products } = olduser;
        try {
            const res = await fetch("/stage1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname: fname.trim(),
                    title: title.trim(),
                    problem: problem.trim(),
                    solution: solution.trim(),
                    features: features.trim(),
                    products: products.trim()
                })

            });
            const data = await res.json();
            if (data.status === 422 || !data) {
                window.alert("send data not successfully");
                console.log("send data not successfully");
            } else {
                window.alert("send data successfully");
                console.log("send data successfully");
            }
        } catch (error) {
            console.log(error)
        }

    }
    const [userdata,setuserdata] = useState();
    console.log(userdata)
    const callAboutPage=async()=>{
      try {
        const response = await fetch("/stage1",{
            method:"GET",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });
        const data = await response.json();
        setuserdata(data);
        console.log(data)
        if(!response.status===200){
            const error= new Error(response.error);
            throw error
        }
      } catch (error) {
        console.log("this is error"+error)
        navigate("/sinin")
      }
    }
    useEffect(()=>{
        callAboutPage();
    },[]);


    return (
        <>
            <div >
                <div className="container" >
                    <p>{olduser.fname} {olduser.title} {olduser.problem} {olduser.solution}
                        {olduser.features} {olduser.products}</p>
                    <form method="post" >
                        <label htmlFor="formGroupExampleInput" className="form-label">names of all team members: </label>
                        <input type="text" className="form-control" name="fname" id="formGroupExampleInput"
                            onChange={InputEvent} value={olduser.fname} />
                        <label htmlFor="formGroupExampleInput" className="form-label">title of the startup/idea/innovation: </label>
                        <input type="text" className="form-control" name="title" id="formGroupExampleInput"
                            onChange={InputEvent} value={olduser.title} />
                        <label htmlFor="formGroupExampleInput" className="form-label">define problems that your startup solving: </label>
                        <input type="text" className="form-control" name="problem" id="formGroupExampleInput"
                            onChange={InputEvent} value={olduser.problem} />
                        <label htmlFor="formGroupExampleInput" className="form-label">describe the solution: </label>
                        <input type="text" className="form-control" name="solution" id="formGroupExampleInput"
                            onChange={InputEvent} value={olduser.solution} />
                        <label htmlFor="formGroupExampleInput" className="form-label">explain the uniqueness and distinctive features: </label>
                        <input type="text" className="form-control" name="features" id="formGroupExampleInput"
                            onChange={InputEvent} value={olduser.features} />
                        <label htmlFor="formGroupExampleInput" className="form-label">current stage of startup: </label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label  htmlFor="formGroupExampleInput" className="form-check-label" >
                                idea
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label  htmlFor="formGroupExampleInput" className="form-check-label" >
                                prototype stage (if you have developed any working prototype of a solution proposed)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label  htmlFor="formGroupExampleInput" className="form-check-label" >
                                stage (if you have developed a final marketable product/service platform)
                            </label>
                        </div>
                        <label htmlFor="formGroupExampleInput" className="form-label">targeted market </label><br />
                        <label htmlFor="formGroupExampleInput" className="form-label">market size </label><br />
                        <label htmlFor="formGroupExampleInput" className="form-label">if raised any funding. </label><br />
                        <label htmlFor="formGroupExampleInput" className="form-label">product image/video link for physical products </label>
                        <input type="text" className="form-control" name="products" id="formGroupExampleInput"
                            onChange={InputEvent} value={olduser.products} /><br />
                        <input type="submit" className="registerbtn" value="submit" onClick={submitForm} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Stage1;