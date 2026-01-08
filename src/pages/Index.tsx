import Header from "@/components/Header";
import SignatureCounter from "@/components/SignatureCounter";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhySupport from "@/components/WhySupport";
import PetitionText from "@/components/PetitionText";
import WhatsAppInfo from "@/components/WhatsAppInfo";
import Footer from "@/components/Footer";
import ThankYouMessage from "@/components/ThankYouMessage";
import { useSignatures } from "@/hooks/useSignatures";

const SIGNATURE_GOAL = 50000;

const Index = () => {
  const { signatures, hasSigned, justSigned, handleWhatsAppClick } = useSignatures();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 pb-8">
        <Header />

        {/* Thank you message when user just signed */}
        {justSigned && (
          <div className="mb-8">
            <ThankYouMessage />
          </div>
        )}

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-6 mb-8">
          {/* Left column - Main petition info */}
          <div className="lg:col-span-3 petition-card space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
                Protect Animal Shelters — Preserve Public Funding and Community Safety
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Animal shelters and rescue organizations across the United States play a vital role in protecting animal welfare, public health, and community safety. Every year, they care for <strong className="text-foreground">millions of animals nationwide</strong>, providing essential services such as emergency rescue, veterinary care, spay and neuter programs, rehabilitation, responsible adoption, and community education aimed at preventing abandonment and neglect.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Any reduction, suspension, or instability in public funding programs and government-supported grants for animal shelters would seriously undermine their ability to operate effectively. Without stable funding, <strong className="text-foreground">many shelters face the risk of service reductions or closure in the near future</strong>, leading to increased numbers of homeless animals, greater strain on local communities, and higher public health and safety risks.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Through this petition, concerned citizens respectfully call on public authorities at the federal, state, and local levels to reaffirm and strengthen their commitment to supporting <strong className="text-foreground">recognized, licensed, and nonprofit animal shelters and rescue organizations</strong> that work daily in partnership with communities and public institutions.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">📌 Petition addressed to:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Members of the <strong className="text-foreground">United States Congress</strong></li>
                <li>• The <strong className="text-foreground">U.S. Department of Agriculture</strong></li>
                <li>• State Governors and State Legislatures</li>
                <li>• Local Governments and Municipal Authorities</li>
              </ul>
            </div>

            <SignatureCounter current={signatures} goal={SIGNATURE_GOAL} />

            {!hasSigned && (
              <WhatsAppButton onClick={handleWhatsAppClick} />
            )}

            {hasSigned && !justSigned && (
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-primary font-medium">✓ You have already signed this petition</p>
              </div>
            )}
          </div>

          {/* Right column - Why support */}
          <div className="lg:col-span-2 petition-card">
            <WhySupport />
          </div>
        </div>

        {/* Official petition text */}
        <div className="mb-8">
          <PetitionText />
        </div>

        {/* WhatsApp info */}
        <div className="mb-8">
          <WhatsAppInfo />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
