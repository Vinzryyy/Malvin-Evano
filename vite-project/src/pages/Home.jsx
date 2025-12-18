import { ThemeToggle } from "../componets/ThemeToggle";
import{ StarBackground  } from "../componets/StarBackground";
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
        {
            /*Main Content */
        }
        {
            /*footer*/
        }
    </div>
};