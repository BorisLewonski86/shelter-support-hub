import veterinarianCat from "@/assets/veterinarian-cat.jpg";
import veterinarianDog from "@/assets/veterinarian-dog.webp";
import shelterCatCage from "@/assets/shelter-cat-cage.png";

const WhySupport = () => {
  const reasons = [
    "Emergency rescue and veterinary care for animals in need",
    "Spay and neuter programs that reduce overpopulation",
    "Responsible adoption and rehabilitation initiatives",
    "Reduced strain on local governments and public services",
    "Healthier, safer communities for people and animals alike",
  ];

  return (
    <div className="space-y-5">
      <h3 className="section-title">Why Supporting Animal Shelters Matters</h3>
      
      <ul className="space-y-2">
        {reasons.map((reason, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="text-primary mt-1">•</span>
            <span>{reason}</span>
          </li>
        ))}
      </ul>

      <div className="quote-block">
        <p>"Protecting animals is a shared responsibility that benefits us all."</p>
        <p className="text-sm mt-1">— Shelter Staff</p>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <img 
          src={veterinarianDog} 
          alt="Dog at veterinarian" 
          className="w-full h-32 object-cover rounded-lg"
        />
        <img 
          src={veterinarianCat} 
          alt="Cat at veterinarian" 
          className="w-full h-32 object-cover rounded-lg"
        />
        <img 
          src={shelterCatCage} 
          alt="Cat in shelter" 
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default WhySupport;
