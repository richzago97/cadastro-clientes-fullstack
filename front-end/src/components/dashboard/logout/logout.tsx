import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { Container } from "./style";

const LogoutClient = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };
  return (
    <Container>
      <button type="button" onClick={Logout}>
        Logout
      </button>
    </Container>
  );
};
export default LogoutClient;
