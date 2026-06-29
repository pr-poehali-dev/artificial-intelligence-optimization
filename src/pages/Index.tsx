import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Geography from "@/components/Geography";
import Services from "@/components/Services";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import WhyUs from "@/components/WhyUs";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Geography />
      <Services />
      <Featured />
      <Promo />
      <WhyUs />
      <section className="relative h-[40vh] lg:h-[55vh] w-full overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/d824255f-7d9e-474c-8f78-61e7e440d340/files/988b019a-3343-4eef-91db-73946f0412c1.jpg"
          alt="Контейнеровоз"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
      </section>
      <News />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
