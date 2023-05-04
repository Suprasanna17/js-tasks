import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../assests/image1.jpg';
import Image2 from '../assests/Image2.jpeg';
import Image3 from '../assests/Image3.jpg';
import Image4 from '../assests/Image4.jpg';
import Image5 from '../assests/Image5.jpg';
import Image6 from '../assests/Image6.jpg';
import Image7 from '../assests/Image7.jpeg';
import Image8 from '../assests/Image8.jpg';
import Image9 from '../assests/Image9.jpg';
import Adminnav from '../components/adminnav';
// import Sidebar from '../components/Sidebar';
// import {Routes,Route} from 'react-router-dom'
// import ViewAllowners from './ViewAllowners';
// import ViewAllusers from './ViewAllusers';
// import Viewstatus from './Viewstatus';
// import Manageowners from './Manageowners';
// import Manageusers from './Manageusers';
const ViewAllCars = () => {
    return (
      <>
      <div>
       
        <div className="row">
          <div className="col-md-4">
            <Card className="one">
              <Card.Img variant="tops" src={Image1} alt="Image 1" />
              <Card.Body  className="three">
                <Card.Title className="two">PORSCHE</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="one">
              <Card.Img variant="tops" src={Image2} alt="Image 2" />
              <Card.Body  className="three">
                <Card.Title  className="two">AUDI</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="tops" src={Image3} alt="Image 3" />
              <Card.Body  className="three">
                <Card.Title  className="two">LAMBORGHINI</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card className="one">
              <Card.Img variant="tops" src={Image4} alt="Image 4" />
              <Card.Body  className="three">
                <Card.Title  className="two">SUZUKI</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="one">
              <Card.Img variant="tops" src={Image5} alt="Image 5" />
              <Card.Body  className="three">
                <Card.Title  className="two">KIA</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="one">
              <Card.Img variant="tops" src={Image6} alt="Image 6" />
              <Card.Body  className="three">
                <Card.Title  className="two">BMW</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card className="one">
              <Card.Img variant="tops" src={Image7} alt="Image 7" />
              <Card.Body  className="three">
                <Card.Title  className="two">MERCEDES</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="one">
              <Card.Img variant="tops" src={Image8} alt="Image 8" />
              <Card.Body  className="three">
                <Card.Title  className="two">TESLA</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="one">
              <Card.Img variant="tops" src={Image9} alt="Image 9" />
              <Card.Body className="three">
                <Card.Title  className="two">SWIFT</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      </>
      
    );
  };

export default ViewAllCars
