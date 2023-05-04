import React from "react";
import ONav from "./onav";
function Ostatus(){
    return(
        <>
        <ONav/>
        <div className="main">
        <div className="container">
            <br/><br/>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-3">
                    <input type="text" name="cars" placeholder="Enter Car Name/Licence no" className="form-control" style={{border:"2px solid black",borderRadius:"50px",marginRight:"10px",width:"300px"}}/>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-success" style={{borderRadius:"50px"}}>Search</button>
                </div>
                <div className="col-md-3"></div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <table className="table">
                        <tr>
                            <td>Car Model</td>
                            <td>:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Licence No</td>
                            <td>:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Booking Status</td>
                            <td>:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Booked Date</td>
                            <td>:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>End Date</td>
                            <td>:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Amount Paid</td>
                            <td>:</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Ostatus;