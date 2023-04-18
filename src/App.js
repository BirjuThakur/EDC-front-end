import React from "react";
import { Route,Routes } from "react-router-dom";
import Sinup from "./Sinup";
import Navbar from "./Navbar";
import Sinin from "./Sinin";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Home from "./Home";
//bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from "./Logout";


const App =() =>{
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sinup" element={<Sinup />} />
      <Route path="/sinin" element={<Sinin />} />
      <Route path="/stage1" element={<Stage1 />} />
      <Route path="/stage2" element={<Stage2 />} />
      <Route path="/stage3" element={<Stage3 />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
    </>
  )
}


export default App;