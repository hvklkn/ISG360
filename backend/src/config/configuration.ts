export const configuration = () => ({
  PORT: Number(process.env.PORT ?? 4000),
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '1d',
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
});
