import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Nav from './pages/nav';
import Status from './pages/status';
import Car from './pages/cars';
import History from './pages/history';
import Profile from './pages/profile';
import Cardetails from './pages/cardetails';
import Bookingdetails from './pages/bookingdetails';
import Payment from './pages/payment';
import ONav from './ownerpages/onav';
import Odashboard from './ownerpages/odashboard';
import Ohistory from './ownerpages/ohistory';
import Ostatus from './ownerpages/ostatus';
import Login from './login';
import Main from './main';
import Signup from './signup';
import Adminnav from './components/adminnav';
import ViewAllCars from './apages/ViewAllCars';
import ViewAllowners from './apages/ViewAllowners';
import ViewAllusers from './apages/ViewAllusers';
import Viewstatus from './apages/Viewstatus';
import Manageowners from './apages/Manageowners';
import Manageusers from './apages/Manageusers';
import Sidebar from './components/Sidebar';
import Contact from './contact';
import Ologin from './ologin';
import Alogin from './alogin';
import Ocardetails from './ownerpages/ocardetails';
import Opayment from './ownerpages/opayment';
function App() {
  return (
    <>
    <Routes>
      <Route path='/adminav/*' element={<Adminnav/>}/>
      <Route path='/' element={<Main/>}/>
      <Route path='/userdashboard' element={<Car/>}/>
      <Route path='/status' element={<Status/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/cardetails' element={<Cardetails/>}/>
      <Route path='/bookingdetails' element={<Bookingdetails/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/ologin' element={<Ologin/>}/>
      <Route path='/alogin' element={<Alogin/>}/>


    </Routes>

    <Routes>
      <Route path='/odashboard' element={<Odashboard/>}/>
      <Route path='/ostatus' element={<Ostatus/>}/>
      <Route path='/ohistory' element={<Ohistory/>}/>
      <Route path='/ohistory' element={<Ohistory/>}/>
      <Route path='/ocardetails' element={<Ocardetails/>}/>
      <Route path='/opayment' element={<Opayment/>}/>

    </Routes>

    
    

  </>
  );
}

export default App;
