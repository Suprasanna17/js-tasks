// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ViewAllusers = () => {
//     return (
//         <div>
//           <div className="row">
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://www.w3schools.com/w3images/avatar2.png" alt="Image 1" />
//                 <Card.Body>
//                   <Card.Title>DHAR</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://www.w3schools.com/w3images/avatar6.png" alt="Image 2" />
//                 <Card.Body>
//                   <Card.Title>KRISTEN</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=360" alt="Image 3" />
//                 <Card.Body>
//                   <Card.Title>LUKE</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://img.freepik.com/premium-vector/male-avatar-flat-icon-design-vector-illustration_549488-103.jpg" alt="Image 4" />
//                 <Card.Body>
//                   <Card.Title>MARK</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="Image 5" />
//                 <Card.Body>
//                   <Card.Title>BILL</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://img.freepik.com/premium-vector/avatar-icon001_750950-50.jpg?w=360" alt="Image 6" />
//                 <Card.Body>
//                   <Card.Title>LUCY</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg" alt="Image 7" />
//                 <Card.Body>
//                   <Card.Title>KEN</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://img.freepik.com/premium-vector/person-avatar-icon-design-vector-multiple-use-vector-illustration_625349-280.jpg" alt="Image 8" />
//                 <Card.Body>
//                   <Card.Title>KEVIN</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//             <div className="col-md-4">
//               <Card>
//                 <Card.Img variant="top" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg" alt="Image 9" />
//                 <Card.Body>
//                   <Card.Title>STEVE</Card.Title>
//                 </Card.Body>
//               </Card>
//             </div>
//           </div>
//         </div>
//       );
// };

// export default ViewAllusers;
import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
const ViewAllusers = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'John', place: 'New York' },
    { id: 2, username: 'Jane', place: 'Los Angeles' },
    { id: 3, username: 'Bob', place: 'Chicago' },
    { id: 4, username: 'Jake', place: 'Mexico' },
    { id: 5, username: 'Luke', place: 'Vietnam' },
    { id: 6, username: 'Noah', place: 'Canada' },
    { id: 7, username: 'Kristen', place: 'South korea' },
    { id: 8, username: 'Mark', place: 'Russia' },
  ]);
  const [showAllUsers, setShowAllUsers] = useState(false);

  const toggleShowAllUsers = () => setShowAllUsers(!showAllUsers);

  return (
    <>
      <center><Button onClick={toggleShowAllUsers}>View All Users</Button></center>
      {showAllUsers && (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Place</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.place}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ViewAllusers;