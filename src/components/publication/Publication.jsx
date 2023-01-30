import React from 'react'
import './publication.css'
const Publication = () => {
  return (
    <div className='publication'>
      <div className="pub-container">
        <div className="right">
          <h1>Publications</h1>
          <p>All accepted papers will be published in Taylor and Francis Conference Preceedings. Selected papers after peer review would be published in reputed journal.</p>
          <p>Mail To: <span><strong>icarsi@saveetha.ac.in</strong></span></p>
        </div>
        <div className="left">
          <h1>Registration Fee</h1>
          <div className="early">
            <p className='each' style={{ textAlign: 'initial' }}>Early Bird Registration Fee:{"(Student - UG, PG, RS & Academics)"}</p>
            <p className='price'>9,000 INR</p>
          </div>
          <div className="early">
            <p className='each'>Late Registration Registration Fee:</p>
            <p className='price'>10,000 INR</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Publication