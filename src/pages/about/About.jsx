


import HeroSection from "../../components/about/HeroSection";
import IntroSection from "../../components/about/IntroSection";
import ExperienceSection from "../../components/about/ExperienceSection";
import StatsSection from "../../components/about/StatsSection";
import TeamSection from "../../components/about/TeamSection";
import TestimonialSlider from "../../components/about/TestimonialSlider";
import BrandsSection from "../../components/about/BrandsSection";
import FeaturesSection from "../../components/about/FeaturesSection";
import Mission from "../../components/about/Mission";
import Vision from "../../components/about/Vision";
import WhyVeekites from "../../components/about/WhyVeekites";
import OurHistory from "../../components/about/OurHistory";
import CoreValues from "../../components/about/CoreValues";
import AboutIntro from "../../components/about/AboutIntro";


const About = () => {
  return (
    <div className="relative !-top-21">
      <HeroSection />
      <AboutIntro />
      <CoreValues />
      {/* <IntroSection /> */}
      <Mission />
      <Vision />
      <FeaturesSection />
      <WhyVeekites />
      <ExperienceSection />
      <OurHistory />
      <StatsSection />
      <TeamSection />
      <TestimonialSlider />
      <BrandsSection />
    </div>
  );
};

export default About;

