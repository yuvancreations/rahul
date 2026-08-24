import React, { useEffect } from 'react';
import { CheckCircle2, Info } from 'lucide-react';

export function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast-notification ${type} animate-slide-up-toast`}>
      <div className="toast-icon">
        {type === 'success' ? (
          <CheckCircle2 size={18} />
        ) : (
          <Info size={18} />
        )}
      </div>
      <span className="toast-message">{message}</span>
    </div>
  );
}

export default Toast;
