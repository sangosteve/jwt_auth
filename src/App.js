import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Redirect from "./pages/Redirect";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const axios = require("axios").default;

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path={"/"}
            element={
              isAuth ? (
                <Home isAuth={isAuth} user={user} setUser={setUser} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="login"
            element={
              isAuth ? (
                <Navigate to="/" replace />
              ) : (
                <Login setIsAuth={setIsAuth} setUser={setUser} />
              )
            }
          />
          <Route
            path="Register"
            element={
              isAuth ? (
                <Navigate to="/" />
              ) : (
                <Register setIsAuth={setIsAuth} setUser={setUser} />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
