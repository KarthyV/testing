import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../api";
import { LoginUser } from "../../redux/action/userAction.js";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      name,
      password,
    };
    dispatch(LoginUser(values));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
