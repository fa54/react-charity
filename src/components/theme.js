import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F6F4EE",
    },
    secondary: {
      main: "#EB371A",
    },
    tertiary: {
      main: "#FDAC2B",
    },
    quaternary: {
      main: "#1F0E05",
    },
    quniary: {
      main: "#6F665F",
    },
  },
  typography: {
    fontFamily: "Europa",
    textTransform: "none",
  },
});

export default theme;
