import React from 'react'

const Services = (props) => {
  return (
    <>
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
          {
            props.data ? props.data.map((d,i) => (
              <div className="col-md-4" key={i}>
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading..."
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Services