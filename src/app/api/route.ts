import { Message } from "@/app/contacts/_components/send-message";
import { NextRequest, NextResponse } from "next/server";
import { transporter } from "./email";

const template = (fullName: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Message</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f8f8f8;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Thank You for Reaching Out!</h1>
        <p>Dear ${fullName},</p>
        <p>Thank you for leaving us a message on our website! We appreciate your input and value your engagement.</p>
        <p>Your feedback is important to us, and we’ll do our best to respond to your inquiry as soon as possible. If you have any urgent questions, 
        feel free to reach out to us at <a href="tel:+18182809198">+18182809198</a> or <a href="mailto:mail@icreativv.com">mail@icreativv.com</a>.</p>
        <p>Thank you once again for connecting with us. We look forward to assisting you!</p>
        <p>Best regards,<br>Yonas Tefera<br>CEO<br>ICS</p>
        <div class="footer">
            <p>1165 Springwood Connector , Atlanta, GA 30328 USA | <a href="https://icreativv.com/">https://icreativv.com/</a></p>
        </div>
    </div>
</body>
</html>
`;

const adminMail = (
  fullName: string,
  email: string,
  subject: string,
  note: string
) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New User Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f8f8f8;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
        }
        .info {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background: #f9f9f9;
        }
        .label {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New User Submission: ${subject}</h1>
        <p>You have received a new submission from the website. Here are the details:</p>
        <div class="info">
            <p><span class="label">Full Name:</span> ${fullName}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Subject:</span> ${subject}</p>
            <p><span class="label">Note:</span> ${note}</p>
        </div>
        <p>Please follow up as necessary.</p>
        <div class="footer">
        <p>1165 Springwood Connector , Atlanta, GA 30328 USA | <a href="https://icreativv.com/">https://icreativv.com/</a></p>
        </div>
    </div>
</body>
</html>

`;

export async function POST(request: NextRequest) {
  const body: Message = await request.json();

  try {
    await transporter.sendMail({
      subject: `New User Submission: ${body.subject}`,
      to: process.env.ADMIN_MAIL,
      html: adminMail(body.fullName, body.email, body.subject, body.note),
    });

    await transporter.sendMail({
      subject: "Thank You for Your Message",
      to: body.email,
      html: template(body.fullName),
    });
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({}, { status: 500 });
  }
}
