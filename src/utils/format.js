export function formatDownloads(num) {
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B`.replace(".0", "");
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`.replace(".0", "");
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`.replace(".0", "");
  return String(num);
}

export function formatRating(rating) {
  return Number(rating).toFixed(1).replace(".0", "");
}
