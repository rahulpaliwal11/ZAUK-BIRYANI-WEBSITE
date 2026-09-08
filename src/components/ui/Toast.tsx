import React from 'react';
import { useCart } from '../../context/CartContext';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-xl bg-dark-850/95 border border-gold-500/40 text-cream-100 shadow-gold-md backdrop-blur-md transition-all duration-300 transform translate-y-0 animate-fadeIn"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gold-500/10 text-amber-400 border border-gold-500/20">
              {toast.type === 'info' ? (
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              )}
            </div>
            <p className="text-xs md:text-sm font-medium text-cream-100">{toast.message}</p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-cream-400 hover:text-cream-100 p-1 transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
