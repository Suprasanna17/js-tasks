import React from "react";
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <div className="container-fluid g-0">
            <div className="row g-0 nav">
                <div className="col-md-3">
                    <h1 style={{color:"#F8D210"}}><b>T2's Car Rental <span><i class="fa fa-car"></i></span></b></h1>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-5 navli">
                    <ul>
                        <Link to='/userdashboard' style={{textDecoration:"none"}}><li>Cars</li></Link>
                        <Link to='/status' style={{textDecoration:"none"}}><li>Status</li></Link>
                        <Link to='/history' style={{textDecoration:"none"}}><li>History</li></Link>
                        <Link to='/profile' style={{textDecoration:"none"}}><li>Profile</li></Link>
                        <Link to='/' style={{textDecoration:"none"}}><li>Logout</li></Link>


                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Nav;