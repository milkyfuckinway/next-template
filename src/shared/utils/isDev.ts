export default function isDev() {
  const isDevEnv = process.env.NEXT_PUBLIC_IS_DEV;
  return !!(isDevEnv === 'true' && isDevEnv !== undefined);
}
