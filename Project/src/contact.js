import React from 'react';
import { Link } from 'react-router-dom';
function Contact(){
    return(
        <>
            <div className='main'>
                <div className='container-fluid g-0'>
                <div className="row g-0 nav">
                    <div className="col-md-3">
                        <h1 style={{color:"#F8D210"}}><b>T2's Car Rental <span><i class="fa fa-car"></i></span></b></h1>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-5 navli">
                    <ul>
                        <Link to='/login' style={{textDecoration:"none"}}><li>Login</li></Link>
                        <Link to='/signup' style={{textDecoration:"none"}}><li>Signup</li></Link>
                        <Link to='/contact' style={{textDecoration:"none"}}><li>Contact</li></Link>
                    </ul>
                    </div>
                </div><br/><br/><br/>
                <div className='row g-0'>
                    <div className='col-md-4'></div>
                    <div className='row'>
                    <div className='col-md-4'></div>  
                    <div className='col-md-4 login'>
                        <h3 style={{textAlign:"center",color:"white",paddingTop:"10px"}}>Contact Us</h3>
                        <br/><br/>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-2'>
                                <i class="fa fa-phone fa-2x" style={{color:"white"}}></i>
                            </div>
                            <div className='col-md-2'>
                                <h3 style={{color:"white"}}>9999999999</h3>
                            </div>
                        </div>
                        <br/><br/>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-2'>
                                <i class="fa fa-envelope fa-2x" style={{color:"white"}}></i>
                            </div>
                            <div className='col-md-2'>
                                <h3 style={{color:"white"}}>t2scars@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-4'></div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Contact;