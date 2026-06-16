"use client";
import { useInView } from "@/hooks/useInView";
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";

const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "TKR Engineering College, Hyderabad",
    location: "India",
    duration: "2020 – 2024",
    grade: "CGPA: 7.8 / 10",
    color: "#7B61FF",
    highlights: [
      "Specialized coursework in Data Structures, Algorithms, DBMS, and Operating Systems",
      "Final year project: Built a secure REST API system with role-based access control",
      "Completed supplementary coursework in Machine Learning and Data Science",
      "Active member of the college coding club and backend development interest group",
    ],
    relevantCourses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Object-Oriented Programming",
      "Software Engineering",
      "Machine Learning Fundamentals",
      "Cloud Computing",
    ],
  },
];

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
            05 / education
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold section-title"
            style={{ color: "var(--text-primary)" }}
          >
            Academic Foundation
          </h2>
        </div>

        {EDUCATION.map((edu, idx) => (
          <div
            key={edu.degree}
            className={`card-glass p-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${edu.color}12`,
                  border: `1px solid ${edu.color}25`,
                }}
              >
                <GraduationCap className="w-7 h-7" style={{ color: edu.color }} />
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {edu.degree}
                </h3>
                <p className="text-base font-medium" style={{ color: edu.color }}>
                  {edu.field}
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {edu.institution}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Calendar className="w-3.5 h-3.5" /> {edu.duration}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <MapPin className="w-3.5 h-3.5" /> {edu.location}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs font-mono font-semibold"
                    style={{
                      color: "#FFB700",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    <Star className="w-3.5 h-3.5" /> {edu.grade}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Highlights */}
              <div>
                <p
                  className="text-xs font-mono mb-3"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  // highlights
                </p>
                <ul className="space-y-2">
                  {edu.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: edu.color }}
                      />
                      <span style={{ color: "var(--text-secondary)" }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevant courses */}
              <div>
                <p
                  className="text-xs font-mono mb-3"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  // relevant_courses
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded-md text-xs font-mono"
                      style={{
                        background: `${edu.color}10`,
                        border: `1px solid ${edu.color}25`,
                        color: edu.color,
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
