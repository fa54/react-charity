import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Statistics = () => {
  const theme = useTheme();
  const matches700 = useMediaQuery(theme.breakpoints.down("700"));
  const matches460 = useMediaQuery(theme.breakpoints.down("460"));
  return (
    <Grid
      style={{
        backgroundColor: "#f6f4ee",
        paddingBottom: "5rem",
        paddingTop: "5rem",
      }}
    >
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            style={{
              width: matches460 ? "100%" : matches700 ? "50%" : "25%",
              marginTop: matches700 ? "2rem" : undefined,
            }}
          >
            <Typography
              style={{
                color: theme.palette.secondary.main,
                fontSize: "4rem",
                fontFamily: "Permanent Marker",
              }}
            >
              124
            </Typography>
            <Typography style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Volunteers
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            style={{
              width: matches460 ? "100%" : matches700 ? "50%" : "25%",
              marginTop: matches700 ? "2rem" : undefined,
            }}
          >
            <Typography
              style={{
                color: theme.palette.secondary.main,
                fontSize: "4rem",
                fontFamily: "Permanent Marker",
              }}
            >
              1225
            </Typography>
            <Typography style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Donations
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            style={{
              width: matches460 ? "100%" : matches700 ? "50%" : "25%",
              marginTop: matches700 ? "2rem" : undefined,
            }}
          >
            <Typography
              style={{
                color: theme.palette.secondary.main,
                fontSize: "4rem",
                fontFamily: "Permanent Marker",
              }}
            >
              114
            </Typography>
            <Typography style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Schools
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            style={{
              width: matches460 ? "100%" : matches700 ? "50%" : "25%",
              marginTop: matches700 ? "2rem" : undefined,
            }}
          >
            <Typography
              style={{
                color: theme.palette.secondary.main,
                fontSize: "4rem",
                fontFamily: "Permanent Marker",
              }}
            >
              355
            </Typography>
            <Typography style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Projects
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Statistics;
