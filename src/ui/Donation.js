import React from "react";
import donationImage from "../images/image-1-rtv-copyright.jpg";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Donation = () => {
  const theme = useTheme();
  const matches630 = useMediaQuery(theme.breakpoints.down("630"));
  return (
    <div
      style={{
        backgroundImage: `url(${donationImage})`,
        height: "30rem",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <Typography
          style={{
            color: theme.palette.tertiary.main,
            fontFamily: "Permanent Marker",
            fontSize: "1.1rem",
            paddingTop: "5rem",
          }}
        >
          Donation Program
        </Typography>
        <Typography
          style={{
            color: "#fff",
            fontSize: matches630 ? "1.8rem" : "3.5rem",
            lineHeight: matches630 ? "3rem" : "4rem",
            marginTop: "1rem",
          }}
        >
          Join Us to Help African <br />{" "}
          <span style={{ fontWeight: "bold" }}>People in Need.</span>
        </Typography>
        <Typography
          style={{
            color: "#fff",
            fontSize: "1.2rem",
            marginTop: matches630 ? "1rem" : "2rem",
          }}
        >
          Everyone can take their part in making the world better.
        </Typography>
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.palette.tertiary.main,
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            marginTop: "2rem",
          }}
        >
          More About Us
        </Button>
      </Container>
    </div>
  );
};

export default Donation;
