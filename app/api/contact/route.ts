import { NextResponse } from "next/server"
import { Resend } from "resend"

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

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const recipient =
      process.env.CONTACT_RECIPIENT_EMAIL ||
      "quotes@precisionhermetic.ca"

    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "Precision Hermetic Website <quotes@forms.precisionhermetic.ca>"

    const { error } = await resend.emails.send({
      from,
      to: [recipient],
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

    if (error) {
      console.error(error)

      return NextResponse.json(
        { error: "The quote request could not be sent." },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "The quote request could not be sent." },
      { status: 500 },
    )
  }
}
