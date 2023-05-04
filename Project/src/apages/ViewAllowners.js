// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const ViewAllowners = () => {
//     return (
//         <div>
//           <div className="row">
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://www.w3schools.com/howto/img_avatar2.png" alt="Image 1" />
//                 <Card.Body>
//                   <Card.Title>JENNIE</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="Image 2" />
//                 <Card.Body>
//                   <Card.Title>NOAH</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/724/370/original/isolated-businessman-avatar-with-necktie-design-free-vector.jpg" alt="Image 3" />
//                 <Card.Body>
//                   <Card.Title>OLIVER</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg" alt="Image 4" />
//                 <Card.Body>
//                   <Card.Title>JAMES</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/400/532/non_2x/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg" alt="Image 5" />
//                 <Card.Body>
//                   <Card.Title>TONY</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/484/921/original/businessman-avatar-cartoon-design-free-vector.jpg" alt="Image 6" />
//                 <Card.Body>
//                   <Card.Title>HARRY</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/014/074/145/original/businessman-avatar-icon-vector.jpg" alt="Image 7" />
//                 <Card.Body>
//                   <Card.Title>LARRY</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://img.freepik.com/premium-vector/businessman-avatar_24908-26533.jpg" alt="Image 8" />
//                 <Card.Body>
//                   <Card.Title>JAKE</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://img.freepik.com/premium-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg" alt="Image 9" />
//                 <Card.Body>
//                   <Card.Title>CARL</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//           </div>
//         </div>
//       );
// };

// export default ViewAllowners;
import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const ViewAllowners = () => {
  const [owners, setOwners] = useState([
    { id: 1, name: 'John Smith', place: 'New York' },
    { id: 2, name: 'Jane Doe', place: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', place: 'Chicago' },
    { id: 4, name: 'Alice Lee', place: 'San Francisco' },
    { id: 5, name: 'Mark Davis', place: 'Miami' },
    { id: 6, name: 'Emily Wilson', place: 'Seattle' },
    { id: 7, name: 'David Brown', place: 'Dallas' },
    { id: 8, name: 'Karen Chen', place: 'Houston' },
  ]);
  const [showAllOwners, setShowAllOwners] = useState(false);

  const toggleShowAllOwners = () => setShowAllOwners(!showAllOwners);

  return (
    <>
      <center><Button className="view-all-button" onClick={toggleShowAllOwners}>View All Owners</Button></center>
      {showAllOwners && (
        <div className="table-container">
          <Table className="owner-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Place</th>
              </tr>
            </thead>
            <tbody>
              {owners.map(owner => (
                <tr key={owner.id}>
                  <td>{owner.id}</td>
                  <td>{owner.name}</td>
                  <td>{owner.place}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default ViewAllowners;