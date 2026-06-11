import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Menu from "@/components/Menu";
import Events from "@/components/Events";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Menu />
      <Promo />
      <Events />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Index;
