import React, { useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import "../App.css";
const axios = require("axios").default;
const Home = ({ isAuth, user }) => {
  console.log(user);
  return (
    <div>
      <div className="Home">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Private Access</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: {user?.username}
                <a href="#login">{}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Home;
