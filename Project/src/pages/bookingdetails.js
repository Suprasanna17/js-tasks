import React from "react";
import Nav from "./nav";
import { useNavigate } from "react-router-dom";
function Bookingdetails(){
    const navigate=useNavigate()
    const back=()=>{
        navigate('/cardetails');
    }
    const pay=()=>{
        navigate('/payment');
    }
    
    return(
    <>
        <Nav/>
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2 style={{textAlign:"center",fontWeight:"bold"}}>Booking Details</h2>
                </div>
                <div className="col-md-3"></div>
            </div><br></br>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 bdetails">
                    <table>
                        <tr>
                            <td>Car Model</td>
                            <td>:</td>
                            <td>Mercedes Benz</td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>:</td>
                            <td><input type="text" placeholder="Enter Duration in hrs" className="form-control" required/></td>
                        </tr>
                        <tr>
                            <td>PickUp Date</td>
                            <td>:</td>
                            <td><input type="date"  className="form-control" required/></td>
                        </tr>
                    </table>
                </div>
                <div className="col-md-4 bdetails">
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Phone No</td>
                            <td>:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Licence No</td>
                            <td>:</td>
                            <td><input type="text" placeholder="Enter Licence Number" className="form-control" required/></td>
                        </tr>
                    </table>
                </div>
                <div className="col-md-2"></div>
            </div><br></br><br></br>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-2">
                    <button className="btn btn-primary  btn-lg" onClick={back}>Back</button>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                    <button className="btn btn-primary  btn-lg" onClick={pay}>Payment</button>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    </>
    )
}
export default Bookingdetails;