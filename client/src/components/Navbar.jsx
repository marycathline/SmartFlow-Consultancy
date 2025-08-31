import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { useLanguage } from "./LanguageContext.jsx";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [langOpen, setLangOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["home", "services", "about", "blog", "testimonials", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section === "home" ? "hero" : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId === "home" ? "hero" : sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "services", label: t("nav.services") },
    { id: "about", label: t("nav.about") },
    { id: "blog", label: t("nav.blog") },
     // { id: "testimonials", label: "Testimonials" }, // Commented out for now
    { id: "contact", label: t("nav.contact") },
    { id: "book", label: "Book Now", isButton: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-20">

        {/* Mobile Top Bar */}
        <div className="flex w-full md:hidden justify-between items-center">
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-2 py-1 text-sm font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-md"
            >
              EN
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {/* Mobile Logo Centered */}
          <div className="flex justify-center py-5">
            <img src="/logo2.png" alt="Logo" className="w-32 object-contain" />
          </div>

        </div>

        {/* Desktop Logo */}
        <div className="hidden md:flex flex-shrink-0">
          <img src="/logo2.png" alt="Logo" className="w-auto object-contain sm:h-16 lg:h-18" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.isButton ? (
              <Button
                key={item.id}
                onClick={() => window.open("https://calendly.com", "_blank")}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                {item.label}
              </Button>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-md"
            >
              EN
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">EN</button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">FR</button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">SW</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-lg flex flex-col items-center py-6 space-y-2">
          {navItems.map((item) =>
            item.isButton ? (
              <Button
                key={item.id}
                onClick={() => {
                  window.open("https://calendly.com", "_blank");
                  setIsMenuOpen(false);
                }}
                className="w-3/4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-md"
              >
                {item.label}
              </Button>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-3/4 text-center px-4 py-3 text-base font-semibold text-gray-900 dark:text-white"
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}
