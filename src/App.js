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
import BottomBar from "./components/bottombar";
import BasicBreadcrumbs from "./components/breadcrumbs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Alert from "@mui/material/Alert";

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
        <BasicBreadcrumbs />
        <br />
        <ContentCards />
        <br />
        <Button
          variant="contained"
          startIcon={<SportsKabaddiIcon />}
          endIcon={<PlayArrowIcon />}
        >
          Start
        </Button>
        <QuiltedImageList />
        <Alert
          severity="warning"
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          For a better user experience MetaMask installation is recommended 😉
        </Alert>
        <BottomBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
