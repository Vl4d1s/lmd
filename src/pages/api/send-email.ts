import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { to, subject, text } = req.body;

  if (!to || !isValidEmail(to)) {
    return res
      .status(400)
      .json({ message: 'Invalid email address', status: 400 });
  }
  if (!subject) {
    return res
      .status(400)
      .json({ message: 'Subject is required', status: 400 });
  }
  if (!text) {
    return res.status(400).json({ message: 'Text is required', status: 400 });
  }

  try {
    await sgMail.send({
      to,
      from: process.env.SENDGRID_SENDER_EMAIL!,
      subject,
      text,
    });
    return res.status(200).json({
      message:
        'Your email has been sent successfully. Please wait for confirmation.',
      status: 200,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Failed to send email', status: 500 });
  }
}

function isValidEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
