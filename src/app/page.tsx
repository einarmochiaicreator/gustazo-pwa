import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

import HomeHero from "@/components/home/HomeHero";
import AboutTeaser from "@/components/home/AboutTeaser";
import SafetyProof from "@/components/home/SafetyProof";
import InternationalFormation from "@/components/home/InternationalFormation";
import TopProducts from "@/components/home/TopProducts";
import WhyFrozen from "@/components/home/WhyFrozen";
import SocialProof from "@/components/home/SocialProof";
import LogisticsSection from "@/components/home/LogisticsSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <HomeHero />
        <AboutTeaser />
        <SafetyProof />
        <InternationalFormation />
        <TopProducts />
        <WhyFrozen />
        <SocialProof />
        <LogisticsSection />
        <Footer />
      </main>
    </>
  );
}
