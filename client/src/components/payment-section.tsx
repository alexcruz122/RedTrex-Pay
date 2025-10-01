import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "./copy-button";
import { cn } from "@/lib/utils";

interface PaymentDetail {
  label: string;
  value: string;
  copyable?: boolean;
  note?: string;
}

interface PaymentSectionProps {
  title: string;
  icon: string;
  badge?: {
    text: string;
    variant?: string;
  };
  details: PaymentDetail[];
  note?: {
    text: string;
    variant?: "info" | "warning";
  };
  className?: string;
  comingSoon?: boolean;
  onCopy?: (text: string) => Promise<boolean>;
  copiedText?: string | null;
}

export function PaymentSection({
  title,
  icon,
  badge,
  details,
  note,
  className,
  comingSoon = false,
  onCopy,
  copiedText
}: PaymentSectionProps) {
  if (comingSoon) {
    return (
      <Card className={cn("glass-card rounded-xl p-8 text-center relative overflow-hidden", className)}>
        <div className="absolute top-4 right-4">
          <Badge className="coming-soon-badge text-xs font-bold text-white">
            COMING SOON
          </Badge>
        </div>
        
        <div className="mb-6">
          <div className="text-6xl mb-4 text-muted-foreground">📱</div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're working on integrating popular mobile wallet solutions for faster and more convenient payments.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 text-4xl text-muted-foreground">
          <span>📱</span>
          <span>💳</span>
          <span>🔒</span>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn("glass-card rounded-xl p-6", className)} data-testid={`payment-section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold flex items-center">
          <span className="text-2xl mr-3">{icon}</span>
          {title}
        </h3>
        {badge && (
          <Badge 
            className={cn(
              "text-sm px-3 py-1 rounded-full",
              badge.variant === "active" && "bg-accent text-accent-foreground",
              badge.variant === "network" && "bg-orange-500/20 text-orange-300",
              badge.variant === "erc20" && "bg-blue-500/20 text-blue-300",
              badge.variant === "multi" && "bg-green-500/20 text-green-300",
              badge.variant === "litecoin" && "bg-gray-500/20 text-gray-300",
              !badge.variant && "bg-secondary text-secondary-foreground"
            )}
            data-testid={`badge-${badge.text.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {badge.text}
          </Badge>
        )}
      </div>
      
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div key={index} className="p-4 bg-secondary/50 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex-1 mr-3">
                <p className="text-sm text-muted-foreground mb-2">{detail.label}</p>
                <p className={cn(
                  "break-all",
                  detail.copyable ? "font-mono text-sm" : "font-medium",
                  detail.copyable && "mr-3"
                )} data-testid={`payment-detail-${detail.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {detail.value}
                </p>
                {detail.note && (
                  <p className="text-xs text-muted-foreground mt-1">{detail.note}</p>
                )}
              </div>
              {detail.copyable && (
                <CopyButton 
                  text={detail.value} 
                  variant="default"
                  onCopy={onCopy}
                  copiedText={copiedText}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      
      {note && (
        <div className={cn(
          "mt-6 p-4 border rounded-lg",
          note.variant === "info" && "bg-accent/10 border-accent/20",
          note.variant === "warning" && "bg-orange-500/10 border-orange-500/20"
        )}>
          <div className="flex items-center mb-2">
            <span className={cn(
              "mr-2",
              note.variant === "info" && "text-accent",
              note.variant === "warning" && "text-orange-300"
            )}>
              {note.variant === "info" ? "ℹ️" : "⚠️"}
            </span>
            <span className={cn(
              "font-medium",
              note.variant === "info" && "text-accent-foreground",
              note.variant === "warning" && "text-orange-300"
            )}>
              {note.variant === "info" ? "Payment Information" : "Important"}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {note.text}
          </p>
        </div>
      )}
    </Card>
  );
}
