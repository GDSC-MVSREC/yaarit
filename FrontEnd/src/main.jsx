import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./Description.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import Home from "./Home.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Description />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/main" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
