import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './styles.css'; // Import the CSS file
import DoctorList from './components/DoctorList';
import MedicinesComponent from './components/Medicine';
import MySlider from './components/ImageCarousel';
import ServiceCategoryList from './components/ServiceCategoryList';
import ConsultdoctorList from './components/ConsultDocList';


function App() {
  
  return (
    <Router>
      <div>
        {/* Navigation bar with logo */}
        <nav>
          <div className="logo-container">
            <img src="/download.png" alt="Logo" className="logo" />
          </div>
          <ul>
            <li>
              <Link to="/findDoc">Find Doctors</Link>
            </li>
            <li>
              <Link to="/vdoConsult">Video consult</Link>
            </li>
            <li>
              <Link to="/medicines">Medicines</Link>
            </li>
            <li>
              <Link to="/labTest">Lab tests</Link>
            </li>
            <li>
              <Link to="/surgery">Surgeries</Link>
            </li>
            <li className="dropdown">
              <select className="dropbtn">
                <option value="">More</option>
                <option value="/more1">More Option 1</option>
                <option value="/more2">More Option 2</option>
                <option value="/more3">More Option 3</option>
              </select>
            </li>
          </ul>
        </nav>
        
        <div className="component-wrapper" style={{ marginBottom: '90px' }}>
          <MySlider />
        </div>
        
        <div className="component-wrapper" style={{ marginBottom: '90px' }}>
          <ServiceCategoryList />
        </div>
        
        <div className="component-wrapper" style={{ marginBottom: '90px' }}>
          <ConsultdoctorList />
        </div>



        {/* Routes */}
        <Routes>
             <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="findDoc" element={<GoToFindDoctorPage/>} />
            <Route path="vdoConsult" element={<GoToDocListForVdoConsult/>} />
             <Route path="medicines" element={<GoToMedicines/>} /> 
            <Route path="labTest" element={<GoToLabTest/>} />
            <Route path="surgery" element={<GoToSurgeries/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function GoToFindDoctorPage() {
  const navigate = useNavigate();

  return (
    <div>
    <DoctorList pageType="docList" />
      <button onClick={() => navigate('/findDoc/details')}>Show Details</button>
    </div>
  );
}


function GoToDocListForVdoConsult() {
  const navigate = useNavigate();

  return (
    <div>
      <DoctorList pageType="docListForVdoConsult" />
      <button onClick={() => navigate('/vdoConsult/details')}>Show Details</button>
    </div>
  );
}


function GoToMedicines() {
  const navigate = useNavigate();

  return (
    <div>
      <MedicinesComponent />
      {/* <button onClick={() => navigate('/medicines/details')}>Show Details</button> */}
    </div>
  );
}

function GoToLabTest() {
  const navigate = useNavigate();

  return (
    <div>
      <DoctorList pageType="labTest" />
      <button onClick={() => navigate('/labTest/details')}>Show Details</button>
    </div>
  );

}

function GoToSurgeries() {
  const navigate = useNavigate();

  return (
    <div>
      <DoctorList pageType="surgery" />
      <button onClick={() => navigate('/surgery/details')}>Show Details</button>
    </div>
  );
}
function AboutWithButtons() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => navigate('/about/details')}>Show Details</button>
    </div>
  );
}
export default App;
