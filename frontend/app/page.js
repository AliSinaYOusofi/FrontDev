"use client";

import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/HeroSection/HeroSection'
import InfoContainer from '@/components/GlobalTechInfo/InfoContainer'
import About from '@/components/AboutUs/About'
import Footer from '@/components/Footer/Footer'
import { useNextContext } from '@/context/NextContext';
import { darkThemeSetup, lightThemeSetup } from '@/utils/themseAndFont';

export default function Home() {
  
  const {theme} = useNextContext();

  return (
    <main className={`${theme ? "bg-[#010409] text-white" : "bg-white"}`}>
        <Navbar />
        <HeroSection />
        <InfoContainer />
        <About />
        <Footer />
    </main>
  );

}
