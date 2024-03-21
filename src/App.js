import "./App.css";
import LandingPage from "./Components/LandingPage.jsx";
import {store} from "./Store/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
