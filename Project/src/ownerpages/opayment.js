import React from "react";
import ONav from "./onav";
function Opayment(){
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
                            <th>Transaction Id</th>
                            <th>Car Model</th>
                            <th>user Name</th>
                            <th>Amount</th>
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
export default Opayment;