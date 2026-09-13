import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Minimal contact-form backend. This is the ONLY server-side code the
// ISTE-CGC site needs -- everything else (team/events/gallery/partners) is
// static data served directly from the frontend.
//
// Required env vars (see .env.example):
//   CONTACT_EMAIL  - where submissions are delivered
//   SMTP_HOST
//   SMTP_PORT
//   SMTP_USER
//   SMTP_PASSWORD

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, subject, message, phone } = body || {};

  // --- Validation -----------------------------------------------------
  const errors = [];
  if (!isNonEmptyString(name)) errors.push("Name is required.");
  if (!isNonEmptyString(email) || !EMAIL_REGEX.test(email.trim()))
    errors.push("A valid email is required.");
  if (!isNonEmptyString(subject)) errors.push("Subject is required.");
  if (!isNonEmptyString(message)) errors.push("Message is required.");

  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, error: errors.join(" ") },
      { status: 400 }
    );
  }

  // --- Configuration check ---------------------------------------------
  const { CONTACT_EMAIL, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } =
    process.env;

  if (!CONTACT_EMAIL || !SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    console.error(
      "[contact] Missing SMTP/CONTACT_EMAIL environment variables. See .env.example."
    );
    return NextResponse.json(
      {
        success: false,
        error:
          "The contact form isn't configured yet. Please try again later.",
      },
      { status: 500 }
    );
  }

  // --- Send email --------------------------------------------------------
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false for 587/other
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"ISTE-CGC Website" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: `[ISTE-CGC Contact] ${subject.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        phone ? `Phone: ${phone.trim()}` : null,
        "",
        message.trim(),
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong sending your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
