import { DashboardClient } from "../../components/dashboard/client";
import { DashboardContact } from "../../components/dashboard/contact";
import FormContactRegister from "../../components/forms/formContact";
import { Header } from "../../components/header";
import { Container } from "./style";

const ClientDashboardPage = () => {
  return (
    <Container>
      <Header />
      <DashboardClient />
      <FormContactRegister />
      <DashboardContact />
    </Container>
  );
};
export default ClientDashboardPage;
