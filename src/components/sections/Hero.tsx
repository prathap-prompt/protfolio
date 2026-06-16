"use client";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Database,
  Server,
  Shield,
  Zap,
} from "lucide-react";

const TYPING_STRINGS = [
  "Backend Developer",
  "NestJS Engineer",
  "API Architect",
  "TypeScript Developer",
  "Fintech Enthusiast",
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorTimer = setInterval(
      () => setShowCursor((v) => !v),
      530
    );
    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    const current = TYPING_STRINGS[index];
    let timeout: NodeJS.Timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 45);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % TYPING_STRINGS.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span>
      <span className="gradient-text font-bold">{text}</span>
      <span
        className={`inline-block w-0.5 h-8 md:h-10 bg-[var(--accent)] ml-1 align-middle ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      />
    </span>
  );
}

const FLOATING_ICONS = [
  { Icon: Server, label: "NestJS", x: "8%", y: "20%", delay: "0s" },
  { Icon: Database, label: "PostgreSQL", x: "85%", y: "15%", delay: "1s" },
  { Icon: Shield, label: "JWT Auth", x: "80%", y: "70%", delay: "2s" },
  { Icon: Zap, label: "REST API", x: "5%", y: "65%", delay: "0.5s" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 tech-grid opacity-60" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(0,212,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Floating tech badges */}
      {FLOATING_ICONS.map(({ Icon, label, x, y, delay }) => (
        <div
          key={label}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 card-glass text-xs font-mono"
          style={{
            left: x,
            top: y,
            animationDelay: delay,
            animation: `float 6s ease-in-out ${delay} infinite`,
            color: "var(--accent)",
          }}
        >
          <Icon className="w-3.5 h-3.5" />
          <span style={{ color: "var(--text-secondary)" }}>{label}</span>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--accent-glow)] mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span
            className="text-xs font-medium"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Open to opportunities · Available for hire
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Prathap Reddy
        </h1>

        {/* Typing role */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 h-12 flex items-center justify-center">
          <TypingText />
        </div>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Building{" "}
          <span style={{ color: "var(--accent)" }}>scalable, secure APIs</span>{" "}
          and backend systems with NestJS, TypeScript & PostgreSQL. Passionate
          about{" "}
          <span style={{ color: "var(--gold)" }}>fintech infrastructure</span>{" "}
          that moves money reliably at scale.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            View My Projects
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 mb-16">
          {[
            {
              icon: Github,
              href: "https://github.com/prathap-reddy",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/prathap-reddy",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:prathapreddy@email.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-lg flex items-center justify-center border border-[var(--border)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] hover:-translate-y-0.5"
              style={{ color: "var(--text-muted)" }}
            >
              <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
            </a>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { value: "2", label: "Projects Built" },
            { value: "10+", label: "Technologies" },
            { value: "100%", label: "Commitment" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl font-bold gradient-text mb-0.5"
              >
                {value}
              </div>
              <div
                className="text-xs"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity duration-300 hover:opacity-70"
        style={{ color: "var(--text-muted)" }}
        aria-label="Scroll to about"
      >
        <span
          className="text-xs"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          scroll
        </span>
        <ChevronDown
          className="w-4 h-4"
          style={{ animation: "float 2s ease-in-out infinite" }}
        />
      </button>
    </section>
  );
}
