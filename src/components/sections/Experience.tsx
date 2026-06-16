"use client";
import { useInView } from "@/hooks/useInView";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Backend Developer Intern",
    company: "Tech Startup / Company",
    location: "Remote / India",
    duration: "Jan 2024 – May 2024",
    type: "Internship",
    color: "#00D4FF",
    description:
      "Contributed to backend services for a B2B SaaS platform, working with a team using NestJS and PostgreSQL. Focused on API development, database optimization, and implementing secure authentication flows.",
    responsibilities: [
      "Designed and implemented RESTful API endpoints using NestJS and TypeScript",
      "Built user authentication module with JWT access and refresh token rotation",
      "Optimized slow PostgreSQL queries with proper indexing, reducing response time by ~40%",
      "Wrote TypeORM migrations and managed database schema evolution",
      "Collaborated with frontend team to define and document API contracts via Swagger",
      "Participated in code reviews and adopted team best practices for clean code",
    ],
    achievements: [
      "Delivered 3 core API modules ahead of schedule",
      "Identified and fixed a critical auth token vulnerability",
      "Received positive feedback for clean, well-documented code",
    ],
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "JWT", "Swagger"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
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
            style={{
              color: "var(--accent)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            04 / experience
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold section-title"
            style={{ color: "var(--text-primary)" }}
          >
            Where I&apos;ve Worked
          </h2>
        </div>

        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.role}
            className={`card-glass p-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              {/* Left: role info */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{
                    background: `${exp.color}12`,
                    border: `1px solid ${exp.color}25`,
                  }}
                >
                  <Briefcase
                    className="w-5 h-5"
                    style={{ color: exp.color }}
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-base font-medium"
                    style={{ color: exp.color }}
                  >
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5">
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: type badge */}
              <span
                className="text-xs px-3 py-1.5 rounded-full font-mono self-start"
                style={{
                  background: `${exp.color}12`,
                  border: `1px solid ${exp.color}25`,
                  color: exp.color,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {exp.type}
              </span>
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {exp.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Responsibilities */}
              <div>
                <p
                  className="text-xs font-mono mb-3"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  // responsibilities
                </p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm">
                      <span
                        className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: exp.color }}
                      />
                      <span style={{ color: "var(--text-secondary)" }}>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <p
                  className="text-xs font-mono mb-3"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  // achievements
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                        style={{ color: "#00FF94" }}
                      />
                      <span style={{ color: "var(--text-secondary)" }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech used */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
              {exp.tech.map((t) => (
                <span key={t} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
