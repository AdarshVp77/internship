import React from 'react'

const AboutUs = () => {
  return (
    <>{/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="img/about.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="fs-5 bg-white text-start text-dark pe-3">
              About Us
            </h6>
            <h1 className="mb-4">Welcome to ICTAK</h1>
            <p className="mb-4">
            ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.</p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i class="bi bi-star-fill text-dark me-2" />
                  World's leading Instructors
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i class="bi bi-star-fill text-dark me-2" />
                  Hybrid Classes
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i class="bi bi-star-fill text-dark me-2" />
                  Skilled Instructors
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i class="bi bi-star-fill text-dark me-2" />
                  Globally recognized certifications
                </p>
              </div>
            </div>
            <a className="btn btn-dark py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}</>
  )
}

export default AboutUs