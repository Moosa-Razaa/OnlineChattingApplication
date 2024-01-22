import { RouterProvider } from "react-router-dom";
import style from "./App.module.css";
import { RouterProvider } from "react-router-dom";
import routes from "./services/routes";

function App() {
  return (
      <div className={style["mainDiv"]}>
        <RouterProvider router={routes} />
      </div>
  )
}

export default App;
