import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Summoners from "../pages/summoners/Summoners";
import Write from "../pages/write/Write";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/List" element={<List />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Summoners" element={<Summoners />} />
      <Route path="/Write" element={<Write />} />
      <Route path="/Detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default Router;
