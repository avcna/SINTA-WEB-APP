import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import TentangKami from "./pages/TentangKami";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tentangKami" element={<TentangKami />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
