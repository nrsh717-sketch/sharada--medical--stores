import React, { useState } from 'react';
import { Cross } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFF5F1] via-[#E4F0E9] to-[#D6E8DD] p-6 text-center text-[#0F291E] ${className}`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#0F764A]/20 bg-white text-[#0F764A]">
          <Cross className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-semibold tracking-tight text-[#0F291E]">
          {fallbackTitle || 'Sharada Medical Stores'}
        </p>
        <p className="mt-1 max-w-xs text-xs text-[#475E53]">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
