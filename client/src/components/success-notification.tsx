import { useEffect, useState } from "react";
import { Check } from "lucide-react";

interface SuccessNotificationProps {
  isVisible: boolean;
  message?: string;
  onDismiss?: () => void;
}

export function SuccessNotification({ isVisible, message = "Copied to clipboard!", onDismiss }: SuccessNotificationProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        if (onDismiss) {
          onDismiss();
        }
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setShow(false);
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed bottom-6 right-6 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 z-50 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      data-testid="success-notification"
    >
      <div className="flex items-center space-x-2">
        <Check className="h-4 w-4" />
        <span>{message}</span>
      </div>
    </div>
  );
}
