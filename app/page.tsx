import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import Services from '@/components/ui/Services';
import About from '@/components/ui/About';
import Partners from '@/components/ui/Partners';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
