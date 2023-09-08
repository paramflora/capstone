import React from 'react'

const Team = (props) => {
  return (
    <>
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-12 section-title">
            <h2>Meet the Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            {
              props.data ? props.data.map((d,i) => (
                <div className="col-md-3 col-sm-6 team" key={i}>
                  <div className="thumbnail">
                    <img src={d.profile} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              )): "loading..."
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Team