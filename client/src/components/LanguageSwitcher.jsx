import React from "react";
import { useLanguage } from "./LanguageContext.jsx";
import { Button } from "./ui/button.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu.jsx";
import { Globe, ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage, languages } = useLanguage();

  const currentLangInfo = languages.find(
    (lang) => lang.code === currentLanguage
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 transition-colors duration-300"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline">
            {currentLangInfo?.flag} {currentLangInfo?.name}
          </span>
          <span className="md:hidden">{currentLangInfo?.flag}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLanguage(language.code)}
            className={`flex items-center space-x-3 cursor-pointer ${
              currentLanguage === language.code
                ? "bg-blue-50 text-blue-700"
                : ""
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
