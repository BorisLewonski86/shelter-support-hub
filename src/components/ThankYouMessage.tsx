import { CheckCircle } from "lucide-react";

const ThankYouMessage = () => {
  return (
    <div className="petition-card bg-primary/10 border-primary/30 text-center space-y-3 animate-fade-in">
      <CheckCircle className="w-12 h-12 text-primary mx-auto" />
      <h3 className="text-xl font-semibold text-foreground">
        Thank you. Your signature has been recorded.
      </h3>
      <p className="text-muted-foreground">
        Your support makes a difference for animal shelters across America.
      </p>
    </div>
  );
};

export default ThankYouMessage;
