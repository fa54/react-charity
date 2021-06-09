import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import image1 from "../images/image-copyright-34-120x120.jpg";
import image2 from "../images/image-copyright-35-120x120.jpg";
import image3 from "../images/image-copyright-36-120x120.jpg";

const Members = () => {
  const theme = useTheme();
  const matches940 = useMediaQuery(theme.breakpoints.down("940"));
  const matches675 = useMediaQuery(theme.breakpoints.down("675"));
  return (
    <div style={{ backgroundColor: "#f6f4ee", marginTop: "3rem" }}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "25rem" }}
      >
        <div className="carousel-indicators" style={{ marginBottom: "2rem" }}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{
              height: ".7rem",
              width: ".7rem",
              borderRadius: "50%",
              border: "1px solid grey",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{
              height: ".7rem",
              width: ".7rem",
              borderRadius: "50%",
              border: "1px solid grey",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{
              height: ".7rem",
              width: ".7rem",
              borderRadius: "50%",
              border: "1px solid grey",
              backgroundColor: "transparent",
            }}
          ></button>
        </div>
        <div className="carousel-inner" style={{ textAlign: "center" }}>
          <div className="carousel-item active">
            <img
              src={image1}
              alt="image1"
              style={{ borderRadius: "50%", marginTop: "3rem" }}
            />
            <p
              style={{
                width: matches675 ? "95%" : matches940 ? "70%" : "50%",
                margin: "0 auto",
                marginTop: "1rem",
                color: "#1F0E05",
                fontSize: matches675 ? "1.1rem" : "1.4rem",
              }}
            >
              I continue to be inspired that your organization was founded by a
              group of people who have made it their mission to improve the
              quality of life for so many in our community.
            </p>
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              alt="image1"
              style={{ borderRadius: "50%", marginTop: "3rem" }}
            />
            <p
              style={{
                width: matches675 ? "95%" : matches940 ? "70%" : "50%",
                margin: "0 auto",
                marginTop: "1rem",
                color: "#1F0E05",
                fontSize: matches675 ? "1.1rem" : "1.4rem",
                backgroundColor: "transparent",
              }}
            >
              I continue to be inspired that your organization was founded by a
              group of people who have made it their mission to improve the
              quality of life for so many in our community.
            </p>
          </div>
          <div className="carousel-item">
            <img
              src={image3}
              alt="image1"
              style={{ borderRadius: "50%", marginTop: "3rem" }}
            />
            <p
              style={{
                width: matches675 ? "95%" : matches940 ? "70%" : "50%",
                margin: "0 auto",
                marginTop: "1rem",
                color: "#1F0E05",
                fontSize: matches675 ? "1.1rem" : "1.4rem",
                backgroundColor: "transparent",
              }}
            >
              I continue to be inspired that your organization was founded by a
              group of people who have made it their mission to improve the
              quality of life for so many in our community.
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Members;
