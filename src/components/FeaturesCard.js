import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const FeaturesCard = ({
  image,
  badge,
  header,
  title,
  raised,
  goal,
  barWidth,
}) => {
  const theme = useTheme();
  const [isCardHovered, setCardHovered] = useState(false);
  return (
    <Grid
      container
      direction="column"
      style={{ backgroundColor: "#fff", cursor: "pointer" }}
      onMouseOver={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <Grid item style={{ height: "40%", overflow: "hidden" }}>
        <motion.img
          src={image}
          style={{ width: "100%", objectFit: "cover", height: "100%" }}
          animate={{ scale: isCardHovered ? 1.2 : 1.1 }}
        />
      </Grid>
      <div style={{ padding: "1rem" }}>
        <Grid item>
          <Typography
            align="center"
            style={{
              backgroundColor: theme.palette.tertiary.main,
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: ".8rem",
              padding: ".3rem 1rem",
              borderRadius: "1rem",
              display: "inline-block",
              marginTop: "1rem",
            }}
          >
            {badge}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            style={{
              color: theme.palette.quaternary.main,
              fontSize: "1.7rem",
              fontWeight: "bold",
              marginTop: "1rem",
              lineHeight: "2.1rem",
            }}
          >
            {header}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            style={{
              color: theme.palette.quniary.main,
              fontSize: "1.1rem",
              marginTop: ".5rem",
              height: "5rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            backgroundColor: "#f6f4ee",
            height: ".4rem",
            borderRadius: "1rem",
            marginTop: "1rem",
          }}
        >
          <Grid
            item
            style={{
              width: barWidth,
              backgroundColor: theme.palette.secondary.main,
              height: "100%",
              borderRadius: "1rem",
            }}
          ></Grid>
        </Grid>
        <Grid
          container
          direction="row "
          justify="space-between"
          style={{ marginTop: "2rem" }}
        >
          <Grid
            item
            style={{
              color: theme.palette.quaternary.main,
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Raised:{raised}
          </Grid>
          <Grid
            item
            style={{
              color: theme.palette.quaternary.main,
              fontSize: "1rem",
              marginLeft: "auto",
              fontWeight: "bold",
            }}
          >
            Goal:{goal}
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};
export default FeaturesCard;
