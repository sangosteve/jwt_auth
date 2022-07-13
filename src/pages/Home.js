import React, { useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import "../App.css";
const axios = require("axios").default;
const Home = ({ isAuth }) => {
  const accessAuth = async () => {
    const currToken = localStorage.getItem("access_token");
    console.log(currToken);
    const response = await axios.get("http://localhost:8000/protected", {
      withCredentials: true,
    });

    console.log(response.data);
  };
  return (
    <div>
      <div className="Home">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Private Access</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">{}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <button onClick={accessAuth}>Access Auth</button>
      </div>
    </div>
  );
};

export default Home;
