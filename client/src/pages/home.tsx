import { useEffect, useState } from "react";
import { PaymentSection } from "@/components/payment-section";
import { SuccessNotification } from "@/components/success-notification";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { copyToClipboard, copiedText } = useCopyToClipboard();

  useEffect(() => {
    if (copiedText) {
      // Trigger notification when something is copied
      setIsVisible(true);
    }
    // Don't reset isVisible when copiedText becomes null - let SuccessNotification handle the timing
  }, [copiedText]);

  const bankAccountSections = [
    {
      title: "Local Account (LKR)",
      icon: "LK",
      badge: { text: "Sri Lanka" },
      details: [
        { label: "Bank Name", value: "Commercial Bank PLC" },
        { label: "Account Number", value: "8005394377", copyable: true },
        { label: "Account Holder", value: "W.D.Y FERNANDO" },
        { label: "Branch", value: "Negombo City Branch" }
      ]
    }
  ];

  const internationalAccounts = [
    {
      title: "Lead Bank Checking Account",
      icon: "🇺🇸",
      badge: { text: "International (ACH)" },
      details: [
        { label: "Routing", value: "101019644", copyable: true },
        { label: "Account Number", value: "216258445843", copyable: true }
      ],
      note: {
        text: "Minimum 5$ ( Payment Confirmation 3-5 Buisness Day's ) Fees may apply for non-US banks.",
        variant: "warning" as const
      }
    },
    {
      title: "EUR Account (Modulr Finance)",
      icon: "🇪🇺",
      badge: { text: "International (SEPA)" },
      details: [
        { label: "IBAN", value: "IE08MODR99035511807784", copyable: true },
        { label: "BIC", value: "MODRIE22XXX", copyable: true }
      ],
      note: {
        text: "Minimum 5 EUR ( Payment Confirmation 3-5 Buisness Day's ) Fees may apply for non-EU banks.",
        variant: "warning" as const
      }
    }
  ];


  const binancePaySection = {
    title: "Instant Crypto Payments",
    icon: "⚡",
    badge: { text: "Active", variant: "active" },
    details: [
      { label: "Binance Pay ID", value: "491329885", copyable: true },
      { label: "Email", value: "afectionai@gmail.com", copyable: true }
    ],
    note: {
      text: "Use either the Binance Pay ID or email address to send payments instantly with zero fees.",
      variant: "info" as const
    }
  };

  const cryptoWallets = [
    {
      title: "Bitcoin (BTC)",
      icon: "₿",
      badge: { text: "Bitcoin Network", variant: "network" },
      details: [
        { label: "Wallet Address", value: "1G3J28Uy1YoZ98QW6ZTgxXL8aVoA7ZjiNQ", copyable: true }
      ],
      note: {
        text: "Only send Bitcoin (BTC) to this address",
        variant: "warning" as const
      }
    },
    {
      title: "Ethereum (ETH)",
      icon: "Ξ",
      badge: { text: "ERC-20 Compatible", variant: "erc20" },
      details: [
        { label: "Wallet Address", value: "0x75d11ad40f5c81376d95fa3d5380f65d90f58889", copyable: true }
      ],
      note: {
        text: "Supports ETH and all ERC-20 tokens",
        variant: "info" as const
      }
    },
    {
      title: "USDT (Tether)",
      icon: "₮",
      badge: { text: "Multi-Network", variant: "multi" },
      details: [
        { 
          label: "Plygon PoS", 
          value: "0x75d11ad40f5c81376d95fa3d5380f65d90f58889", 
          copyable: true,
          note: "Low Fees"
        },
        { 
          label: "TRON (TRC 20)", 
          value: "TCMb77f8EAFbJ3tCHGD6ZqhFa5bTxVbkmq", 
          copyable: true,
          note: "Secure"
        }
      ]
    },
    {
      title: "Litecoin (LTC)",
      icon: "Ł",
      badge: { text: "Litecoin Network", variant: "litecoin" },
      details: [
        { label: "Wallet Address", value: "LQTpS7GidQP9o4RQJnmGT1bT6TfEFWbH4X", copyable: true }
      ],
      note: {
        text: "Fast and low-cost transactions",
        variant: "info" as const
      }
    }
  ];

  return (
    <div className="relative z-10 min-h-screen">
      {/* Header */}
      <header className="text-center py-12 px-4 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
         RedTrex Payment Details
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Secure and convenient payment options for your transactions
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        {/* Bank Accounts Section */}
        <section className="mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center mb-8">
            <span className="text-3xl section-icon mr-4">🏦</span>
            <h2 className="text-3xl font-bold">Bank Accounts</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Local Bank Account */}
            <PaymentSection {...bankAccountSections[0]} onCopy={copyToClipboard} copiedText={copiedText} />

            {/* International Bank Accounts */}
            <div className="space-y-6">
              {internationalAccounts.map((account, index) => (
                <PaymentSection 
                  key={index} 
                  {...account} 
                  onCopy={copyToClipboard}
                  copiedText={copiedText}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Wallet Section */}
        <section className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center mb-8">
            <span className="text-3xl section-icon mr-4">📱</span>
            <h2 className="text-3xl font-bold">Mobile Wallet</h2>
          </div>
          
          <PaymentSection
            title="Mobile Payment Integration"
            icon="📱"
            details={[]}
            comingSoon={true}
            onCopy={copyToClipboard}
            copiedText={copiedText}
          />
        </section>

        {/* Binance Pay Section */}
        <section className="mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center mb-8">
            <span className="text-3xl section-icon mr-4">₿</span>
            <h2 className="text-3xl font-bold">Binance Pay</h2>
          </div>
          
          <PaymentSection {...binancePaySection} onCopy={copyToClipboard} copiedText={copiedText} />
        </section>

        {/* Crypto Wallets Section */}
        <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center mb-8">
            <span className="text-3xl section-icon mr-4">⚡</span>
            <h2 className="text-3xl font-bold">Crypto Wallets</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cryptoWallets.map((wallet, index) => (
              <PaymentSection 
                key={index} 
                {...wallet} 
                onCopy={copyToClipboard}
                copiedText={copiedText}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Success Notification */}
      <SuccessNotification 
        isVisible={isVisible} 
        onDismiss={() => setIsVisible(false)}
      />
    </div>
  );
}
