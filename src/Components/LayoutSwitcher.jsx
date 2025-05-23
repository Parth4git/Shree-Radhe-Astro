import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="absolute top-4 right-4 space-x-2">
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("hi")}>हिं</button>
    </div>
  );
};

export default LanguageSwitcher;
