import { MongoClient } from "mongodb";
import { transporter } from "../../api/email";

const mongoUri = process.env.MONGODB;

if (!mongoUri) {
  throw new Error("❌ MONGODB environment variable is not set.");
}

const client = new MongoClient(mongoUri);

const contactTemplate = () =>  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission Received!</title>
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
        a {
            color: #1a73e8;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Contact Form Submission Received</h1>
        <p>Dear <strong>{{fullname}}</strong>,</p>
        
        <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>

        <h3>Contact Details:</h3>
        <ul>
            <li><strong>Email:</strong> {{email}}</li>
            <li><strong>Subject:</strong> {{subject}}</li>
            <li><strong>Message:</strong> {{note}}</li>
        </ul>

        <p>We appreciate your inquiry and will respond shortly. If your matter is urgent, please contact us directly via +1(818)280-9198.</p>

        <p>Best regards,<br>Yonas Tefera<br>CEO<br>ICS</p>

        <div class="footer">
            <a href="http://localhost:3000/legal/privacy-policy">Privacy Statement</a>
            <p>1165 Springwood Connector, Atlanta, GA 30328 USA | <a href="https://icreativv.com/">https://icreativv.com/</a></p>
        </div>
        </div>
</body>
</html>
`;

export async function POST(request: Request) {
  const { fullName, email, subject, note} = await request.json();

  try {
    await client.connect();
    const db = await client.db("iccs_next");
    const col = await db.collection("contacts");

    const existingContact = await col.findOne({ fullName, email, subject, note });

    const contact = {
      fullName,
      email,
      subject,
      note,
      createdAt: new Date(),
    };

    if (!existingContact) {
      await col.insertOne(contact);
    }

    await transporter.sendMail({
      subject: "Thank You for your chat!",
      to: email,
      html: contactTemplate(),
    });
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }

  return new Response(null, { status: 200 });
}
