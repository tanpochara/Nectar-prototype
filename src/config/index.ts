const dev = process.env.NEXT_PUBLIC_ENV;

export const apiEndpoints = dev ? "something" : "http://localhost:3000";
