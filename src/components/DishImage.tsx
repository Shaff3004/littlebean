import { useState, useCallback } from "react";

interface DishImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

function DishImage({ src, alt, className = "", loading = "lazy" }: DishImageProps) {
  const [hasError, setHasError] = useState(false);

  const onError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-card ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 p-6 text-center">
          <span className="text-4xl opacity-60">🍽️</span>
          <span className="text-xs font-medium text-text-muted">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={onError}
      className={className}
    />
  );
}

export default DishImage;
