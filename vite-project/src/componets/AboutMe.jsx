import { Briefcase, Code, User } from "lucide-react"

export const AboutMe = () =>{
    return<section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About<span className="text-primary"> Me!</span>
            </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">🎮 Game & Mobile Developer | 🎨 Frontend Engineer</h3>
                <p className="text-muted-foreground">Fresh graduate with a strong passion for building interactive games, mobile applications, and responsive web interfaces. Skilled in translating ideas into engaging user experiences through clean code, modern UI design, and performance-focused development.</p>
                <p className="text-muted-foreground"> I am eager to learn, improve, and adapt to new technologies while contributing to real-world projects. With a strong passion for development and a growth mindset, I am ready to grow as a professional developer.</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">{""}
                    Get in Touch</a>
                    
                </div>
            </div>
                 <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">  
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg"> 🎮 Game & Mobile Developer</h4>
                        <p className="text-muted-foreground"> Passionate about creating interactive and engaging games, focusing on gameplay mechanics, performance, and user experience. </p>
                    </div>
                </div>
            </div>
           <div className="gradient-border p-6 card-hover">  
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg"> 🎨 Frontend Development</h4>
                        <p className="text-muted-foreground"> Focused on building responsive, clean, and user-friendly interfaces that deliver smooth and intuitive user experiences.</p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">  
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <User className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg"> 🚀 Growth & Learning </h4>
                        <p className="text-muted-foreground">  Always eager to learn new technologies, improve skills, and adapt to industry trends with a growth mindset.</p>
                    </div>
                </div>
            </div>

        </div>   
        </div >
        
        </div>
    </section>
}