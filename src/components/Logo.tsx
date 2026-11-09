import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <a
      href="#top"
      aria-label="NEXUS Wear"
      className={cn(
        'inline-flex flex-col items-center font-display font-extrabold uppercase leading-[.85] tracking-tighter cursor-pointer',
        className
      )}
    >
      <svg
        viewBox="0 0 24 16"
        className="mb-[.15em] w-[1.1em] fill-white"
        aria-hidden="true"
      >
        <path d="M2 15 1 5l6 4 5-8 5 8 6-4-1 10z" />
      </svg>
      <b className="text-nexus">Nexus</b>
      <i className="not-italic tracking-[.02em] text-white">Wear</i>
    </a>
  );
};
