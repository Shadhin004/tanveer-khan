import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), { status: 405 });
  }

  const { name, email, phone, subject, message } = req.body;

  try {
    // Configure transporter (use your email service or SMTP)
    const transporter = nodemailer.createTransport({
      host: "tanveer-khan.fi",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    await transporter.sendMail({
      from: `contact@tanveer-khan.fi`,
      to: 'shadhin.abc@gmail.com',
      replyTo: email,
      subject: "Contact Form Submission: " + subject,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Failed to send email" + error.message }), { status: 500 });
  }
}
