import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Sidebar from '../components/Sidebar';
function Manageowners() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [owners, setOwners] = useState([]);

  const handleAddOwner = (e) => {
    e.preventDefault();
    const newOwner = { id, name, place };
    setOwners([...owners, newOwner]);
    setId('');
    setName('');
    setPlace('');
  }

  return (
    <>
    <div className="container c">
      <form className="f" onSubmit={handleAddOwner} style={{ backgroundColor: 'white' }} >
        <div className="form-group mb-3">
          <label htmlFor="id">Owner ID:</label>
          <input type="text" className="form-control" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="name">Owner Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="place">Place:</label>
          <input type="text" className="form-control" id="place" value={place} onChange={(e) => setPlace(e.target.value)} />
        </div><br/>
        <center><button type="submit" className="btn btn-primary mb-3">Add</button></center>
      </form>
      <Table striped bordered hover style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Owner ID</th>
            <th>Owner Name</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((owner, index) => (
            <tr key={index}>
              <td>{owner.id}</td>
              <td>{owner.name}</td>
              <td>{owner.place}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    
    </>
  );
}

export default Manageowners;