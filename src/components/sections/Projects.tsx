"use client";
import { useInView } from "@/hooks/useInView";
import {
  ExternalLink,
  Github,
  Link2,
  BarChart2,
  ShieldCheck,
  ArrowUpRight,
  Layers,
} from "lucide-react";

const PROJECTS = [
  {
    number: "01",
    title: "URL Shortener API",
    subtitle: "Link Intelligence Platform",
    description:
      "A production-grade URL shortening service with full analytics pipeline. Designed with fintech-grade reliability in mind — every redirect is logged, every click tracked, and the data model supports multi-tenant analytics dashboards.",
    longDesc:
      "Built with a focus on high-throughput performance. The redirect path is optimized to sub-millisecond lookup via indexed database queries. Analytics data is stored in a time-series-friendly schema for efficient aggregation.",
    features: [
      "Unique short-code generation with collision handling",
      "Real-time click tracking with IP, referrer, device data",
      "Analytics endpoints: total clicks, unique visitors, time-series",
      "Custom alias support with reserved-word blacklist",
      "Redirect chaining prevention and loop detection",
      "RESTful API with Swagger/OpenAPI documentation",
    ],
    tech: ["NestJS", "PostgreSQL", "TypeORM", "TypeScript", "REST API", "Swagger"],
    github: "https://github.com/prathap-prompt/Url-Shortner.git",
    demo: null,
    color: "#00D4FF",
    icon: Link2,
    status: "Completed",
    highlight: "Analytics-first design",
  },
  {
    number: "02",
    title: "Expense Tracker API",
    subtitle: "Personal Finance Backend",
    description:
      "A secure, multi-user expense management backend built with JWT authentication. Demonstrates core patterns from financial software: role-based access, audit trails, and data isolation between accounts — all patterns used in banking APIs.",
    longDesc:
      "Authentication uses access/refresh token pairs with secure rotation. User data is strictly isolated at the query layer — no shared-data leakage possible between accounts. All financial mutations are validated and sanitized server-side.",
    features: [
      "JWT access & refresh token authentication",
      "User registration, login, and secure logout",
      "CRUD operations for expense categories and entries",
      "Per-user data isolation at database query level",
      "Monthly/category-wise expense summaries",
      "Input validation with class-validator",
      "Protected routes with NestJS Guards",
    ],
    tech: ["NestJS", "PostgreSQL", "TypeORM", "TypeScript", "JWT Auth", "class-validator"],
    github: "https://github.com/prathap-reddy/expense-tracker-api",
    demo: null,
    color: "#FFB700",
    icon: ShieldCheck,
    status: "Completed",
    highlight: "Fintech-grade auth patterns",
  },
];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = project.icon;

  return (
    <div
      className={`card-glass p-8 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}30`,
            }}
          >
            <Icon className="w-5 h-5" style={{ color: project.color }} />
          </div>
          <div>
            <p
              className="text-xs font-mono"
              style={{
                color: project.color,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {project.number} / {project.subtitle}
            </p>
            <h3
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </h3>
          </div>
        </div>
        <span
          className="text-xs px-2 py-1 rounded-full font-mono"
          style={{
            background: "rgba(0,255,100,0.08)",
            border: "1px solid rgba(0,255,100,0.25)",
            color: "#00FF94",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      {/* Highlight callout */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-lg mb-6 text-xs font-mono"
        style={{
          background: `${project.color}10`,
          border: `1px solid ${project.color}20`,
          color: project.color,
          fontFamily: "JetBrains Mono, monospace",
        }}
      >
        <Layers className="w-3.5 h-3.5 flex-shrink-0" />
        {project.highlight}
      </div>

      {/* Features */}
      <div className="mb-6">
        <p
          className="text-xs font-mono mb-3"
          style={{
            color: "var(--text-muted)",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          // key_features
        </p>
        <ul className="space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <span
                className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: project.color }}
              />
              <span style={{ color: "var(--text-secondary)" }}>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-mono"
              style={{
                background: `${project.color}10`,
                border: `1px solid ${project.color}25`,
                color: project.color,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:opacity-80"
          style={{ color: "var(--text-secondary)" }}
        >
          <Github className="w-4 h-4" />
          Source Code
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium ml-auto transition-all duration-200"
            style={{ color: project.color }}
          >
            Live Demo
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span
            className="ml-auto text-xs font-mono"
            style={{
              color: "var(--text-muted)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Backend API · No UI
          </span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section"
      style={{ background: "var(--bg-secondary)" }}
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
            03 / projects
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold section-title"
            style={{ color: "var(--text-primary)" }}
          >
            Things I&apos;ve Built
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Two backend projects that demonstrate real-world patterns: auth
            systems, analytics pipelines, and data isolation — all relevant to
            fintech.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* More coming soon */}
        <div
          className={`mt-8 text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://github.com/prathap-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
            style={{ color: "var(--accent)" }}
          >
            <Github className="w-4 h-4" />
            See all projects on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
