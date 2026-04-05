import 'dotenv/config';

export const RABBIT_MQ_URL = process.env.RABBIT_MQ_URL;

console.log(
  '\n',
  {
    RABBIT_MQ_URL: RABBIT_MQ_URL,
  },
  '\n',
);
