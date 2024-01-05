import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap 5 CSS
import '../styles.css';

const DoctorList = ({ pageType }) => {
  const doctors = [
    { name: 'Dr. Strange', speciality: 'Cardiologist', experience: 10, image: '/cardiaologist.jpg' },
    { name: 'Dr. Banner', speciality: 'Neurologist', experience: 5, image: '/neurologist.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
  ];

  const docListForVdoConsult = [
    { name: 'Dr. Snigdhamayee Sahoo', speciality: 'Neurologist', experience: 10, image:  '/neurologist.jpg' ,bgColor : "lightblue"},
    { name: 'Dr. Lalita Biswal', speciality: 'Cardiologist', experience: 5, image: '/cardiaologist.jpg' ,bgColor : "lavender"},
    { name: 'Dr. Biswajit Patra', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' ,bgColor : "lightgrey"},
    { name: 'Dr. Sanghamitra Swain', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' ,bgColor : "pink"},
    { name: 'Dr. Biswajit Patra', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' ,bgColor : "lightyellow"},
    { name: 'Dr. Sanghamitra Swain', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' ,bgColor : "lightblue"},
    { name: 'Dr. Biswajit Patra', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' ,bgColor : "lavender"},
    { name: 'Dr. Sanghamitra Swain', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' ,bgColor : "lightgrey"},
    { name: 'Dr. Biswajit Patra', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' ,bgColor : "lightpink"},
    { name: 'Dr. Sanghamitra Swain', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' ,bgColor : "lightyellow"},
    { name: 'Dr. Biswajit Patra', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' ,bgColor : "lightgrey"},
    { name: 'Dr. Sanghamitra Swain', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' ,bgColor : "lavender"},
    { name: 'Dr. Biswajit Patra', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' ,bgColor : "pink"},
    { name: 'Dr. Sanghamitra Swain', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' ,bgColor : "lightgrey"},
    { name: 'Dr. Biswajit Patra', speciality: 'Dentist', experience: 15, image: '/dentist.jpg'  ,bgColor : "lavender"},
    { name: 'Dr. Sanghamitra Swain', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' ,bgColor : "lightblue"},
  ];

  const labTest = [
    { name: 'A lab', test: 'Blood test', Location: 'Bbsr', image: '/bldTst.jpg' },
    { name: 'B lab', test: 'Urine test', Location: 'ctc', image: '/urnTst.jpg' },
    { name: 'C lab', test: 'Sugar test', Location: 'Bangalore', image: '/bldTst.jpg' },
    { name: 'D lab', test: 'Blood test', Location: 'Bhadrak', image: '/urnTst.jpg' },
    { name: 'C lab', test: 'Sugar test', Location: 'Bangalore', image: '/bldTst.jpg' },
    { name: 'D lab', test: 'Blood test', Location: 'Bhadrak', image: '/urnTst.jpg' },
    { name: 'C lab', test: 'Sugar test', Location: 'Bangalore', image: '/bldTst.jpg' },
    { name: 'D lab', test: 'Blood test', Location: 'Bhadrak', image: '/urnTst.jpg' },
    { name: 'C lab', test: 'Sugar test', Location: 'Bangalore', image: '/bldTst.jpg' },
    { name: 'D lab', test: 'Blood test', Location: 'Bhadrak', image: '/urnTst.jpg' },
    { name: 'C lab', test: 'Sugar test', Location: 'Bangalore', image: '/bldTst.jpg' },
    { name: 'D lab', test: 'Blood test', Location: 'Bhadrak', image: '/urnTst.jpg' },
    { name: 'C lab', test: 'Sugar test', Location: 'Bangalore', image: '/bldTst.jpg' },
    { name: 'D lab', test: 'Blood test', Location: 'Bhadrak', image: '/urnTst.jpg' },
    { name: 'C lab', test: 'Sugar test', Location: 'Bangalore', image: '/bldTst.jpg' },
    { name: 'D lab', test: 'Blood test', Location: 'Bhadrak', image: '/urnTst.jpg' },
  ];


  const surgeries = [
    { name: 'Dr. Strange', speciality: 'Cardiologist', experience: 10, image: '/cardiaologist.jpg' },
    { name: 'Dr. Banner', speciality: 'Neurologist', experience: 5, image: '/neurologist.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
    { name: 'Dr. Stark', speciality: 'Dentist', experience: 15, image: '/dentist.jpg' },
    { name: 'Dr. Parker', speciality: 'Surgeon', experience: 20, image: '/doctorImg.jpg' },
  ];

  if (pageType === 'docList') {
    return (
      <div className="container mt-4">
        <h2>Doctor List</h2>
        <div className="row">
          {doctors.map((doctor, index) => (
            <div key={index} className="col-md-2 mb-2">
              <div className="card">
                <img
                  src={doctor.image}
                  className="card-img-top"
                  alt={doctor.name}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{`Name: ${doctor.name}`}</h5>
                  <p className="card-text">{`Specialization: ${doctor.speciality}`}</p>
                  <p className="card-text">{`Experience: ${doctor.experience} years`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (pageType === 'docListForVdoConsult') {
    return (
      <div className="container mt-4">
        <h2>Video Consultation</h2>
        <div className="row">
          {docListForVdoConsult.map((doctor, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className="card" style={{ height: "350px", padding: '10px', margin: '10px', backgroundColor: doctor.bgColor }}>
                <img
                  src={doctor.image}
                  className="card-img-top"
                  alt={doctor.name}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{`Name: ${doctor.name}`}</h5>
                  <p className="card-text">{`Specialization: ${doctor.speciality}`}</p>
                  <p className="card-text">{`Experience: ${doctor.experience} years`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    

  } else if (pageType === 'labTest') {
    return (
      <div className="container mt-4">
        <h2>Lab test</h2>
        <div className="row">
          {labTest.map((lab, index) => (  // <-- Change docListForVdoConsult to labTest
            <div key={index} className="col-md-2 mb-2">
              <div className="card">
                <img
                  src={lab.image}
                  className="card-img-top"
                  alt={lab.name}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{`Name: ${lab.name}`}</h5>
                  <p className="card-text">{`Location: ${lab.Location}`}</p>
                  <p className="card-text">{`Test: ${lab.test} `}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } 
  else if (pageType === 'surgery') {
    return(
      <div className="container mt-4">
        <h2>Sugery Specialist</h2>
        <div className="row">
          {docListForVdoConsult.map((surgeries, index) => (
            <div key={index} className="col-md-2 mb-2">
              <div className="card">
                <img
                  src={surgeries.image}
                  className="card-img-top"
                  alt={surgeries.name}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{`Name: ${surgeries.name}`}</h5>
                  <p className="card-text">{`Specialization: ${surgeries.speciality}`}</p>
                  <p className="card-text">{`Experience: ${surgeries.experience} years`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  else {
    return null;
  }
};

export default DoctorList;
