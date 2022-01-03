import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Button from "@mui/material/Button";
import ResponsiveAppBar from "./components/appbar";
import QuiltedImageList from "./components/image-list";
import ContentCards from "./components/content";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#b53f41",
    },
    secondary: {
      main: "#a600f5",
    },
    error: {
      main: "#f44336",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <br />
        <ContentCards />
        <br />
        <Button variant="contained" startIcon={<SportsKabaddiIcon />}>
          Start
        </Button>
        <QuiltedImageList />
      </ThemeProvider>
    </div>
  );
}

export default App;
