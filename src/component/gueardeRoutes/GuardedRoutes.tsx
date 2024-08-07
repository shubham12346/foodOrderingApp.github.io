import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const GuardedRoutes = ({ children }) => {
  const { state } = useContext(AuthContext);
  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  return state?.isLoggedIn ? children : redirectToLogin();
};

export default GuardedRoutes;
