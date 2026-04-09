import 'dotenv/config';

export const RABBIT_MQ_URL = process.env.RABBIT_MQ_URL;
export const SMTP_USER = process.env.SMTP_USER;
export const SMTP_PASS = process.env.SMTP_PASS;

console.log(
  '\n',
  {
    RABBIT_MQ_URL: RABBIT_MQ_URL,
    SMTP_USER: SMTP_USER,
    SMTP_PASS: SMTP_PASS,
  },
  '\n',
);
