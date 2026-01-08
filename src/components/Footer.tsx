const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 text-center border-t border-border">
      <p className="text-sm text-muted-foreground">
        © {currentYear} Protect Animal Shelters · All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
