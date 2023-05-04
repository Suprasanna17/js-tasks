import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Alogin(){
    const navigate=useNavigate();
    const log=()=>{
        navigate('/adminav');
    }
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
                        <Link to='/contact' style={{textDecoration:"none"}}><li>Contact</li></Link>
                    </ul>
                    </div>
                </div><br/><br/><br/>
                <div className='row g-0'>
                    <div className='col-md-4'></div>
                    <div className='row'>
                    <div className='col-md-4'></div>  
                    <div className='col-md-4 login'>
                        <h3 style={{textAlign:"center",color:"white",paddingTop:"10px"}}>Login</h3>
                        <br/>
                        <form action="/action_page.php">
                            <div class="form-group">
                                <label for="email" style={{color:"white"}}>Email address:</label>
                                <input type="email" class="form-control" id="email"/>
                            </div><br/>
                            <div class="form-group">
                                <label for="pwd" style={{color:"white"}}>Password:</label>
                                <input type="password" class="form-control" id="pwd"/>
                            </div>
                            <div class="checkbox">
                                <label style={{color:"white"}}><input type="checkbox"/> Remember me</label>
                            </div><br/>
                            <center><button type="submit" class="btn btn-primary btn-lg" onClick={log}>Submit</button></center>
                        </form>
                    </div>
                    </div>
                    <div className='col-md-4'></div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Alogin;