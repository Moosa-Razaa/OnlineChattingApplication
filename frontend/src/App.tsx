import { RouterProvider } from "react-router-dom";
import style from "./App.module.css";
import routes from "./services/routes";
import OTPScreen from "./pages/OTP/OtpScreen";

function App() {
  
  return (
      <div className={style["mainDiv"]}>
        {/* <RouterProvider router={routes} /> */}
        <OTPScreen></OTPScreen>
      </div>
  )
}

export default App
