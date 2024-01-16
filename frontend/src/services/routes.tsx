import { createBrowserRouter } from "react-router-dom";
import MainScreen from "../pages/MainScreen";
import LoginSignupForm from "../pages/loginn/LoginSignupForm";
import OTPScreen from "../pages/OTP/OtpScreen";
import Profile from "../pages/profile/Profile";

//Add your relevant routes here.
const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginSignupForm formState="login" />,
  },
  {
    path: "/signup",
    element: <LoginSignupForm formState="signup" />,
  },
  {
    path: "/verification",
    element: <OTPScreen />,
  },
  {
    path: "/profile-form",
    element: <Profile />,
  },
  {
    path: "/chat",
    element: <MainScreen />,
  },
]);

export default routes;
