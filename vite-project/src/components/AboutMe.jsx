import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fadeIn"
          aria-label="About Me Section Heading"
        >
          About<span className="text-primary"> Me!</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left text content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              🎮 Game & Mobile Developer | 🎨 Frontend Engineer
            </h3>
            <p className="text-muted-foreground">
              Fresh graduate with a strong passion for building interactive games,
              mobile applications, and responsive web interfaces. Skilled in
              translating ideas into engaging user experiences through clean code,
              modern UI design, and performance-focused development.
            </p>
            <p className="text-muted-foreground">
              I am eager to learn, improve, and adapt to new technologies while
              contributing to real-world projects. With a strong passion for
              development and a growth mindset, I am ready to grow as a professional
              developer.
            </p>

            
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Game & Mobile Developer */}
            <article
              className="gradient-border p-6 card-hover cursor-default transition-transform hover:scale-[1.03] focus-within:scale-[1.03] focus:outline-none"
              tabIndex={-1}
              aria-label="Game and Mobile Developer role"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">🎮 Game & Mobile Developer</h4>
                  <p className="text-muted-foreground">
                    Passionate about creating interactive and engaging games, focusing
                    on gameplay mechanics, performance, and user experience.
                  </p>
                </div>
              </div>
            </article>

            {/* Frontend Development */}
            <article
              className="gradient-border p-6 card-hover cursor-default transition-transform hover:scale-[1.03] focus-within:scale-[1.03] focus:outline-none"
              tabIndex={-1}
              aria-label="Frontend Development role"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">🎨 Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Focused on building responsive, clean, and user-friendly interfaces
                    that deliver smooth and intuitive user experiences.
                  </p>
                </div>
              </div>
            </article>

            {/* Growth & Learning */}
            <article
              className="gradient-border p-6 card-hover cursor-default transition-transform hover:scale-[1.03] focus-within:scale-[1.03] focus:outline-none"
              tabIndex={-1}
              aria-label="Growth and Learning focus"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">🚀 Growth & Learning</h4>
                  <p className="text-muted-foreground">
                    Always eager to learn new technologies, improve skills, and adapt
                    to industry trends with a growth mindset.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Add fadeIn animation styles - Tailwind + custom */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
};
