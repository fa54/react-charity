import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../images/image-2-rtv-copyright.jpg";
import image2 from "../images/image-3-rtv-copyright.jpg";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5rem",
  },
  savingImages: {
    width: "50%",
    [theme.breakpoints.down("1050")]: {
      width: "50%",
    },
    [theme.breakpoints.down("887")]: {
      width: "100%",
    },
  },
  savingInfo: {
    width: "45%",
    [theme.breakpoints.down("887")]: {
      marginTop: "3rem",
      width: "100%",
    },
  },
  savingTypography: {
    color: theme.palette.tertiary.main,
    fontSize: "1.2rem",
    fontFamily: "permanent marker",
    textTransform: "uppercase",
  },
  savingInfoHeader: {
    color: theme.palette.quaternary.main,
    fontSize: "3rem",
    lineHeight: "3.5rem",
    [theme.breakpoints.down("1080")]: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
  },
  savingInfoParagraph: {
    color: theme.palette.quniary.main,
    fontSize: "1.2rem",
    marginTop: "1.3rem",
    [theme.breakpoints.down("1080")]: {
      marginTop: "1rem",
    },
  },
}));

const Saving = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.mainContainer}
      >
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          className={classes.savingImages}
        >
          <Grid item style={{ width: "48%" }}>
            <img src={image1} alt="children" style={{ width: "100%" }} />
          </Grid>
          <Grid item style={{ width: "48%" }}>
            <img src={image2} alt="tree" style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Grid item className={classes.savingInfo}>
          <Typography className={classes.savingTypography}>
            Saving Lives
          </Typography>
          <Typography className={classes.savingInfoHeader}>
            Help Protect Families <br />
            <span style={{ fontWeight: "bold" }}>From Disasters!</span>
          </Typography>
          <Typography className={classes.savingInfoParagraph}>
            We raise donations to help families in Africa fight the consequences
            of natural disasters such as tornados, droughts and floods.
          </Typography>
          <Typography style={{ fontWeight: "bold", marginTop: "2rem" }}>
            <CheckIcon style={{ color: "#EB371A", marginRight: ".5rem" }} />
            Hundreds of houses renovated
          </Typography>
          <Typography style={{ fontWeight: "bold", marginTop: "1rem" }}>
            <CheckIcon style={{ color: "#EB371A", marginRight: ".5rem" }} />
            First aid provided
          </Typography>
          <Typography style={{ fontWeight: "bold", marginTop: "1rem" }}>
            <CheckIcon style={{ color: "#EB371A", marginRight: ".5rem" }} />
            Humanitarian assistance available
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Saving;
