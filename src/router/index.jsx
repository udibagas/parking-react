import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])