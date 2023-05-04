import React from "react";
// import car1 from '../images/car1.jpg'
import Nav from "./nav";
import { useNavigate } from "react-router-dom";
function Cardetails(){
    const navigate=useNavigate()
    const back=()=>{
        navigate('/');
    }
    const bookcar=()=>{
        navigate('/bookingdetails');
    }
    return(
        <>
        <Nav/>
        <div className="carpage">
       <div className="container">
            <br></br>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2 style={{textAlign:"center",fontWeight:"bold"}}>Car Details</h2>
                </div>
                <div className="col-md-3"></div>
            </div><br></br>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 cardet">
                    <center>
                    <img src={localStorage.getItem('imga')} style={{width:"600px"}}/>
                    <table>
                        <tr>
                            <td>Car Model</td>
                            <td>:</td>
                            <td>Mercedes Benz</td>
                        </tr>
                        <tr>
                            <td>Licence plate</td>
                            <td>:</td>
                            <td>AP 05 5265</td>
                        </tr>
                        <tr>
                            <td>Miles Driven</td>
                            <td>:</td>
                            <td>2650 km</td>
                        </tr>
                        <tr>
                            <td>Car Color</td>
                            <td>:</td>
                            <td>Red</td>
                        </tr>
                        <tr>
                            <td>Model Year</td>
                            <td>:</td>
                            <td>2018</td>
                        </tr>
                        <tr>
                            <td>Daily Price</td>
                            <td>:</td>
                            <td>7000</td>
                        </tr>
                        {/* <tr>
                            <td><button className="btn btn-primary">Back</button></td>
                            <td></td>
                            <td><button className="btn btn-primary">Book</button></td>
                        </tr> */}
                    </table><br></br>
                    <div className="row">
                        <div className="col-md-5">
                        <button className="btn btn-primary  btn-lg" onClick={back}>Back</button>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                        <button className="btn btn-primary btn-lg" onClick={bookcar}>Book</button>
                        </div>
                    </div><br></br>

                    </center>
                </div>
                <div className="col-md-3"></div>
            </div>
       </div>
       </div>
       </>
    )
}
export default Cardetails;