export function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded ${className}`}
    />
  );
}