import { useState, useMemo } from "react";
import { Github, ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MobControl – Mobile Devices as Game Controllers",
    description:
      "A cross-platform system where smartphones act as real-time game controllers for a desktop game. Features secure QR-based pairing, multi-device input handling, and persistent custom control layouts.",
    image: "/projects/FYP.jpeg",
    tags: ["Game Development", "Mobile Development"],
    githubUrl: "https://github.com/Vinzryyy/FYP-Desktop-App",
  },
  {
    id: 2,
    title: "The Curse of Pharaoh (VR Escape Room)",
    description:
      "A VR escape room experience featuring hand-tracked object interaction, reflective light-based puzzles, immersive world-space UI, and comfort-focused locomotion systems.",
    image: "/projects/CurseOfPharaoh.png",
    tags: ["Game Development", "VR"],
    githubUrl: "https://github.com/4n70n1u5k3v1n/VR_A2",
  },
  {
    id: 3,
    title: "Freelance Cleaners Matching System",
    description:
      "A C2C web platform connecting homeowners with freelance cleaners, including authentication, booking flow, and backend integration with automated testing and deployment.",
    image: "/projects/CleaningService.jpeg",
    tags: ["Web Development", "Frontend", "Backend"],
    githubUrl: "https://github.com/Peter-Lee00/CSIT_314_Group_Project",
  },
  {
    id: 4,
    title: "Cathleenexus Website",
    description:
      "A responsive fan-made website showcasing projects and creative works with a clean UI and reusable React components.",
    image: "/projects/Cathyweb.png",
    tags: ["Web Development", "Frontend"],
    githubUrl: "https://github.com/YudhistiraKusuma202310067/cathleenexus-fansite",
  },
  {
    id: 5,
    title: "KidQuiz Android Application",
    description:
      "An Android quiz application featuring multiple quiz types, local data persistence, animated UI feedback, and detailed attempt tracking.",
    image: "/projects/KidQuiz.png",
    tags: ["Mobile Development"],
   
  },
  {
    id: 6,
    title: "Exhibition Guide Android Application",
    description:
      "An Android app that allows users to browse exhibitions, book visits, and calculate charges using a responsive and well-structured UI.",
    image: "/projects/ExhibitionGuide.png",
    tags: ["Mobile Development"],
   
  },
  {
    id: 7,
    title: "The Witch’s Whisper (Parkour Puzzle Game)",
    description:
      "A parkour-puzzle game with raycast-based interaction, enemy AI, dynamic camera systems, and smooth animation transitions.",
    image: "/projects/TheWitch's.png",
    tags: ["Game Development"],
    githubUrl: "https://github.com/4n70n1u5k3v1n/GameEngineAssignment",
  },
  {
    id: 8,
    title: "FPS Simulation Game",
    description:
      "An FPS prototype featuring modular enemy AI, weapon systems, and physics-based interaction for dynamic gameplay.",
    image: "/projects/FPSGame.png",
    tags: ["Game Development"],
    
  },
];


// Collect all unique tags from projects for filtering
const allTags = [
  "all",
  ...Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ),
];

export const ProjectSection = () => {
  const [activeTag, setActiveTag] = useState("all");

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (activeTag === "all") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are several of my recent projects. Each project has been thoughtfully
          developed with a strong emphasis on clean design, optimized performance, and
          intuitive user experience. Throughout the development process, I focused on
          problem-solving, usability, and maintainability to ensure that every project
          delivers real value to its users.
        </p>

        {/* Filter Tags */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Filter projects by tag"
        >
          {allTags.map((tag, i) => (
            <button
              key={i}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 capitalize focus:outline-none focus:ring-2 focus:ring-primary ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              }`}
              role="tab"
              aria-selected={activeTag === tag}
              tabIndex={activeTag === tag ? 0 : -1}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">
              No projects found for &quot;{activeTag}&quot;.
            </p>
          )}

          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title || "Project image"}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                    aria-label={`GitHub repository for ${project.title}`}
                    tabIndex={0}
                  >
                    <Github size={20} />
                    <span className="sr-only">GitHub</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors duration-300 flex items-center gap-1"
                      aria-label={`Live demo for ${project.title}`}
                      tabIndex={0}
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Vinzryyy"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
