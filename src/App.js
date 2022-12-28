import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import TentangKami from "./pages/TentangKami";
import Register from "./pages/Register";
import TLN from "./pages/TripLuarNegeri";
import FAQ from "./pages/FAQ";
import TDN from "./pages/TripDalamNegeri";
import BergabungMenjadiAgent from "./pages/BegabungMenjadiAgent";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import Portofolio from "./pages/Portofolio";
import AkunSaya from "./pages/AkunSaya";
import ProfilSaya from "./pages/ProfilSaya";
import PaketWisata from "./pages/PaketWisata";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tripDalamNegeri" element={<TDN />} />
          <Route path="/tripDalamNegeri/detail/:idTrip" element={<Detail />} />
          <Route path="/tripLuarNegeri" element={<TLN />} />
          <Route path="/tripLuarNegeri/detail/:idTrip" element={<Detail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tentangKami" element={<TentangKami />} />
          <Route
            path="/bergabungMenjadiAgen"
            element={<BergabungMenjadiAgent />}
          />
          <Route path="/detail/:idTrip" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/akunSaya" element={<AkunSaya />} />
          <Route path="/profilSaya" element={<ProfilSaya />} />
          <Route path="/paketWisata" element={<PaketWisata />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
