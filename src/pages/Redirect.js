import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
const Redirect = () => {
  const [company, setCompany] = useState({
    id: 1,
    name: "konekta",
  });

  const navigate = useNavigate();
  let newHref =
    window.location.protocol + "//" + company.name + "." + window.location.host;
  return navigate(newHref + "/");
};

export default Redirect;
