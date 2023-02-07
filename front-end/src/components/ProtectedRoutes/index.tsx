import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : null;
};
export default ProtectedRoutes;
