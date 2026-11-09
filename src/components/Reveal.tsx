import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

export function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, seen };
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
  const { ref, seen } = useInView();

  return (
    <div
      ref={ref}
      style={{ '--d': `${delay}s` } as React.CSSProperties}
      className={cn('rv', seen && 'in', className)}
    >
      {children}
    </div>
  );
};
