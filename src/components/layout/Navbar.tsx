"use client";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)] bg-opacity-90 backdrop-blur-lg border-b border-[var(--border)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-[#0A0F1E]" />
            </div>
            <span
              className="font-mono text-sm font-600 text-[var(--accent)] hidden sm:block"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              prathap<span className="text-[var(--gold)]">.dev</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-[var(--accent)] bg-[var(--accent-glow)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)] transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Resume button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
            >
              Hire Me
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)] border-t border-[var(--border)] px-4 py-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`block w-full text-left px-3 py-3 rounded-lg text-sm font-medium mb-1 transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? "text-[var(--accent)] bg-[var(--accent-glow)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-3 w-full justify-center text-sm"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
