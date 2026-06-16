"use client";
import { useInView } from "@/hooks/useInView";

const SKILL_CATEGORIES = [
  {
    category: "Core Languages",
    color: "#00D4FF",
    skills: [
      { name: "TypeScript", level: 82, icon: "TS" },
      { name: "JavaScript", level: 85, icon: "JS" },
      { name: "Python", level: 75, icon: "PY" },
    ],
  },
  {
    category: "Backend & Frameworks",
    color: "#FFB700",
    skills: [
      { name: "NestJS", level: 80, icon: "N" },
      { name: "Node.js", level: 78, icon: "⬡" },
      { name: "REST APIs", level: 85, icon: "↔" },
    ],
  },
  {
    category: "Database & ORM",
    color: "#7B61FF",
    skills: [
      { name: "PostgreSQL", level: 76, icon: "🐘" },
      { name: "TypeORM", level: 74, icon: "ORM" },
      { name: "SQL", level: 70, icon: "DB" },
    ],
  },
  {
    category: "Security & Cloud",
    color: "#00FF94",
    skills: [
      { name: "JWT Auth", level: 80, icon: "🔐" },
      { name: "AWS Basics", level: 55, icon: "☁" },
      { name: "Git & GitLab", level: 78, icon: "⎇" },
    ],
  },
  {
    category: "ML & Data",
    color: "#FF6B6B",
    skills: [
      { name: "Machine Learning", level: 60, icon: "🧠" },
      { name: "Data Preprocessing", level: 65, icon: "📊" },
      { name: "Scikit-learn", level: 58, icon: "🔬" },
    ],
  },
];

const TECH_BADGES = [
  "TypeScript", "JavaScript", "Python", "Node.js", "NestJS",
  "PostgreSQL", "TypeORM", "REST API", "JWT", "Git", "GitLab",
  "AWS", "Machine Learning", "Swagger", "Docker (learning)",
  "Redis (learning)", "Postman",
];

function SkillBar({ name, level, color, delay, inView }: {
  name: string;
  level: number;
  color: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
          {name}
        </span>
        <span
          className="text-xs font-mono"
          style={{ color, fontFamily: "JetBrains Mono, monospace" }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-sm font-mono mb-2"
            style={{ color: "var(--accent)", fontFamily: "JetBrains Mono, monospace" }}
          >
            02 / skills
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold section-title"
            style={{ color: "var(--text-primary)" }}
          >
            Technical Arsenal
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            A growing toolkit tuned for backend development — with a fintech
            emphasis on security, data integrity, and performance.
          </p>
        </div>

        {/* Skill categories grid */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <div key={cat.category} className="card-glass p-6">
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cat.category}
                </h3>
              </div>
              {cat.skills.map((skill, sIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={catIdx * 100 + sIdx * 80}
                  inView={inView}
                />
              ))}
            </div>
          ))}
        </div>

        {/* All tech badges */}
        <div
          className={`transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-xs font-mono mb-4"
            style={{ color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }}
          >
            // also_familiar_with
          </p>
          <div className="flex flex-wrap gap-2">
            {TECH_BADGES.map((tech) => (
              <span key={tech} className="tag-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
