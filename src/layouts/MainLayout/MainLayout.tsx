import { Container } from "@/components/Container/Container";
import { Footer } from "@/components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-800 to-black text-white">
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </section>
  );
}
