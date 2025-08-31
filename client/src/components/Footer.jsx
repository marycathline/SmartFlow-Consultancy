import React from "react";
import { Separator } from "./ui/separator.jsx";
import { Button } from "./ui/button.jsx";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  Heart,
} from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";

export function Footer() {
  const { t } = useLanguage(); // Language hook (for multi-language support)

  // Quick links for smooth scrolling
  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  // Services list
  const services = [
    "AI Workflow Automation",
    "WhatsApp Automation",
    "Email & CRM Systems",
    "Digital Marketing",
    "Tech Solutions Consultation",
    "Power BI Dashboards",
  ];

  // Social media links
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-800 dark:bg-gray-200 text-white transition-colors duration-300">
      <div className="container-mobile responsive-py">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* --- Company Info --- */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <img src="/logo.png" alt="SmartFlow Logo" className="w-auto object-contain" />
              <p className="text-gray-300 mt-2 text-sm">
                Transforming businesses through AI automation and smart tech solutions.
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with AI automation and smart tech solutions that drive growth, efficiency, and innovation across the continent.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">contact@smartflowconsultancy.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+254 720883861</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Services --- */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-start space-x-2">
                  <ArrowRight className="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Newsletter & Social Links --- */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for the latest AI automation insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-blue-800 dark:bg-white border border-white dark:border-gray-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-white placeholder-gray-400 transition-colors duration-200"
                />
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h5 className="font-medium">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-blue-800 dark:bg-blue-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white dark:bg-gray-700" />

      {/* --- Bottom Footer --- */}
      <div className="container-mobile py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>© 2024 SmartFlow Consultancy. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by SmartFlow Consultancy</span>
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            <button className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Cookie Policy</button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-white dark:border-gray-700 text-center">
          <p className="text-xs text-gray-400 max-w-4xl mx-auto">
            SmartFlow Consultancy is a registered tech consultancy specializing in AI-powered workflow solutions for businesses. We are committed to driving digital transformation and economic growth through innovative technology solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
