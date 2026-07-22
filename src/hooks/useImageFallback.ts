import { useState, useCallback } from "react";

/**
 * Provides a fallback placeholder when a local image isn't found.
 * During development, dish images may not exist yet.
 */
export function useImageFallback(dishName: string) {
  const [hasError, setHasError] = useState(false);

  const onError = useCallback(() => {
    setHasError(true);
  }, []);

  const fallbackSrc = `https://placehold.co/800x600/242424/C9A227?text=${encodeURIComponent(dishName)}`;

  return { hasError, onError, fallbackSrc };
}
