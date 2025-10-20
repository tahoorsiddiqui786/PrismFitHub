// import { main } from "motion/react-client"

import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02] ">
        {/* <h1 className="text-2xl text-center p-9 text-white">Hello Fitness Academy</h1>  */}
        <HeroSection />
        <FeaturedCourses /> 
        < WhyChooseUs />
        < TestimonialCards />
        < UpcomingWebinars />
        < Instructors />
        < Footer />
    </main>
    
  );
}
