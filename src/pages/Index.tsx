import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Promo from "@/components/Promo";
import Culture from "@/components/Culture";
import Events from "@/components/Events";
import Reviews from "@/components/Reviews";
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
      <Culture />
      <Events />
      <Reviews />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Index;