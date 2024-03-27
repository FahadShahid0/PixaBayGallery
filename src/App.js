import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AllRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
// import NavBar from "./components/navbar/navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AllRoutes />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
