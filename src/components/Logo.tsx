import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'stacked' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className,
  variant = 'stacked',
  size = 'md',
}) => {
  // Geometric crown SVG with white outline and red inner triangle (exact match to NEXUS WEAR logo)
  const Crown = ({ sizeClass = 'w-7 h-5' }: { sizeClass?: string }) => (
    <svg
      viewBox="0 0 100 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClass, 'shrink-0')}
      aria-label="Coroa NEXUS"
    >
      {/* Outer crown outline in crisp white */}
      <path
        d="M6 14L28 48L50 8L72 48L94 14L86 58H14L6 14Z"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom base accent line */}
      <line
        x1="18"
        y1="56"
        x2="82"
        y2="56"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Central red jewel triangle at crown base */}
      <polygon
        points="50,28 40,46 60,46"
        fill="#E4161C"
      />
    </svg>
  );

  if (variant === 'horizontal') {
    return (
      <div className={cn('flex items-center gap-2.5 select-none tracking-tight', className)}>
        <Crown sizeClass={size === 'sm' ? 'w-6 h-4' : size === 'lg' ? 'w-9 h-6' : 'w-7 h-5'} />
        <div className="flex flex-col leading-none">
          <span className="font-extrabold tracking-widest text-[#E4161C] text-sm font-syne">
            NEXUS
          </span>
          <span className="font-extrabold tracking-[0.22em] text-white text-[11px] font-syne mt-0.5">
            WEAR
          </span>
        </div>
      </div>
    );
  }

  // Default stacked format
  return (
    <div className={cn('flex flex-col items-center select-none text-center', className)}>
      <Crown
        sizeClass={
          size === 'sm'
            ? 'w-6 h-4 mb-0.5'
            : size === 'lg'
            ? 'w-10 h-7 mb-1.5'
            : 'w-8 h-5.5 mb-1'
        }
      />
      <span
        className={cn(
          'font-extrabold leading-none tracking-widest text-[#E4161C] font-syne',
          size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl tracking-[0.16em]' : 'text-lg tracking-[0.14em]'
        )}
      >
        NEXUS
      </span>
      <span
        className={cn(
          'font-extrabold leading-none tracking-[0.24em] text-white font-syne mt-0.5',
          size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-lg tracking-[0.28em]' : 'text-sm tracking-[0.26em]'
        )}
      >
        WEAR
      </span>
    </div>
  );
};
