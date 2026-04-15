import 'dotenv/config';

export const RABBIT_MQ_URL = process.env.RABBIT_MQ_URL;
export const SMTP_USER = process.env.SMTP_USER;
export const SMTP_PASS = process.env.SMTP_PASS;
export const OLLAMA_URL = process.env.OLLAMA_URL;

console.log(
  '\n',
  {
    RABBIT_MQ_URL: RABBIT_MQ_URL,
    SMTP_USER: SMTP_USER,
    SMTP_PASS: SMTP_PASS,
    OLLAMA_URL: OLLAMA_URL,
  },
  '\n',
);
