import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  onClick: () => void;
}

const WhatsAppButton = ({ onClick }: WhatsAppButtonProps) => {
  return (
    <div className="text-center space-y-3">
      <button 
        onClick={onClick}
        className="whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6" />
        Sign via WhatsApp
      </button>
      <p className="text-sm text-muted-foreground max-w-md mx-auto">
        Signing via WhatsApp allows you to confirm your support without publicly disclosing your identity; all data is protected.
      </p>
    </div>
  );
};

export default WhatsAppButton;
