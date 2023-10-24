import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "../Description/Description.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Home from "../HomePage/Home.jsx";
import Blog from "../HomePage/Body/Blog.jsx";
import ProtectedRoute from "../Description/ProtectedRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Description />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/Home/Blog/:id" element={<Blog />} />
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
