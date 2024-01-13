import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({ username: "", password: "" });
  const { username, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/auth", data);
      history.push("/blog-editor");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <StyledLogin>
      <h2>Admin Login</h2>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => onChange(e)}
            name="username"
            value={username}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => onChange(e)}
            name="password"
            value={password}
            required
          />
        </div>
        <input type="submit" />
      </form>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.25rem;
    padding: 1rem;
  }
  label {
    font-size: 1.25rem;
  }
  .form-group {
    display: flex;
  }
`;

export default Login;
