import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import FeaturePhoto1 from "../images/image-4-rtv-copyright-1024x683.jpg";
import FeaturePhoto2 from "../images/image-5-rtv-copyright-1024x683.jpg";
import FeaturePhoto3 from "../images/image-6-rtv-copyright-1024x683.jpg";
import FeaturesCard from "../components/FeaturesCard";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#f6f4ee",
    marginTop: "7rem",
    paddingBottom: "5rem",
  },
}));

const Features = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matches850 = useMediaQuery(theme.breakpoints.down("850"));
  const matches640 = useMediaQuery(theme.breakpoints.down("640"));
  const matches300 = useMediaQuery(theme.breakpoints.down("300"));
  return (
    <div className={classes.mainContainer}>
      <Grid container justify="center">
        <Grid item>
          <Typography
            style={{
              color: theme.palette.tertiary.main,
              fontFamily: "Permanent Marker",
              marginTop: "3rem",
            }}
          >
            MAKE A DONATION NOW
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Typography
            style={{
              fontSize: matches300 ? "1.7rem" : matches850 ? "2.1rem" : "3rem",
              color: theme.palette.quaternary.main,
            }}
          >
            Our Featured Causes
          </Typography>
        </Grid>
      </Grid>
      <Container>
        <Grid
          container
          direction="row"
          justify={matches850 ? "center" : "space-between"}
          style={{ marginTop: "2rem" }}
        >
          <Grid
            item
            style={{ width: matches640 ? "100%" : matches850 ? "60%" : "32%" }}
          >
            <FeaturesCard
              image={FeaturePhoto1}
              badge="EDUCATION"
              header="Second Hand Donation"
              title="Share the things you don't need with those who do. We need clothes, books and toys."
              raised="2,720$"
              goal="35,000$"
              barWidth="10%"
            />
          </Grid>
          <Grid
            item
            style={{
              width: matches640 ? "100%" : matches850 ? "60%" : "32%",
              marginTop: matches850 ? "1rem" : undefined,
            }}
          >
            <FeaturesCard
              image={FeaturePhoto2}
              badge="HEALTH"
              header="Education For Children"
              title="Every child has a right to get education. All the money will be used to open…"
              raised="10,000$"
              goal="50,000$"
              barWidth="30%"
            />
          </Grid>
          <Grid
            item
            style={{
              width: matches640 ? "100%" : matches850 ? "60%" : "32%",
              marginTop: matches850 ? "1rem" : undefined,
            }}
          >
            <FeaturesCard
              image={FeaturePhoto3}
              badge="SUPPORT"
              header="Food Delivery in Africa"
              title="Malnutrition that can cause health problems is one of the critical issues in modern world."
              raised="10,000$"
              goal="50,000$"
              barWidth="20%"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Features;
