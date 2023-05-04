import React from "react";
import Nav from "./nav";
import { useNavigate } from "react-router-dom";
function Status(){
    const navigate=useNavigate();
    const edit=()=>{
        navigate('/bookingdetails');
    }
    const cancel=()=>{
        window.confirm('do you want to cancel');
    }
    return(
        <div className="main">
        <Nav/>
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2 style={{textAlign:"center",fontWeight:"bold"}}>Status</h2>
                </div>
                <div className="col-md-3"></div>
            </div><br></br>
            <div className="maindiv">
            <div className="row">
                <div className="col-md-10"></div>
                <div className="col-md-1">
                    <button className="btn btn-info" onClick={edit}>Edit</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-danger" onClick={cancel}>Cancel</button>
                </div>
            </div><br></br>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 stat">
                    <table className="table">
                        <tr>
                            <th>SNO</th>
                            <th>Car</th>
                            <th>Booking status</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><img src={localStorage.getItem('imga')} style={{height:"150px"}}/></td>
                            <td>Confirmed</td>
                        </tr>
                    </table>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Status;