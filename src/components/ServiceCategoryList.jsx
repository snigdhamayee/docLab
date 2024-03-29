import React from 'react';

const ServiceCategoryList = () => {
    const serviceCategories = [
        { subTitle: "Confirned appointment", title: "Find Doctors Near you" , image: "doctorImg.jpg" },
        { subTitle: "Connect within 60 sec", title: "Instant Vedio Consultation " , image: "vdoConsultDoc.jpg" },
        { subTitle: "Essentials at your doorstep", title: "Medicines" , image: "deliveryBoy.jpg" },
        { subTitle: "Sample pickup at your home", title: "Lab Tests" , image: "labTest1.jpg"},
        { subTitle: "Safe and trusted surgery centers", title: "Surgeries" , image: "surgeryImg.jpg" },
        // Add more data as needed
    ];


    return (
      <div className="container mt-4">
        <div className="row">
        <h4>Top services provided by our team </h4>
        <p style={{ fontSize: '14px' }}>Both online and offLine Services  </p>
          {serviceCategories.map((service, index) => (
           <div key={index} className="col-lg-2 col-md-3 col-sm-6 mb-3" style={{ marginRight: '40px' }}>
              <div className="card" style={{ height: '250px', borderRadius: '30px' }}>
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                  style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '30px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{`${service.title}`}</h5>
                  <p className="card-text">{` ${service.subTitle}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
          };      
export default ServiceCategoryList;