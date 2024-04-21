import colors, { white, black, primary, blue } from "./colors";

export default {
  colors,
  common: {
    black,
    white,
    blue,
    neutral: "#E4E7EB",
    muted: "#9EA0A4",
  },
  primary: {
    contrastText: white,
    main: primary.main,
    light: primary.light,
    dark: primary.dark,
  },
  secondary: {
    contrastText: white,
    main: "#7d58ff",
    light: "",
    dark: "#37248F",
  },
  success: {
    contrastText: white,
    main: "#45B880",
    light: "#F1FAF5",
    dark: "#00783E",
  },
  info: {
    contrastText: white,
    main: "#1070CA",
    light: "#F1FBFC",
    dark: "#007489",
  },
  warning: {
    contrastText: white,
    main: "#FFB822",
    light: "#FDF8F3",
    dark: "#95591E",
  },
  danger: {
    contrastText: white,
    main: "#ED4740",
    light: "#FEF6F6",
    dark: "#BF0E08",
  },
  text: {
    primary: "#304156",
    secondary: "#66788A",
    disabled: "#A6B1BB",
  },
  background: {
    default: "#f8fafc",
    dark: "#172B4D",
    paper: white,
  },
  border: "rgba(48,65,86,0.2)",
  opacity: {
    active: 0.54,
    hover: 0.08,
    selected: 0.14,
  },
};
