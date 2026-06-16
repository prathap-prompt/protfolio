"use client";
import { useInView } from "@/hooks/useInView";
import { Target, Code2, TrendingUp, Heart } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Backend-First Mindset",
    desc: "I think in systems — APIs, data flows, authentication layers, and the infrastructure that makes apps reliable and fast.",
  },
  {
    icon: Target,
    title: "Fintech Focus",
    desc: "Drawn to the precision and responsibility of financial software. Every transaction matters; every millisecond counts.",
  },
  {
    icon: TrendingUp,
    title: "Rapid Learner",
    desc: "Went from fundamentals to building production-ready APIs with NestJS, JWT auth, and cloud deployments in under a year.",
  },
  {
    icon: Heart,
    title: "Clean Code Advocate",
    desc: "Firmly believe that well-structured, documented code is a form of respect for future maintainers — including future-me.",
  },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          className={`mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-sm font-mono mb-2"
            style={{ color: "var(--accent)", fontFamily: "JetBrains Mono, monospace" }}
          >
            01 / about
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold section-title"
            style={{ color: "var(--text-primary)" }}
          >
            The Developer Behind the Code
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Story */}
          <div
            className={`space-y-5 transition-all duration-700 delay-150 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Hi, I&apos;m{" "}
              <span className="font-semibold" style={{ color: "var(--accent)" }}>
                Prathap Reddy
              </span>
              , a freshly minted backend developer with a deep passion for
              building the systems that power modern applications. While most
              people interact with polished frontends, I&apos;m fascinated by
              what&apos;s underneath — the APIs, databases, auth layers, and
              business logic that make everything work.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              My journey started with Python and moved naturally into the
              TypeScript ecosystem — NestJS in particular clicked immediately.
              The structured, decorator-based architecture mirrors how I think
              about software: modular, testable, and intentional. I&apos;ve
              extended that into machine learning fundamentals, giving me
              intuition for both the data layer and the intelligence layer.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m actively looking for an opportunity at a{" "}
              <span style={{ color: "var(--gold)" }}>
                fintech company — bank, payment processor, or startup
              </span>{" "}
              — where the stakes are high, the data is sensitive, and getting
              things right really matters. I want to build payment APIs,
              transaction engines, and secure auth systems that people trust
              with their money.
            </p>


          </div>

          {/* Highlight cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-glass p-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: "rgba(0,212,255,0.1)",
                    border: "1px solid rgba(0,212,255,0.2)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="font-semibold text-sm mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
