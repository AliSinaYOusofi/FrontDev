import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/HeroSection/HeroSection'
import InfoContainer from '@/components/GlobalTechInfo/InfoContainer'
import About from '@/components/AboutUs/About'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  
  return (
    <main className="">
       <Navbar />
        <HeroSection />
        <InfoContainer />
        <About />
        <Footer />
    </main>
  );

}
