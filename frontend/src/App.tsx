import style from "./App.module.css";
import MainScreen from "./pages/mainScreen";

function App() {
  
  return (
      <div className={style["mainDiv"]}>
        <MainScreen />
      </div>
  )
}

export default App
