/**
 * Returns a placeholder image URL for development.
 * Replace dish images in /public/images/ with actual .webp photos for production.
 *
 * Recommended image sources:
 * - Unsplash (free, high quality)
 * - Your own photos
 *
 * Recommended dimensions: 800x600px, WebP format for best performance.
 */
export function getPlaceholderImage(dishName: string): string {
  const encoded = encodeURIComponent(dishName);
  return `https://placehold.co/800x600/242424/C9A227?text=${encoded}`;
}
