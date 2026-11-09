import React from 'react';
import { useStore } from '../context/StoreContext';
import { cn } from '../lib/utils';

export const ToastContainer: React.FC = () => {
  const { toast } = useStore();

  return (
    <div
      role="status"
      className={cn(
        'fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-ink transition-transform duration-500 shadow-2xl pointer-events-none',
        toast ? 'translate-y-0' : 'translate-y-[200%]'
      )}
    >
      {toast}
    </div>
  );
};
