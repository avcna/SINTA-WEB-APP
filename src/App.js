import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { AuthContext } from "./config/Auth";
import { PrivateRoute, RestrictedRoute } from "./config/PrivateRoute";
import { useState } from "react";

function App() {
  const isAnyToken = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("id"));
  const [authToken, setAuthToken] = useState(isAnyToken);
  const [user, setUser] = useState(userId);

  const setAndGetTokens = (token, id) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("id", JSON.stringify(id));
    setAuthToken(token);
    setUser(id);
  };
  return (
    <>
      <AuthContext.Provider value={{ authToken, setAndGetTokens, user }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tripDalamNegeri" element={<TDN />} />
            <Route
              path="/tripDalamNegeri/detail/:idTrip"
              element={<Detail />}
            />
            <Route path="/tripLuarNegeri" element={<TLN />} />
            <Route path="/tripLuarNegeri/detail/:idTrip" element={<Detail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/tentangKami" element={<TentangKami />} />
            <Route
              path="/bergabungMenjadiAgen"
              element={<BergabungMenjadiAgent />}
            />
            <Route path="/detail/:idTrip" element={<Detail />} />
            <Route path="/profile/:idAgen" element={<Profile />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <Register />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <Login />
                </RestrictedRoute>
              }
            />
            <Route
              path="/beranda"
              element={
                <PrivateRoute>
                  <Beranda />
                </PrivateRoute>
              }
            />
            <Route
              path="/portofolio"
              element={
                <PrivateRoute>
                  <Portofolio />
                </PrivateRoute>
              }
            />
            <Route
              path="/akunSaya"
              element={
                <PrivateRoute>
                  <AkunSaya />
                </PrivateRoute>
              }
            />
            <Route
              path="/profilSaya"
              element={
                <PrivateRoute>
                  <ProfilSaya />
                </PrivateRoute>
              }
            />
            <Route
              path="/paketWisata"
              element={
                <PrivateRoute>
                  <PaketWisata />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
