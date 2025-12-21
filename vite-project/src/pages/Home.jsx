import { ThemeToggle } from "../componets/ThemeToggle";
import { Navbar } from "../componets/Navbar";
import { AboutMe } from "../componets/AboutMe";
import { HeroSection } from "../componets/HeroSection";
import { StarBackground } from "../componets/StarBackground";
import { SoftSky } from "../componets/SoftSky";
import { SkillSection } from "../componets/SkillsSection";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
        <div className="dark:block hidden">
        <StarBackground />
        </div>

        <div className="dark:hidden block">
        <SoftSky />
        </div>


      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection />
          <AboutMe />
          <SkillSection />
        </main>
      </div>

      {/* Footer (optional) */}
    </div>
  );
};
