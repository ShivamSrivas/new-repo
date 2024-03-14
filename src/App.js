import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatList from "./pages/ChatList";
import Cards from "./pages/Cards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChatList" element={<ChatList />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
