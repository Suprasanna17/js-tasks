import React from "react";
import ONav from "./onav";
function Ohistory(){
    return(
        <div className="main">
        <ONav/>
        <div className="container">
            <br></br>
            <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2 style={{textAlign:"center",fontWeight:"bold"}}>History</h2>
                    </div>
                    <div className="col-md-3"></div>
            </div><br></br>
            <div className="maindiv">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-7 hist">
                    <table className="table">
                        <tr>
                            <th>Sno</th>
                            <th>Car Model</th>
                            <th>Licence No</th>
                            <th>Duration</th>
                            <th>Feedback</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mercedes Benz</td>
                            <td>Ap 05 5033</td>
                            <td>48 hrs</td>
                            <td>Good</td>
                        </tr>
                    </table>
                </div>
                <div className="col-md-3"></div>
                
            </div>
            </div>
        </div>
        </div>
    )
}
export default Ohistory;