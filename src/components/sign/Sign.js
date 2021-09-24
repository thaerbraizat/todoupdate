import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import './sign.css';

function Sign(params) {
  const [values, setValues] = useState({});
  const [flip, setFlip] = useState(false);
  const { login, signup, loggedIn } = useContext(AuthContext);

  function handleChange(e) {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
    console.log("from sign comp:", values);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.role) {
      const response = login(values.username, values.password);
    } else {
      const response = signup(values.username, values.password, values.role);
      setValues((values) => ({ ...values, [e.target.name]: "" }));
    }
  }

  function flipFunction(params) {
    setValues({});
    setFlip(true);
  }
  function restflipFunction(params) {
    setValues({});
    setFlip(false);
  }

  return (
    <div>
      {flip === false ? (
        <div className="sign-container">
          <h1>SignUp Form</h1>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="username"
            />
            <br />
            <label>Password</label>
            <input
              type="text"
              onChange={handleChange}
              name="password"
              placeholder="password"
            />
            <br />
            <label for="role">Role:</label>
            <select onClick={handleChange} name="role" id="role">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <br />
            <a href=''>
            <button type="submit" >Create user</button>
            </a>
            <p>
              Already registered?{" "}
              <a onClick={() => flipFunction(false)} href="/#">
                Sign In
              </a>
            </p>
          </form>
        </div>
      ) : (
        <div className="sign-container">
          <h1>Signin</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="username"
            />
            <br />

            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="password"
            />
            <br />
            <br />
            <button> Sign In</button>
            {console.log("logeed??", loggedIn)}
            {loggedIn && <a href="/">Home</a>
            }

            <p className="message">
              Don't have an account ?{" "}
              <a onClick={() => restflipFunction(true)} href="#">
                Sign up
              </a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Sign;
