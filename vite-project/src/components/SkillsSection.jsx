import { useState } from "react";

const skills = [
  { name: "C#", level: 85, category: "Programming Language" },
  { name: "C++", level: 68, category: "Programming Language" },
  { name: "Java", level: 75, category: "Programming Language" },
  { name: "Python", level: 65, category: "Programming Language" },
  { name: "JavaScript", level: 85, category: "Programming Language" },

  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "XML", level: 75, category: "Frontend" },
  { name: "Tailwind", level: 65, category: "Frontend" },

  { name: "Unity", level: 90, category: "Game Development" },
  { name: "Unity XR Toolkit", level: 85, category: "Game Development" },
  { name: "WPF", level: 75, category: "Game Development" },

  { name: "Firebase", level: 80, category: "Backend" },
  { name: "MySQL", level: 75, category: "Backend" },


  { name: "GitHub", level: 85, category: "Tools" },
  { name: "Android Studio", level: 85, category: "Tools" },
  { name: "VS Code", level: 85, category: "Tools" },

  { name: "Linux (Ubuntu)", level: 70, category: "Systems" },
  { name: "VirtualBox", level: 73, category: "Systems" },
];

const categories = [
  "all",
  "Programming Language",
  "Frontend",
  "Game Development",
  "Backend",
  "Tools",
  "Systems",
];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
