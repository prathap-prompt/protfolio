"use client";
import { useInView } from "@/hooks/useInView";
import { Award, ExternalLink, Calendar } from "lucide-react";

const CERTS = [
  {
    title: "NestJS Zero to Hero - Modern TypeScript Back-end Development",
    issuer: "Udemy",
    date: "2024",
    color: "#00D4FF",
    credentialId: "UC-XXXX",
    link: "https://udemy.com",
    skills: ["NestJS", "TypeScript", "REST API", "PostgreSQL"],
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    date: "2024",
    color: "#FFB700",
    credentialId: "UC-YYYY",
    link: "https://udemy.com",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "Python for Everybody Specialization",
    issuer: "Coursera / University of Michigan",
    date: "2023",
    color: "#7B61FF",
    credentialId: "COURSERA-ZZZ",
    link: "https://coursera.org",
    skills: ["Python", "Data Structures", "APIs", "Databases"],
  },
  {
    title: "Machine Learning Foundations",
    issuer: "Coursera / Stanford Online",
    date: "2023",
    color: "#FF6B6B",
    credentialId: "COURSERA-ML",
    link: "https://coursera.org",
    skills: ["ML Algorithms", "Supervised Learning", "Python", "Scikit-learn"],
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training",
    date: "2024",
    color: "#FF9900",
    credentialId: "AWS-CL-XXX",
    link: "https://aws.amazon.com",
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM"],
  },
  {
    title: "PostgreSQL for Everybody",
    issuer: "Coursera / University of Michigan",
    date: "2024",
    color: "#00FF94",
    credentialId: "COURSERA-PG",
    link: "https://coursera.org",
    skills: ["PostgreSQL", "SQL", "Database Design", "Indexing"],
  },
];

export default function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section
      id="certifications"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section"
      style={{ background: "var(--bg-primary)" }}
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
            06 / certifications
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold section-title"
            style={{ color: "var(--text-primary)" }}
          >
            Certifications & Learning
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Continuous learner. These certifications represent structured
            investments in the skills that matter for backend and fintech
            engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((cert, idx) => (
            <div
              key={cert.title}
              className={`card-glass p-5 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${cert.color}12`,
                    border: `1px solid ${cert.color}25`,
                  }}
                >
                  <Award className="w-5 h-5" style={{ color: cert.color }} />
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-md flex items-center justify-center transition-colors hover:bg-[var(--accent-glow)]"
                  style={{ color: "var(--text-muted)" }}
                  aria-label="View certificate"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <h3
                className="text-sm font-semibold leading-snug mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {cert.title}
              </h3>

              <p className="text-xs mb-1" style={{ color: cert.color }}>
                {cert.issuer}
              </p>

              <div
                className="flex items-center gap-1 text-xs mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                <Calendar className="w-3 h-3" />
                {cert.date}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded text-xs font-mono"
                    style={{
                      background: `${cert.color}10`,
                      border: `1px solid ${cert.color}20`,
                      color: cert.color,
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
