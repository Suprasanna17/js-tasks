import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import ViewAllCars from '../apages/ViewAllCars';
import ViewAllowners from '../apages/ViewAllowners';
import ViewAllusers from '../apages/ViewAllusers';
import Viewstatus from '../apages/Viewstatus';
import Manageowners from '../apages/Manageowners';
import Manageusers from '../apages/Manageusers';


const Adminnav= () => {
  return (
      <Sidebar>
        <Routes>
          <Route path="/" element={<ViewAllCars/>} />
          <Route path="/viewallcars" element={<ViewAllCars/>} />
          <Route path="/viewallusers" element={<ViewAllusers />} />
          <Route path="/viewallowners" element={<ViewAllowners />} />
          <Route path="/viewstatus" element={<Viewstatus />} />
          <Route path="/manageusers" element={<Manageusers />} />
          <Route path="/manageowners" element={<Manageowners />} />
        </Routes>
      </Sidebar>
  );
};

export default Adminnav;