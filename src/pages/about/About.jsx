import HeroSection from "../../components/about/HeroSection";
import StatsSection from "../../components/about/StatsSection";
import TeamSection from "../../components/about/TeamSection";
import TestimonialSlider from "../../components/about/TestimonialSlider";
import BrandsSection from "../../components/about/BrandsSection";
import FeaturesSection from "../../components/about/FeaturesSection";
import WhyVeekites from "../../components/about/WhyVeekites";
import OurHistory from "../../components/about/OurHistory";
import CoreValues from "../../components/about/CoreValues";
import AboutIntro from "../../components/about/AboutIntro";
import VisionMissionValues from "../../components/about/VisionMissionValues";
import SetApart from "../../components/about/SetApart";


const About = () => {
  return (
    <div className="relative !-top-21">
      <HeroSection />
      <AboutIntro />
      <CoreValues />
      <VisionMissionValues />
      <FeaturesSection />
      <SetApart />
      <OurHistory />
      <StatsSection />
      <TeamSection />
      <TestimonialSlider />
      <BrandsSection />
    </div>
  );
};

export default About;

