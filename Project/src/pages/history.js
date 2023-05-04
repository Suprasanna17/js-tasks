import React from "react";
import Nav from "./nav";
function History(){
    return(
        <div className="main">
        <Nav/>
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
                <div className="col-md-6 hist">
                    <table className="table">
                        <tr>
                            <th>Sno</th>
                            <th>Car Model</th>
                            <th>Duration</th>
                            <th>Feedback</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mercedes Benz</td>
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
export default History;