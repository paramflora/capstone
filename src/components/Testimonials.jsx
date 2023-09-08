import React from 'react'

const Testimonials = (props) => {
  return (
    <>
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>What our clients say</h2>
          </div>
          <div className="row">
            {
              props.data ? props.data.map((d,i) => (
                <div className="col-md-3" key={i}>
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={d.img} alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>{d.feedback}</p>
                      <div className="testimonial-meta"> -  {d.name}</div>
                    </div>
                  </div>
                </div>
              )):"loading..."
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials