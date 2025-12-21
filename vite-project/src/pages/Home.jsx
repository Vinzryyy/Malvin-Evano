import { ThemeToggle } from "../componets/ThemeToggle";
import { Navbar } from "../componets/Navbar";
import { AboutMe } from "../componets/AboutMe";
import { HeroSection } from "../componets/HeroSection";
import{ StarBackground  } from "../componets/StarBackground";
import { SkillSection } from "../componets/SkillsSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {
            <ThemeToggle />
        }

        {
            /*Background Effect */
        }
            <StarBackground />
        {
            /*Navbar */
        }
            <Navbar/>
        {
            /*Main Content */
        }
        <main>
            <HeroSection/>
            <AboutMe/>
            <SkillSection/>
        </main>

        {
            /*footer*/
        }
    </div>
};