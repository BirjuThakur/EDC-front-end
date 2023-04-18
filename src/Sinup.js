import React, { useState } from "react";
import "./sinup.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from "react-router-dom";

const Sinup = () => {
    const nevigate = useNavigate();

    //validation using react bootstrap start
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
   //validation using react bootstrap end

   const [olduser, newuser] = useState({
    fname: " ",
    lname: " ",
    email: " ",
    mobileno: " ",
    password:" ",
    userType:" ",
    companyName: " "
    })

    const InputEvent =(event) =>{
     const { name, value } = event.target;
     newuser((preusers)=>{
        return{
            ...preusers,
            [name] : value
        }
     })
    }
    const submitForm = async (event) => {
        event.preventDefault();
        const { fname,lname,email,mobileno,password,userType,companyName } = olduser;
        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname:fname, 
                    lname:lname, 
                    email:email, 
                    mobileno:mobileno, 
                    password:password, 
                    userType:userType,
                    companyName:companyName
                })

            });
            const data = await res.json();
            if (data.status === 422 || !data) {
                window.alert("invalid registration");
                console.log("invalid registration");
            } else {
                nevigate("/sinin")
                window.alert("registration successfully");
                console.log("registration successfully");
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
        <p>
            {olduser.fname} {olduser.lname} {olduser.email} {olduser.mobileno} {olduser.password}
            {olduser.userType} {olduser.companyName}
        </p>
     <Container className=" formdiv d-flex justify-content-center  align-items-center" >
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="fname"
            placeholder="First name"
            value={olduser.fname}
            onChange={InputEvent}
          />
          <Form.Control.Feedback type="invalid">
              Please enter first name.
        </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name="lname"
            placeholder="Last name"
            value={olduser.lname}
            onChange={InputEvent}
          />
          <Form.Control.Feedback type="invalid">
              Please enter last name.
        </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="12"  controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={olduser.email} onChange={InputEvent} required placeholder="name@example.com" />
        <Form.Control.Feedback type="invalid">
              Please enter email address.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="12" className="mb-3" >
        <Form.Label>mobile number</Form.Label>
        <Form.Control type="number" name="mobileno" value={olduser.mobileno} onChange={InputEvent} required placeholder="mobile number" />
        <Form.Control.Feedback type="invalid">
              Please enter mobine number.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>
     <Row className="mb-3">
     <Form.Group  controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={InputEvent} value={olduser.password} placeholder="Password" />
      </Form.Group>
     </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="12" className="mb-3">
      <Form.Select aria-label="Default select example" onChange={(event) => newuser({...olduser, userType: event.target.value})}>
      <option> select usertype </option>
      <option  name="userType">student</option>
      <option  name="userType">coordinator</option>
    </Form.Select>
    <Form.Control.Feedback type="invalid">
              Please select one.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="12" className="mb-3" >
        <Form.Label>startup / company name </Form.Label>
        <Form.Control type="text" name="companyName" value={olduser.companyName} onChange={InputEvent} required placeholder="enter company name" />
        <Form.Control.Feedback type="invalid">
              Please enter company name.
        </Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Button type="submit" onClick={submitForm}>Submit form</Button>
    </Form>
    </Container>
    <Container className="d-flex  flex-column justify-content-center align-items-center">
    <p>already you have account</p> 
    <button className="bg-dark text-white"><NavLink className="nav-link" to="/sinin"> sin in</NavLink></button>
    </Container>
        </>
    )
}

export default Sinup;