import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, mobile, query } = body;

    // Validate required fields
    if (!name || !email || !query) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL, // e.g., "Contact Form <onboarding@resend.dev>"
      to: process.env.RESEND_TO_EMAIL, // Your email where you want to receive messages
      subject: subject || "New Contact Form Submission",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { margin-left: 10px; }
              .message { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0; color: #333;">New Contact Form Submission</h2>
              </div>
              
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              
              ${mobile ? `
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${mobile}</span>
              </div>
              ` : ''}
              
              ${subject ? `
              <div class="field">
                <span class="label">Subject:</span>
                <span class="value">${subject}</span>
              </div>
              ` : ''}
              
              <div class="message">
                <div class="label">Message:</div>
                <p style="margin-top: 10px; white-space: pre-wrap;">${query}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      // Optional: Add reply-to so you can reply directly to the sender
      reply_to: email,
    });

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}