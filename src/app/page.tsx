"use client"
// import '@mantine/core/styles.css';
import { useEffect } from "react";
import useDarkMode from 'use-dark-mode';
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import Hero2 from "@/components/Hero2";
import About from "@/components/About";
import Divider from '@/components/Divider';
import { Products } from '@/components/Products';
import Brands from '@/components/Brand';
import Services from '@/components/Services';
// import { ServicesGrid } from '@/components/ServicesGrid';
import Testimonial from '@/components/Testimonial';
import Rentals from '@/components/Rentals';
import Footer from '@/components/Footer';

export default function Home() {
  const darkMode = useDarkMode(false);
  useEffect(() => {
    if (darkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode.value]);
  return (
    <>
    <Topbar/>
    <Navbar/>
    {/* <Hero/> */}
    <Hero2/>
    <About/>
    <Brands/>
    <Divider/>
    <Products/>
    <Divider/>
    <Services/> 
    {/* <ServicesGrid/> */}
    <Rentals/>
    <Testimonial/>
    <Footer/>
    </>
  );
}
