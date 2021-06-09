import React from "react";
import charity1 from "../images/charity-slide-01-copyright.jpg";
import charity2 from "../images/charity-slide-02-copyright.jpg";
import charity3 from "../images/charity-slide-03-copyright.jpg";
import CarouselCaption from "../components/CarouselCaption";

const LandingPage = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            border: "1px solid #fff",
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            border: "1px solid #fff",
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            border: "1px solid #fff",
          }}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={charity1}
            className="d-block w-100 "
            alt="..."
            style={{ objectFit: "cover", height: "100vh" }}
          />
          <CarouselCaption
            mainTitle={
              <React.Fragment>
                Every Child Deserves a <br /> Better Future
              </React.Fragment>
            }
          />
        </div>
        <div className="carousel-item">
          <img
            src={charity2}
            className="d-block w-100"
            alt="..."
            style={{ objectFit: "cover", height: "100vh" }}
          />
          <CarouselCaption
            mainTitle={
              <React.Fragment>
                Action Speaks Louder
                <br /> Than Words
              </React.Fragment>
            }
          />
        </div>
        <div className="carousel-item">
          <img
            src={charity3}
            className="d-block w-100 "
            alt="..."
            style={{ objectFit: "cover", height: "100vh" }}
          />
          <CarouselCaption
            mainTitle={
              <React.Fragment>
                Participating in Building a <br /> Better Future
              </React.Fragment>
            }
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon d-none d-md-block"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon d-none d-md-block"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default LandingPage;
