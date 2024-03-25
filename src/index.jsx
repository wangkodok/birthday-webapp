import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App.jsx";
import "./index.css";
import "./common.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage.jsx";
import SettingPage from "./pages/SettingPage.jsx";
import AddBirthdayPage from "./pages/AddBirthdayPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
  },
  {
    path: "/setting",
    element: <SettingPage />,
  },
  {
    path: "/add-birthday",
    element: <AddBirthdayPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Reset />
    {/* <App /> */}
    <RouterProvider router={router} />
  </>
);
