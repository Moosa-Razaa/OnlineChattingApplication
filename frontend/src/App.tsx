import style from "./App.module.css";
import { RouterProvider } from "react-router-dom";
import routes from "./services/routes";
import OTPScreen from "./pages/OTP/OtpScreen";
import LoginSignupForm from "./pages/loginn/LoginSignupForm";

function App() {
  
  return (
      <div className={style["mainDiv"]}>
        <RouterProvider router={routes} />
        {/* <OTPScreen/> */}
      </div>
  )
}

export default App
