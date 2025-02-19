import { MongoClient } from "mongodb";
import { transporter } from "../api/email";

const client = new MongoClient(process.env.MONGODB!);

const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Subscribing!</title>
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
        <h1>Welcome and Thank You for Subscribing!</h1>
        <p>Dear,</p>
        <p>Thank you for subscribing to our newsletter! We’re excited to have you on board and look forward to sharing the latest updates, news, and exclusive offers with you.</p>


        <p>Thank you once again for joining us!</p>

        <p>Best regards,<br>Yonas Tefera<br>CEO<br>ICS</p>
        <div class="footer">
        <a href="http://localhost:3000/api/unsubscribe?key=12">Unsubscribe</a>
        <a href="http://localhost:3000/legal/privacy-policy">Privacy Statement</a>
            <p>1165 Springwood Connector , Atlanta, GA 30328 USA | <a href="https://icreativv.com/">https://icreativv.com/</a></p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    await client.connect();
    const db = await client.db("iccs_next");
    const col = await db.collection("newsletter");

    const existingSubscription = await col.findOne({ email });

    if (!existingSubscription) {
      await col.insertOne({
        email,
        createdAt: new Date(),
      });
    }

    await transporter.sendMail({
      subject: "Thank You for Subscribing!",
      to: email,
      html: emailTemplate,
    });
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }

  return new Response(null, { status: 200 });
}
