import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Users from "./Users";
const Home = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Enter Your Email"
          value="eve.holt@reqres.in"
        />
        <input type="password" value="cityslicka" />
      </form>
      <button onClick={toggleAuth}>{isAuth ? "Logout" : " login"}</button>
      {isAuth ? <Users /> : <h1>Please Login </h1>}
    </div>
  );
};

export default Home;
