export default function getLocalizedDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
