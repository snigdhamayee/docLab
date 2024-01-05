import React from 'react';
import { Link } from 'react-router-dom';

const ConsultdoctorList = () => {
  const consultdoctors = [
    { title: "Periods doubt or Pregnancy", image: "pregnancy.jpg", bgColor: "lightgreen" },
    { title: "Acne, pimples and skin issues", image: "wash-face.png", bgColor: "pink" },
    { title: "Cold, cough and fever", image: "fever.jpg", bgColor: "lightblue" },
    { title: "Child not feeling well", image: "inotfeelingWell.png", bgColor: "lightblue" },
    { title: "Depression or anxiety", image: "depression.jpg", bgColor: "lightblue" },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <h4>Consult top doctors online for any health concern</h4>
        <p style={{ fontSize: '14px' }}>Private online consultations with verified doctors in all specialists</p>
        

        {consultdoctors.map((doctor, index) => (
         <div key={index} className="col-lg-2 col-md-3 col-sm-6 mb-3" style={{ marginRight: '40px' ,marginTop: '40px' }}>
            <div className="card" style={{ height: '300px', borderColor: 'white' }}>
              <div style={{ backgroundColor: doctor.bgColor, borderRadius: '50%', height: '150px', width: '100%', position: 'absolute', zIndex: '-1' }}></div>
              <img
                src={doctor.image}
                className="card-img-top"
                alt={doctor.title}
                style={{ objectFit: 'cover', height: '150px', borderRadius: '50%' }}
              />
              <div className="card-body">
                <h5 className="card-title">{`${doctor.title}`}</h5>
                <p className="card-text" style={{ color: "deepskyblue" }}>CONSULT NOW</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultdoctorList;
