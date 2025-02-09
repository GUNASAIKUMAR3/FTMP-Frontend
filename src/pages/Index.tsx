import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
