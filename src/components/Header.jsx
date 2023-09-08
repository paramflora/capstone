import React from 'react'

const Header = (props) => {
  return (
    <>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-12 intro-text">
                  <div>
                    <h1>
                    {props.data ? props.data.title : "Not Found"}
                    </h1>
                    <p> {props.data ? props.data.paragraph : "Not Found"}</p>
                    <a href="#features" className="btn btn-custom btn-lg page-scroll">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header