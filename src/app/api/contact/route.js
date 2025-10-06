export const runtime = "nodejs"; // ✅ ensures Node.js runtime instead of Edge

export async function POST(req) {
  try {
    // ✅ dynamically import nodemailer so it only loads at runtime
    const nodemailer = await import("nodemailer");

    const body = await req.json();
    const { name, email, contact, service, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400,
      });
    }

    // ✅ setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission: ${service || "No Service"}`,
      text: `Name: ${name}\nEmail: ${email}\nContact: ${contact || "-"}\nService: ${service || "-"}\nMessage: ${message}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Contact:</b> ${contact || "-"}</p>
        <p><b>Service:</b> ${service || "-"}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
