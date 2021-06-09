import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import appBarLogo from "../images/logo-inverse.png";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Box from "@material-ui/core/Box";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
    position: "absolute",
    top: 0,
    left: 0,
    boxShadow: "none",
  },
  appBarItem: {
    fontWeight: "600",
    marginLeft: "2.5rem",
    fontSize: "1.2rem",
    cursor: "pointer",
    color: theme.palette.primary.main,
    position: "relative",
  },
  appBarButton: {
    backgroundColor: theme.palette.tertiary.main,
    marginLeft: "2rem",
    color: "#fff",
    padding: ".7rem 2.5rem",
    textTransform: "capitalize",
    borderRadius: "3rem",
    fontSize: "1rem",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.tertiary.main,
    },
  },
  dropDownItem: {
    fontSize: "1.1rem",
    fontWeight: 400,
    marginTop: "1rem",
    color: theme.palette.quniary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  appBarDrawer: {
    padding: "1rem",
    backgroundColor: theme.palette.quaternary.main,
    color: "#fff",
  },
  drawerItem: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginTop: "1rem",
    color: theme.palette.quniary.main,
    cursor: "pointer",
    transition: "all .2s",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  dropDownItemDrawer: {
    color: "#6F665F",
    fontWeight: "bold",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "all .1s ease-in-out",
    "&:hover": {
      color: "#fff",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [dropDown, setDropDown] = useState(false);
  const [dropDownItem, setDropDownItem] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matches820 = useMediaQuery(theme.breakpoints.down("820"));
  const matches400 = useMediaQuery(theme.breakpoints.down("400"));
  const matches335 = useMediaQuery(theme.breakpoints.down("335"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [open, setOpen] = React.useState(false);
  const appBarDrawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.appBarDrawer }}
      >
        <img src={appBarLogo} alt="header-logo" />
        <Box className={classes.drawerItem}>Home</Box>
        <Box className={classes.drawerItem} onClick={() => setOpen(!open)}>
          Pages {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            <ListItem className={classes.dropDownItemDrawer}>About</ListItem>
            <ListItem className={classes.dropDownItemDrawer}>Contacts</ListItem>
            <ListItem className={classes.dropDownItemDrawer}>Payments</ListItem>
          </List>
        </Collapse>
        <Box className={classes.drawerItem}>Donation</Box>
        <Box className={classes.drawerItem}>News</Box>
        <Box className={classes.drawerItem}>Shop</Box>
        <Button
          className={classes.appBarButton}
          style={{
            width: "100%",
            marginLeft: 0,
            marginTop: "1rem",
            fontWeight: "bold",
          }}
        >
          Let's Talk
        </Button>
      </SwipeableDrawer>
    </Fragment>
  );
  return (
    <AppBar className={classes.appBar}>
      <Container>
        <Toolbar style={{ marginTop: "1rem" }}>
          <img
            src={appBarLogo}
            alt="header-logo"
            style={{ width: matches400 ? "6rem" : undefined }}
          />
          {matches820 ? undefined : (
            <Fragment>
              <Typography
                variant="h5"
                component="h5"
                className={classes.appBarItem}
                style={{ marginLeft: "auto" }}
              >
                Home
              </Typography>
              <div
                className={classes.appBarItem}
                onMouseOver={() => {
                  setDropDownItem(true);
                  setDropDown(true);
                }}
                onMouseLeave={() => {
                  setDropDownItem(false);
                  setTimeout(() => {
                    setDropDown(false);
                  }, 400);
                }}
              >
                Pages
                <ArrowDropDownIcon />
                <motion.div
                  style={{
                    position: "absolute",
                    backgroundColor: theme.palette.quaternary.main,
                    padding: "0rem 6rem 1rem 1rem",
                    display: dropDown ? "block" : "none",
                  }}
                  animate={{
                    opacity: dropDownItem ? 1 : 0,
                    y: dropDownItem ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  <div className={classes.dropDownItem}>About</div>
                  <div className={classes.dropDownItem}>Contacts</div>
                  <div className={classes.dropDownItem}>Payments</div>
                </motion.div>
              </div>
              <Typography className={classes.appBarItem}>Donation</Typography>
              <Typography className={classes.appBarItem}>News</Typography>
              <Typography className={classes.appBarItem}>Shop</Typography>
            </Fragment>
          )}

          <Typography
            className={classes.appBarItem}
            style={{
              fontSize: "1.5rem",
              marginLeft: matches820 ? "auto" : undefined,
            }}
          >
            <Badge
              badgeContent="0"
              color="secondary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <i className="fas fa-shopping-bag"></i>
            </Badge>
          </Typography>
          <i
            className={["fas fa-search"].join(" ")}
            style={{
              fontSize: "1.5rem",
              marginLeft: matches335 ? "1rem" : "2rem",
              cursor: "pointer",
            }}
          ></i>
          {matchesMD ? undefined : (
            <Button className={classes.appBarButton}>Let's Talk</Button>
          )}
          {matches820 ? (
            <i
              className="fas fa-bars"
              style={{
                fontSize: "1.7rem",
                marginLeft: matches335 ? "1rem" : "1.5rem",
                cursor: "pointer",
              }}
              onClick={() => setOpenDrawer(!openDrawer)}
            ></i>
          ) : undefined}
          {appBarDrawer}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
