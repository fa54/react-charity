import React from "react";
import ProgramBackground from "../images/footer-bg-copyright.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

const Program = () => {
  const theme = useTheme();
  const matches618 = useMediaQuery(theme.breakpoints.down("618"));
  return (
    <div
      style={{
        height: "25rem",
        backgroundImage: `url(${ProgramBackground})`,
        backgroundSize: "cover",
        marginTop: "5rem",
      }}
    >
      <Grid container direction="column" alignItems="center">
        <Typography
          style={{
            color: theme.palette.tertiary.main,
            fontFamily: "Permanent Marker",
            marginTop: "5rem",
          }}
        >
          DONATION PROGRAM
        </Typography>
        <Typography
          style={{
            color: "#fff",
            fontSize: matches618 ? "2rem" : "3rem",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          Join Us to Help African <br />
          <span style={{ fontWeight: "bold" }}>People in Need.</span>
        </Typography>
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.palette.tertiary.main,
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "1rem 2rem",
            borderRadius: "10rem",
            marginTop: "2rem",
          }}
        >
          Make a Donation
        </Button>
      </Grid>
    </div>
  );
};

export default Program;
