const dev = process.env.NEXT_PUBLIC_ENV;

export const apiEndpoints = dev
  ? "https://nectar-blond.vercel.app"
  : "http://localhost:3000";
