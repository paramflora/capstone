import React from 'react'
import Image from './Image'

const Gallery = (props) => {
  return (
    <>
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="portfolio-items">
              <div className="row">
                {
                  props.data ? props.data.map((d,i) => (
                    <div className="col-sm-6 col-md-4 col-lg-4" key={i}>
                      <Image
                          title={d.title}
                          largeImage={d.largeImage}
                          smallImage={d.smallImage}
                        />
                    </div>
                  ))
                  : "loading..."
                }
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Gallery