import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Button from "@mui/material/Button";
import ResponsiveAppBar from "./components/appbar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
