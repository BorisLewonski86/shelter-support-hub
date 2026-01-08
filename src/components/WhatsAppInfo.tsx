import { Info } from "lucide-react";

const WhatsAppInfo = () => {
  const features = [
    "verification without public disclosure of personal data;",
    "one signature per WhatsApp number;",
    "automatic updating of the signature counter upon confirmation.",
  ];

  return (
    <div className="petition-card space-y-4">
      <div className="flex items-center gap-2">
        <Info className="w-5 h-5 text-primary" />
        <h2 className="section-title mb-0">How Signing via WhatsApp Works</h2>
      </div>
      
      <p className="text-muted-foreground leading-relaxed">
        By selecting <strong className="text-foreground">"Sign via WhatsApp"</strong>, you will be guided through a simple and secure verification process to confirm your support.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        The system ensures:
      </p>

      <ul className="space-y-2 ml-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="text-primary mt-0.5">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <p className="text-sm text-muted-foreground italic">
        Personal data is processed in compliance with applicable U.S. privacy standards and platform policies.
      </p>
    </div>
  );
};

export default WhatsAppInfo;
