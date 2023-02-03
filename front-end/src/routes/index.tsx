import { Route, Routes, useLocation } from "react-router-dom";
import ClientRegistrationPage from "../pages/clientRegistrationPage";

export const RoutesMain = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<ClientRegistrationPage />} />
    </Routes>
  );
};
