import React from "react";
import { useNavigate } from "react-router-dom";
import Onav from "./onav";
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.webp';
import car3 from '../images/car3.webp';
import car4 from '../images/car4.webp';
import car5 from '../images/car5.webp';
function Odashboard(){
    const navigate=useNavigate()
    const cardetails=(adf)=>{
        localStorage.setItem('imga',adf)
        navigate('/ocardetails');
    }
    return(
        <>
        <Onav/>
        <div className="carpage">
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 search">
                    <input type="text" name="cars" placeholder="Enter Car Name" className="form-control" style={{border:"2px solid black",borderRadius:"50px",marginRight:"10px"}}/>
                    <button className="btn btn-success" style={{borderRadius:"50px"}}>Search</button>
                </div>
                <div className="col-md-4"></div> 
            </div><br></br><br></br>
            {/* cars row 1 */}
            <div className="row">
                <div className="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <img src={car1} style={{width:"280px"}}/>
                        </div>
                        <div class="card-footer">
                            <center>
                                <h4>Merecedes Benz</h4>
                                <h6>RS.7500 /day  </h6>
                                <h6><span><i class="fa fa-star" style={{color:"gold"}}></i></span> 4.5 | 35 Rides</h6><br></br>
                                <button className="btn btn-primary" onClick={()=>cardetails(car1)}>Details</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <img src={car2} style={{width:"280px"}}/>
                        </div>
                        <div class="card-footer">
                            <center>
                                <h4>Maruti Suzuki Brezza</h4>
                                <h6>RS.3000 /day  </h6>
                                <h6><span><i class="fa fa-star" style={{color:"gold"}}></i></span> 4.1 | 60 Rides</h6><br></br>
                                <button className="btn btn-primary" onClick={()=>cardetails(car2)}>Details</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <img src={car3} style={{width:"280px"}}/>
                        </div>
                        <div class="card-footer">
                            <center>
                                <h4>Mahindra Thar</h4>
                                <h6>RS.2800 /day  </h6>
                                <h6><span><i class="fa fa-star" style={{color:"gold"}}></i></span> 4.2 | 40 Rides</h6><br></br>
                                <button className="btn btn-primary" onClick={()=>cardetails(car3)}>Details</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <img src={car4} style={{width:"280px"}}/>
                        </div>
                        <div class="card-footer">
                            <center>
                                <h4>Hyundai Creta</h4>
                                <h6>RS.2500 /day  </h6>
                                <h6><span><i class="fa fa-star" style={{color:"gold"}}></i></span> 4.0 | 55 Rides</h6><br></br>
                                <button className="btn btn-primary" onClick={()=>cardetails(car4)}>Details</button>
                            </center>
                        </div>
                    </div>
                </div>
                
            </div>
             {/* cars row 2 */}
             <div className="row" style={{marginTop:"50px"}}>
                <div className="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <img src={car5} style={{width:"280px"}}/>
                        </div>
                        <div class="card-footer">
                            <center>
                                <h4>Maruti Suzuki Swift</h4>
                                <h6>RS.2500 /day  </h6>
                                <h6><span><i class="fa fa-star" style={{color:"gold"}}></i></span> 3.7 | 35 Rides</h6><br></br>
                                <button className="btn btn-primary" onClick={()=>cardetails(car5)}>Details</button>
                            </center>
                        </div>
                    </div>
                </div>
                
            </div><br></br><br></br>
             
        </div>
        </div>
        </>
    )
}
export default Odashboard;