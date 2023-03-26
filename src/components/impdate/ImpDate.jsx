import React from 'react'
import './imp.css'
const Impdate = () => {
  return (
    <div className="wrapper important-dates text-center">
      <div className="imp-left"><img src="images/important-left.jpg" alt="" /></div>
      <div className="imp-right"><img src="images/important-right.jpg" alt="" /></div>
      <div className="container">
        <div className="heading">
          <h2>Important <span>Dates</span></h2>
        </div>
        {/* <h1 className="started">
          Acceptance Notification Started.
        </h1> */}
        <marquee><h3>Registration Started.</h3></marquee>
        <div className="imp-dates">
          <div className="row">
            <h3 className="submission-of" style={{ width: '562px' }}>Paper Submission</h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="date">02<sup>nd</sup> Feburary 2023</h3>
          </div>
          <div className="row del">
            <h3 className="submission-of" style={{ width: '562px' }}><del>Late Date For Paper Submission</del></h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="date"><del> 10<sup>th</sup> March 2023 <br /> </del></h3>
          </div>
          <div className="row">
            <h3 className="submission-of" style={{ width: '562px' }}>Extended Date For Paper Submission</h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="date"> 18<sup>th</sup> March 2023 <br /></h3>
          </div>
          <div className="row">
            <h3 className="submission-of" style={{ width: '562px' }}>Acceptance Notification</h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="date">10<sup>th</sup> March 2023 <br /> </h3>
          </div>
          <div className="row">
            <h3 className="submission-of" style={{ width: '562px' }}>Camera Ready Paper Submission & Early Bird Registration Deadline</h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="date">20<sup>th</sup> March 2023<br /></h3>
          </div>
          <div className="row">
            <h3 className="submission-of" style={{ width: '562px' }}>Late Registration Deadline  </h3>
            <div className="bullet-design"><div className="bullet-design-hover" /></div>
            <h3 className="date">30<sup>th</sup> March 2023<br /></h3>
          </div>
        </div>
      <div className="paperlink">
      <button className="button-1">
        <a href="https://forms.gle/A3YYhHGyfCbiWYXe8" target="_blank">Registration Link</a>
      </button>
      <button className="button-1" style={{margin: "0 1rem"}}>
        <a href="https://forms.gle/BoZaHQiZPXfwKn1C6" target="_blank">Paper Submission</a>
      </button>
      <button className="button-1">
        <a href="Word_Sample_Template_6.7_x_9.5.docx" target="_blank">Paper Submission Format</a>
      </button>
      <button className="button-1 b2">
        <a href="Guidelines_for_Authors.pdf">Guidelines</a>
      </button>
      </div>
      </div>
    </div>
  )
}

export default Impdate
