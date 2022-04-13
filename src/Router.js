import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginHJ from "./pages/leehyeongjoon/Login/Login";
import MainHJ from "./pages/leehyeongjoon/Main/Main";

import LoginHG from "./pages/ahnhoongi/Login/Login";
import MainHG from "./pages/ahnhoongi/Main/Main";

import LoginNY from "./page/leenayeon/Login/Login";
import MainNY from "./pages/leenayeon/Main/Main";

import Loginurim from "./pages/ahnurim/Login/Login";
import Mainurim from "./pages/ahnurim/Login/Login";

import Loginkia from "./pages/kimkia/Login/Login";
import Mainkia from "./pages/kimkia/Login/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-leehyeongjoon" element={<LoginHJ />} />
        <Route path="/main-leehyeongjoon" element={<MainHJ />} />

        <Route path="/login-ahnhoongi" element={<LoginHG />} />
        <Route path="/main-ahnhoongi" element={<MainHG />} />

        <Route path="/login-leenayeon" element={<LoginNY />} />
        <Route path="/main-leenayeon" element={<MainNY />} />

        <Route path="/login-ahnurim" element={<Loginurim />} />
        <Route path="/main-ahnurim" element={<Mainurim />} />

        <Route path="/login-kia" element={<Loginkia />} />
        <Route path="/main-kia" element={<Mainkia />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
