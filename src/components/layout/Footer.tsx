"use client";
import { Github, Linkedin, Mail, Terminal, ArrowUp } from "lucide-react";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-[#0A0F1E]" />
              </div>
              <span
                className="font-mono text-sm font-semibold"
                style={{ color: "var(--accent)", fontFamily: "JetBrains Mono, monospace" }}
              >
                prathap<span style={{ color: "var(--gold)" }}>.dev</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Backend Developer specializing in NestJS, TypeScript, and
              PostgreSQL. Building secure APIs for the fintech world.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-mono font-semibold mb-4 uppercase tracking-widest"
              style={{
                color: "var(--text-muted)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-xs font-mono font-semibold mb-4 uppercase tracking-widest"
              style={{
                color: "var(--text-muted)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Connect
            </h4>
            <div className="space-y-3">
              {[
                { icon: Mail, label: "prathapreddy@email.com", href: "mailto:prathapreddy@email.com" },
                { icon: Github, label: "github.com/prathap-reddy", href: "https://github.com/prathap-reddy" },
                { icon: Linkedin, label: "linkedin.com/in/prathap-reddy", href: "https://linkedin.com/in/prathap-reddy" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            className="text-xs font-mono"
            style={{
              color: "var(--text-muted)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            © {new Date().getFullYear()} Prathap Reddy. Built with Next.js &
            TypeScript.
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
            }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
