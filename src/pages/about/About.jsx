


import HeroSection from "../../components/about/HeroSection";
import IntroSection from "../../components/about/IntroSection";
import ExperienceSection from "../../components/about/ExperienceSection";
import StatsSection from "../../components/about/StatsSection";
import TeamSection from "../../components/about/TeamSection";
import TestimonialSlider from "../../components/about/TestimonialSlider";
import BrandsSection from "../../components/about/BrandsSection";
import FeaturesSection from "../../components/about/FeaturesSection";


const About = () => {
  return (
    <div className="relative !-top-21">
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <ExperienceSection />
      <StatsSection />
      <TeamSection />
      <TestimonialSlider />
      <BrandsSection />
    </div>
  );
};

export default About;

