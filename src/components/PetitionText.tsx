const PetitionText = () => {
  const callsToAction = [
    "preserve and expand federal, state, and local grant programs supporting animal shelters;",
    "ensure continued funding for spay and neuter, rescue, and prevention initiatives;",
    "support training, staffing, and resources for shelter professionals and volunteers;",
    "promote transparency, accountability, and responsible oversight in the use of public funds.",
  ];

  return (
    <div className="petition-card space-y-5">
      <h2 className="section-title">Official Petition Text</h2>
      
      <p className="text-muted-foreground font-medium">
        To the Members of the United States Congress,
        and to federal, state, and local public authorities —
      </p>

      <p className="text-muted-foreground leading-relaxed">
        The undersigned citizens respectfully request the <strong className="text-foreground">continuation, protection, and strengthening of existing public funding programs, grants, and support mechanisms</strong> that assist licensed nonprofit animal shelters and rescue organizations across the United States.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Animal shelters provide indispensable public services, including emergency animal rescue, veterinary treatment, spay and neuter initiatives, responsible adoption programs, and educational outreach that reduces animal abandonment and overpopulation. These services contribute directly to <strong className="text-foreground">public health, community safety, and responsible use of taxpayer resources</strong>.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        The stability of public support—through federal and state grant programs, municipal contracts, and community-based funding initiatives—is essential to ensuring that shelters can continue operating effectively and responsibly. Any reduction in such support would result in the suspension of critical services, increased numbers of stray and abandoned animals, and <strong className="text-foreground">additional burdens on local governments and taxpayers</strong>.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Therefore, we respectfully urge public authorities to take concrete action to:
      </p>

      <ul className="space-y-2 ml-4">
        {callsToAction.map((action, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="text-primary mt-0.5">•</span>
            <span>{action}</span>
          </li>
        ))}
      </ul>

      <p className="text-muted-foreground leading-relaxed">
        With respect and confidence in your commitment to animal welfare and the public interest,
      </p>

      <p className="font-semibold text-foreground">
        The undersigned citizens, volunteers, and supporters of animal shelters and rescue organizations
      </p>

      <p className="text-sm text-muted-foreground italic">
        Supporting documentation and accountability reports are available upon request.
      </p>
    </div>
  );
};

export default PetitionText;
