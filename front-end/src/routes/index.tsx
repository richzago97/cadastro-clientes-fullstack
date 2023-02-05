import { Route, Routes, useLocation } from "react-router-dom";
import ClientDashboardPage from "../pages/clientDashboard/clientDashboardPage";
import ClientLoginPage from "../pages/clientLoginPage";
import ClientRegistrationPage from "../pages/clientRegistrationPage";

export const RoutesMain = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<ClientLoginPage />} />
      <Route path="/clients" element={<ClientRegistrationPage />} />
      <Route path="/login" element={<ClientLoginPage />} />
      <Route path="/dashboard" element={<ClientDashboardPage />} />
    </Routes>
  );
};
