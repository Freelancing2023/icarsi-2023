import React from "react";
import "./keyspeaker.css";
import speaker1 from "../../assets/speaker1.png";
import speaker2 from "../../assets/speaker2.png";
import speaker3 from "../../assets/speaker3.png";
import speaker4 from "../../assets/speaker4.png";
const KeySpeaker = () => {
  return (
    <div className="keyspeaker">
      <h1 className="keynote-title">Keynote Speakers</h1>
      <div className="card-flex">
        <div className="card">
          <img className="image" src={speaker4} alt="" />
          <h1 className="name" style={{ textAlign: "center" }}>
            Dr. Asadi Srinivasulu
          </h1>
          <p className="desig">
            Professor & HOD. Head Research of Data Science. Data Science
            Research Laboratory BlueCrest University, Monrovia, Liberia.
          </p>
        </div>
        <div className="card">
          <img className="image" src={speaker3} alt="" />
          <h1
            className="name"
            style={{ textAlign: "center", fontSize: "1rem" }}
          >
            Dr.Lochandaka Ranathunga
          </h1>
          <p className="desig">
            Department of Information Technology, University of Moratuwa, Sri
            Lanka
          </p>
        </div>
        <div className="card">
          <img className="image" src={speaker1} alt="" />
          <h1 className="name" style={{ textAlign: "center" }}>
            Shreyas Raghunath
          </h1>
          <p className="desig">
            Associate Software Engineer, Fox Corporation Cincinnati, Ohio, United
            States
          </p>
        </div>
        <div className="card">
          <img className="image" src={speaker2} alt="" />
          <h1 className="name" style={{ textAlign: "center" }}>
            Muruga Laxmanen
          </h1>
          <p className="desig">
            Information Security Officer, PCCW Solutions, Singapore.
          </p>
        </div>
        {/* <div className="card">
        <img className="image" src={speaker1} alt="" />
        <h1 className="name">Not said</h1>
        <p className="desig">not said</p>
    </div> */}
      </div>
    </div>
  );
};

export default KeySpeaker;
