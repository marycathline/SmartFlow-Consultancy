import { useEffect } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { ServicesSection } from "./components/ServicesSection.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
{/* import { PricingSection } from "./components/PricingSection.jsx"; */}
import { BlogSection } from "./components/BlogSection.jsx";
import { TestimonialsSection } from "./components/TestimonialsSection.jsx";
import { ContactSection } from "./components/ContactSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { LiveChat } from "./components/LiveChat.jsx";
import { LanguageProvider } from "./components/LanguageContext.jsx";

export default function App() {
  useEffect(() => {
    // Initialize theme on app load
    const savedTheme = localStorage.getItem("theme") || "light";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme === "system" ? systemTheme : savedTheme;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);

    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <LanguageProvider>
      <div
        className="min-h-screen transition-colors duration-300"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          {/* <PricingSection /> */}
          <BlogSection />
          {/*<TestimonialsSection />*/}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Elements */}
        <LiveChat />
      </div>
    </LanguageProvider>
  );
}
