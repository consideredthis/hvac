import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      name,
      company,
      email,
      phone,
      model,
      details,
      website,
    } = body

    // Honeypot spam field
    if (website) {
      return NextResponse.json({ success: true })
    }

    if (!name || !email || !model) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      )
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_RECIPIENT_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_RECIPIENT_EMAIL ||
      !CONTACT_FROM_EMAIL
    ) {
      console.error("Missing SMTP environment variables")

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false,
      requireTLS: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Quote request: ${model} — ${company || name}`,
      text: `
New compressor rebuild quote request

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Compressor model / part number: ${model}

Failure symptoms / notes:
${details || "Not provided"}
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      { error: "The quote request could not be sent." },
      { status: 500 },
    )
  }
}