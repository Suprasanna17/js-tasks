import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Sidebar from '../components/Sidebar';

function Viewstatus() {
  const [id, setId] = useState('');
  const [carReg, setCarReg] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Your search logic here
    const results = [
      { id: '123', carReg: 'ABC123', cname: 'John Doe', rentDate: '2023-04-28', returnDate: '2023-05-05', amount: '$50' },
      { id: '456', carReg: 'XYZ789', cname: 'Jane Doe', rentDate: '2023-05-01', returnDate: '2023-05-07', amount: '$70' },
    ];
    setSearchResults(results.filter(result => result.id === id && result.carReg === carReg));
  }

  return (
    <>
    <div className="container c">
      <form className='f' onSubmit={handleSearch} style={{ backgroundColor: 'white' }}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input type="text" className="form-control " id="id" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="carReg">Car Reg:</label>
          <input type="text" className="form-control" id="carReg" value={carReg} onChange={(e) => setCarReg(e.target.value)} />
        </div><br/>
        <center><button type="submit" className="btn btn-primary">Search</button></center>
      </form>
      <Table striped bordered hover style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Car Reg</th>
            <th>Cname</th>
            <th>Rent Date</th>
            <th>Return Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result, index) => (
            <tr key={index}>
              <td>{result.id}</td>
              <td>{result.carReg}</td>
              <td>{result.cname}</td>
              <td>{result.rentDate}</td>
              <td>{result.returnDate}</td>
              <td>{result.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default Viewstatus;