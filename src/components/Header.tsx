import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full py-6 flex justify-center">
      <div className="flex flex-col items-center">
        <img 
          src={logo} 
          alt="Animal Shelter Petition" 
          className="h-32 md:h-40 w-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
