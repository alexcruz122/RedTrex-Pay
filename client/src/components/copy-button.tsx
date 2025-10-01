import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
  variant?: "default" | "sm";
  showText?: boolean;
  onCopy?: (text: string) => Promise<boolean>;
  copiedText?: string | null;
}

export function CopyButton({ text, className, variant = "default", showText = true, onCopy, copiedText }: CopyButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isCopied = copiedText === text;

  const handleCopy = async () => {
    if (onCopy) {
      await onCopy(text);
    }
  };

  const buttonSize = variant === "sm" ? "px-2 py-1" : "px-3 py-2";
  const iconSize = variant === "sm" ? "h-3 w-3" : "h-4 w-4";

  return (
    <Button
      onClick={handleCopy}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "copy-button bg-primary text-primary-foreground rounded-lg flex items-center space-x-2 text-sm transition-all duration-200 flex-shrink-0",
        buttonSize,
        isCopied && "copied bg-accent text-accent-foreground",
        className
      )}
      data-testid={`copy-button-${text.slice(0, 10)}`}
    >
      {isCopied ? (
        <Check className={iconSize} />
      ) : (
        <Copy className={iconSize} />
      )}
      {showText && (
        <span className="hidden sm:inline">
          {isCopied ? "Copied!" : "Copy"}
        </span>
      )}
    </Button>
  );
}
