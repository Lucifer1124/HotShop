import { createTheme } from "@mui/material";

const customeTheme = createTheme({
  palette: {
    mode: "light", // This sets the theme to dark mode
    primary: {
      main: "#a700fc",

    },
    secondary: {
      main: "#8672ff", 
    },
   
   
  },
});

export default customeTheme;