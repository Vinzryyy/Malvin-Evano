import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { AboutMe } from "../components/AboutMe";
import { HeroSection } from "../components/HeroSection";
import { StarBackground } from "../components/StarBackground";
import { SoftSky } from "../components/SoftSky";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { Footer } from "../components/Footer";


export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <div className="hidden dark:block">
        <StarBackground />
      </div>

      <div className="block dark:hidden">
        <SoftSky />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection />
          <AboutMe />
          <SkillSection />
          <ProjectSection />
        </main>

      </div>
      <Footer/>
    </div>
  );
};
