import React from 'react';
import { useStore } from '../context/StoreContext';
import { CheckCircle2 } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-[#161616] border border-[#E4161C] p-3.5 rounded-sm shadow-2xl flex items-center gap-3 text-white animate-slideUp pointer-events-auto"
        >
          <CheckCircle2 className="w-4 h-4 text-[#E4161C] shrink-0" />
          <span className="text-xs font-medium text-white">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
