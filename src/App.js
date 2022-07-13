import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  // const getToken = async () => {
  //   const response = await axios.post(
  //     "http://localhost:8000/resfresh",
  //     {
  //       username: "steve",
  //       email: "steve@domain.com",
  //     },
  //     { withCredentials: true }
  //   );
  //   console.log(response.data);
  // };

  const [isAuth, setIsAuth] = useState(false);
  const axios = require("axios").default;
  const currToken = localStorage.getItem("access_token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${currToken}`;

  useEffect(() => {
    (async () => {
      const currToken = localStorage.getItem("access_token");
      console.log(currToken);
      const response = await axios.get("http://localhost:8000/protected", {
        withCredentials: true,
      });

      setIsAuth(
        response.data.message && response.data.message === "authenticated"
          ? true
          : false
      );
    })();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? (
                <Home isAuth={isAuth} />
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
                <Login setIsAuth={setIsAuth} />
              )
            }
          />
          <Route
            path="Register"
            element={
              isAuth ? <Navigate to="/" /> : <Register setIsAuth={setIsAuth} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
