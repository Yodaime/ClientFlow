import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import Problems from './components/Problems';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Problems />
        <Features />
        <HowItWorks />
        <Demo />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
