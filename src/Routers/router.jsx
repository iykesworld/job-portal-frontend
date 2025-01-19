import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Job from "../Job/Job";
import JobDetails from "../Job/JobDetails";
import Login from "../Login/Login";
import Register from "../Regsiter/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/job",
            element: <Job />
        },
        {
            path: "/job/:id",
            element: <JobDetails />
        },
        {
          path: "/login",
          element: <Login />
      },
      {
        path: "/register",
        element: <Register />
    },
    ]
  },
]);
export default router;
