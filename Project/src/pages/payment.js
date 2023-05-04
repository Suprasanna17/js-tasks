import React from "react";
import Nav from "./nav";
import { useNavigate } from "react-router-dom";
function Payment(){
    const navigate=useNavigate();
    const pay=()=>{
        alert('Payment Done');
        navigate('/status');
    }
    return(
        <>
        <Nav/>
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2 style={{textAlign:"center",fontWeight:"bold"}}>Payment</h2>
                </div>
                <div className="col-md-3"></div>
            </div><br></br>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" placeholder="First Name" className="form-control" required/>
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Last Name" className="form-control" required/>
                            </div>
                        </div><br></br><br></br>
                        <div className="row">
                            <div className="col-md-5">
                                <input type="text" placeholder="Card Number" className="form-control" required/>
                            </div>
                            <div className="col-md-2">
                                <input type="password" placeholder="CVV" className="form-control" required/>
                            </div>
                            <div className="col-md-5">
                                <input type="text" placeholder="Expiry Date" className="form-control" required/>
                            </div>
                        </div><br></br><br></br>
                        <div className="row">
                            <div className="col-md-5"></div>
                            <div className="col-md-3">
                                <button className="btn btn-primary" onClick={pay}>Pay Now</button>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
        
        </>
    )
}
export default Payment;