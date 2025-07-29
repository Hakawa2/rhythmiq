import { Outlet } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export default function MainLayout() {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-800 to-black text-white">
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </section>
  );
}
