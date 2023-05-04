import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Sidebar from '../components/Sidebar';

function Manageusers() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [users, setUsers] = useState([]);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = { id, name, place };
    setUsers([...users, newUser]);
    setId('');
    setName('');
    setPlace('');
  }

  return (
    <>
    <div className="container">
      <form className="f" onSubmit={handleAddUser} style={{ backgroundColor: 'white' }} >
        <div className="form-group ">
          <label htmlFor="id">User ID:</label>
          <input type="text" className="form-control" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="name">User Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group ">
          <label htmlFor="place">Place:</label>
          <input type="text" className="form-control" id="place" value={place} onChange={(e) => setPlace(e.target.value)} />
        </div><br/>
        <center><button type="submit" className="btn btn-primary ">Add</button></center>
      </form>
      <Table striped bordered hover style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.place}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default Manageusers;