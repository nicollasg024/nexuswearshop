import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { cn } from '../lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  durationMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delayMs = 0,
  direction = 'up',
  durationMs = 600,
}) => {
  const { ref, isRevealed } = useReveal<HTMLDivElement>();

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(24px)';
      case 'down':
        return 'translateY(-24px)';
      case 'left':
        return 'translateX(24px)';
      case 'right':
        return 'translateX(-24px)';
      case 'none':
      default:
        return 'none';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'none' : getInitialTransform(),
        willChange: isRevealed ? 'auto' : 'opacity, transform',
      }}
      className={cn(className)}
    >
      {children}
    </div>
  );
};
