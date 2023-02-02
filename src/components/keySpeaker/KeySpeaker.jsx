import React from 'react'
import './keyspeaker.css'
import speaker1 from "../../assets/speaker1.png"
import speaker2 from "../../assets/speaker2.png"
const KeySpeaker = () => {
  return (
<div className="keyspeaker">
  <h1 className='keynote-title'>Keynote Speakers</h1>
  <div className="card-flex">
    <div className="card">
        <img className="image" src={speaker1} alt="" />
        <h1 className="name" style={{textAlign:"center"}}>Shreyas Raghunath</h1>
        <p className="desig">Associate Software Engineer, Fox Corporation</p>
    </div>
    <div className="card">
        <img className="image" src={speaker2} alt="" />
        <h1 className="name" style={{textAlign:"center"}}>Not said</h1>
        <p className="desig">Information Security Officer, PCCW Solutions</p>
    </div>
    <div className="card">
        <img className="image" src={speaker1} alt="" />
        <h1 className="name" style={{textAlign:"center"}}>Dr. Asadi Srinivasulu</h1>
        <p className="desig">Professor of IT & Head Research, LabBlueCrest University</p>
    </div>
    <div className="card">
        <img className="image" src={speaker1} alt="" />
        <h1 className="name" style={{textAlign:"center"}}>Dr. Asadi Srinivasulu</h1>
        <p className="desig">Professor of IT & Head Research, LabBlueCrest University</p>
    </div>
    {/* <div className="card">
        <img className="image" src={speaker1} alt="" />
        <h1 className="name">Not said</h1>
        <p className="desig">not said</p>
    </div> */}
  </div>
</div>
  )
}

export default KeySpeaker

