import { createTheme } from "@mui/material";
export const theme = createTheme({
    palette: {
        primary: {
            main: "#2196f3",
        },
        secondary:{
            main: "#111111"
        }
    },
    typography: {
        h1: {
            fontSize: "1rem"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
          },
    }
}); 