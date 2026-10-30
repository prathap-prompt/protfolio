import { NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, subject, message } = payload as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanSubject = subject.trim().replace(/[\r\n]+/g, " ");
  const cleanMessage = message.trim();

  if (
    !cleanName || cleanName.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) || cleanEmail.length > 254 ||
    !cleanSubject || cleanSubject.length > 160 ||
    !cleanMessage || cleanMessage.length > MAX_MESSAGE_LENGTH
  ) {
    return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: cleanEmail,
        subject: `Portfolio contact: ${cleanSubject}`,
        text: [
          `Name: ${cleanName}`,
          `Email: ${cleanEmail}`,
          `Subject: ${cleanSubject}`,
          "",
          cleanMessage,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected contact email with status", response.status);
      return NextResponse.json(
        { error: "Your message could not be sent. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Email service is temporarily unavailable. Please try again later." },
      { status: 502 },
    );
  }
}