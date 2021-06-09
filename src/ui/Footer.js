import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import query from "../images/logo-inverse.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.quaternary.main,
    paddingTop: "3rem",
    paddingBottom: "3rem",
  },
  mediaColumn: {
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
    verticalAlign: "middle",
    [theme.breakpoints.down("768")]: {
      marginTop: "1rem",
    },
  },
  mediaColumnItem: {
    color: theme.palette.quniary.main,
    fontSize: "1.3rem",
    marginTop: "1rem",
    verticalAlign: "middle",
    cursor: "pointer",
    transition: "all .3s ease-in-out",
    "&:hover": {
      color: "#fff",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches780 = useMediaQuery(theme.breakpoints.down("780"));
  return (
    <div className={classes.mainContainer}>
      <Container>
        <Grid container direction="row" justify="space-between">
          <Grid
            item
            container
            direction="column"
            style={{ width: matches780 ? "50%" : "25%" }}
          >
            <Typography>
              <img src={query} alt="query logo" />
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{ width: matches780 ? "50%" : "25%" }}
          >
            <Typography className={classes.mediaColumn}>Media</Typography>
            <Typography className={classes.mediaColumnItem}>
              Facebook
            </Typography>
            <Typography className={classes.mediaColumnItem}>
              Instagram
            </Typography>
            <Typography className={classes.mediaColumnItem}>Twitter</Typography>
            <Typography className={classes.mediaColumnItem}>Paypal</Typography>
            <Typography className={classes.mediaColumnItem}>Patreon</Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{ width: matches780 ? "50%" : "25%" }}
          >
            <Typography className={classes.mediaColumn}>Links</Typography>
            <Typography className={classes.mediaColumnItem}>Home</Typography>
            <Typography className={classes.mediaColumnItem}>
              Donation
            </Typography>
            <Typography className={classes.mediaColumnItem}>
              About Us
            </Typography>
            <Typography className={classes.mediaColumnItem}>Shop</Typography>
            <Typography className={classes.mediaColumnItem}>
              Contacts
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{ width: matches780 ? "50%" : "25%" }}
          >
            <Typography className={classes.mediaColumn}>Team</Typography>
            <Typography className={classes.mediaColumnItem}>Daniel</Typography>
            <Typography className={classes.mediaColumnItem}>Russ</Typography>
            <Typography className={classes.mediaColumnItem}>
              Jin Yang
            </Typography>
            <Typography className={classes.mediaColumnItem}>
              Isa Eisnberg
            </Typography>
            <Typography className={classes.mediaColumnItem}>
              Robert Daniesh
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
