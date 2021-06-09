import React, { Fragment } from "react";
import ballon from "../images/balloon.svg";
import dove from "../images/dove.svg";
import recieve from "../images/receive.svg";
import ribbon from "../images/red-ribbon.svg";
import ServicesCard from "../components/ServicesCard";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "6rem",
    [theme.breakpoints.down("770")]: {
      marginTop: 0,
    },
  },
  serviceItem: {
    overflow: "hidden",
    width: "25%",
    [theme.breakpoints.down("770")]: {
      width: "50%",
      marginTop: "3rem",
    },
    [theme.breakpoints.down("440")]: {
      width: "100%",
    },
  },
}));

const Services = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Container>
        <Grid container>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={classes.serviceItem}
          >
            <ServicesCard
              img={recieve}
              text={
                <Fragment>
                  Charity <br /> For Children
                </Fragment>
              }
            />
          </Grid>
          <Grid item container justify="center" className={classes.serviceItem}>
            <ServicesCard
              img={dove}
              text={
                <Fragment>
                  Volunteer <br /> Organization
                </Fragment>
              }
            />
          </Grid>
          <Grid item container justify="center" className={classes.serviceItem}>
            <ServicesCard
              img={ribbon}
              text={
                <div>
                  Caring About <br /> Medical
                </div>
              }
            />
          </Grid>
          <Grid item container justify="center" className={classes.serviceItem}>
            <ServicesCard
              img={ballon}
              text={
                <Fragment>
                  Invest <br /> In Education
                </Fragment>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
