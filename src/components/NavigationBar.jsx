import recat from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';

const App = () => {
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

    export default NavigationBar;