import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Reset />
    <App />
  </>
);
