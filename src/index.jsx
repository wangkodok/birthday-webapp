import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Calendar from "./Calendar.jsx";
import Setting from "./Setting.jsx";
import AddBirthday from "./AddBirthday.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/add-birthday",
    element: <AddBirthday />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Reset />
    {/* <App /> */}
    <RouterProvider router={router} />
  </>
);
