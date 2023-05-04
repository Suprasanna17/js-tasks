import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Adminnav from "./components/adminnav";
import Sidebar from "./components/Sidebar";
function Main(){
    const navigate=useNavigate();
    const userlog=()=>{
        navigate('/login');
    }
    const ownerlog=()=>{
        navigate('/ologin');
    }
    // const [admin,Setadmin]=useState(false);
    const adminlog=()=>{
    //    Setadmin(true);
        navigate('/alogin')
    }
    // if(admin){
    //     return(
    //         <Adminnav/>
    //     )
    // }
    return(
    <>
        {/* <button className="btn btn-info" onClick={userlog}>user</button>
        <button className="btn btn-info" onClick={ownerlog}>owner</button>
        <button className="btn btn-info">admin</button> */}
        <div className="main">
        <div className="container-fluid g-0">
            <div className="row g-0 nav">
                <div className="col-md-3">
                    <h1 style={{color:"#F8D210"}}><b>T2's Car Rental <span><i class="fa fa-car"></i></span></b></h1>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-5"></div>
            </div>
            <div className="row g-0">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <br></br><br></br>
                    <h1 style={{textAlign:"center",color:"red",fontWeight:"bold"}}>Welcome To T2's Car Rental Services</h1>
                </div>
                <div className="col-md-3"></div>
            </div><br/><br/>
            <div className="row g-0">
                
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button className="btn btn-primary btn-lg " onClick={userlog} style={{width:"100%",fontSize:"30px"}}>User Login</button>
                </div>
                <div className="col-md-4"></div>
            </div>
            <br/><br/>
            <div className="row g-0">
                
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button className="btn btn-info" onClick={ownerlog} style={{width:"100%",fontSize:"30px"}}>Owner Login</button>
                </div>
                <div className="col-md-4"></div>
            </div>
            <br/><br/>
            <div className="row g-0">
                
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button className="btn btn-warning" onClick={adminlog} style={{width:"100%",fontSize:"30px"}}>Admin Login</button>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
        </div>
    </>
    )
}
export default Main;