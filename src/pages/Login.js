import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const axios = require("axios").default;
const Login = ({ setIsAuth, setUser }) => {
  const [state, setState] = useState();
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const getUsers = async () => {
    try {
      const res = await axios.get(
        "https://app-test-pg-api.herokuapp.com/users"
      );
      setUsers(res.data);
      console.log(window.location.host);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(state);
      const response = await axios.post(
        "https://app-test-pg-api.herokuapp.com/login",
        {
          ...state,
        }
      );

      setIsAuth(true);
      setUser(response.data.user);
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <div className="login-page">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text className="text-muted">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
