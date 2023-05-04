import React from "react";
import Nav from "./nav";
function Profile(){
    return(
        <div className='main'>
        <Nav/>
        <div className="container">
        <br></br>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2 style={{textAlign:"center",fontWeight:"bold"}}>Profile</h2>
                </div>
                <div className="col-md-3"></div>
            </div><br></br>
            <div className="maindiv">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-6 pro" >
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>Ms</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>Ms@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone No</td>
                            <td>:</td>
                            <td>9999999999</td>
                        </tr>
                    </table>
                </div>
            </div>
            </div>

        </div>
        </div>
    )
}
export default Profile;