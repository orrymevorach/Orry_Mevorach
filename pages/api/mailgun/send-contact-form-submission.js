// pages/api/contact.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_SMTP_PASSWORD,
  },
});

const allowedOrigins = [
  'https://orrymevorach.com',
  'https://www.orrymevorach.com',
  'http://localhost:3000',
];

function getCorsHeaders(origin) {
  if (origin && !allowedOrigins.includes(origin)) return null;
  return {
    'Access-Control-Allow-Origin': origin || '',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default async function handler(req, res) {
  const origin = req.headers.origin;
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS
  if (!corsHeaders) {
    res.writeHead(403, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'CORS policy: Access denied' }));
    return;
  }

  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { fields, subject, title } = req.body;

    if (!fields || typeof fields !== 'object') {
      res.status(400).json({ error: 'Invalid or missing fields' });
      return;
    }

    const fieldData = Object.entries(fields)
      .map(
        ([key, value]) => `
          <div style="margin: 10px 0;">
            <p style="color:#2f2f2f;text-transform:lowercase;font-size:14px;margin:0;">${key}</p>
            <p style="font-size:16px;margin:0;">${value}</p>
          </div>`
      )
      .join('');

    const htmlBody = `
      <div style="width:550px;margin:0 auto;display:block">
        <h2 style="font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:24px">
          ${title || 'New Portfolio Site Submission'}
        </h2>
        ${fieldData}
        <img 
          src="https://orry-mevorach.s3.ca-central-1.amazonaws.com/skateboard.png"
          style="width:300px;margin-top:40px;"
          alt="Logo"
        />
      </div>
    `;

    const info = await transporter.sendMail({
      from: 'Orry Mevorach <noreply@orrymevorach.com>',
      to: 'orry.mevorach@gmail.com',
      subject: subject || 'Portfolio Site Submission',
      html: htmlBody,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    let message = 'Unexpected error occurred while sending email.';
    if (err.code === 'EAUTH')
      message = 'Authentication failed with mail server.';
    if (err.code === 'ENOTFOUND' || err.code === 'ECONNECTION')
      message = 'Could not connect to the mail server.';

    res.status(500).json({ error: message });
  }
}
