import React from "react";
import "./publication.css";
import lead from "../../assets/lead.jpeg";
const Publication = () => {
  return (
    <div className="publication">
      <div className="pub-container">
        <div className="right">
          <h1 data-aos="fade-left">Publications</h1>
          <p style={{ fontSize: "1.25rem" }} data-aos="fade-in">
            We will recommend the conference proceedings for Scopus Indexing.{" "}
            <strong>Taylor & Francis</strong> will take final decision on
            indexing your paper.
          </p>
          <p data-aos="zoom-in">
            Mail To:{" "}
            <span>
              <strong>icarsi@saveetha.ac.in</strong>
            </span>
          </p>
        </div>
        {/* {/* <div className="left">
          <h1 data-aos="fade-left">Registration Fee</h1>
          <div className="early">
            <p data-aos="zoom-in" className='each' style={{ textAlign: 'initial' }}>Early Bird Registration Fee:{"(Student - UG, PG, RS & Academics)"}</p>
            <p data-aos="zoom-in" className='price'>9,000 INR</p>
          </div>
          <div className="early">
            <p data-aos="zoom-in" className='each'>Late Registration Registration Fee:</p>
            <p data-aos="zoom-in" className='price'>10,000 INR</p>
          </div> 
        </div> */}
        <div className="lead">
          <h1>Lead Editor</h1>
          <img src={lead} alt="" style={{ margin: "1rem 0" }} />
          <p>
            Dr Rachit Garg, School of Computer Science & Engineering, Lovely
            Professional University, Punjab, India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publication;
