"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  MapPin,
  MessageSquare,
  User,
  AtSign,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "prathapreddy@email.com",
    href: "mailto:prathapreddy@email.com",
    color: "#00D4FF",
    desc: "Best way to reach me",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/prathap-reddy",
    href: "https://linkedin.com/in/prathap-reddy",
    color: "#0077B5",
    desc: "Professional profile",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/prathap-reddy",
    href: "https://github.com/prathap-reddy",
    color: "#E0E0E0",
    desc: "Code & projects",
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
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
            07 / contact
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold section-title"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s Work Together
          </h2>
          <p
            className="mt-4 text-base max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            I&apos;m actively looking for backend roles at fintech companies.
            Whether you have an opportunity, a project, or just want to connect
            — my inbox is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Status */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(0,255,100,0.08)",
                border: "1px solid rgba(0,255,100,0.2)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-xs font-mono"
                style={{
                  color: "#00FF94",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Available for full-time roles · Open to relocation
              </span>
            </div>

            <div className="space-y-4 mb-8">
              {SOCIAL_LINKS.map(({ icon: Icon, label, value, href, color, desc }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 group"
                  style={{
                    background: "var(--bg-surface)",
                    borderColor: "var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = color;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}18`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {desc}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <MapPin className="w-4 h-4" />
              Based in India · Open to remote & on-site
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            className={`transition-all duration-700 delay-350 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-8 rounded-xl border"
                style={{
                  background: "rgba(0,255,100,0.05)",
                  borderColor: "rgba(0,255,100,0.2)",
                }}
              >
                <CheckCircle2
                  className="w-12 h-12 mb-4"
                  style={{ color: "#00FF94" }}
                />
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-glass p-6 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-mono mb-1.5"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      name *
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                        style={{ color: "var(--text-muted)" }}
                      />
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                        style={{
                          background: "var(--bg-primary)",
                          border: "1px solid var(--border)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--accent)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--border)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-xs font-mono mb-1.5"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      email *
                    </label>
                    <div className="relative">
                      <AtSign
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                        style={{ color: "var(--text-muted)" }}
                      />
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                        style={{
                          background: "var(--bg-primary)",
                          border: "1px solid var(--border)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--accent)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--border)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-mono mb-1.5"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Backend Developer Role at [Company]"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                    style={{
                      background: "var(--bg-primary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-mono mb-1.5"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    message *
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-3 top-3 w-4 h-4"
                      style={{ color: "var(--text-muted)" }}
                    />
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "var(--bg-primary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                  style={{ opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-[#0A0F1E] border-t-transparent rounded-full animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
