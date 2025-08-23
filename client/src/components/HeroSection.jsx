import React from "react";
import { ArrowRight, Star, Zap, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";
import { ImageWithFallback } from "./figma/ImageWithFallback.jsx";
import { Button } from "./ui/button.jsx";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-gray-100/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] py-12">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  Trusted by 500+ business across the globe
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block">
                  AI-Powered Solutions
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                From automation to analytics, digital marketing to business
                consultation - we provide comprehensive AI solutions to
                streamline operations, boost sales, and accelerate growth for
                businesses across the globe.
              </p>
            </div>

            {/* Key Services Highlight */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">AI Automation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Digital Marketing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Business Consulting</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("https://calendly.com", "_blank")}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg transition-all duration-300"
                onClick={scrollToServices}
              >
                Explore Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGF1dG9tYXRpb24lMjBkYXNoYm9hcmQlMjBidXNpbmVzcyUyMEFmcmljYXxlbnwxfHx8fDE3NTUwNzI5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Automation Dashboard"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>

              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-lg p-4">
                  <p className="text-sm text-gray-800 font-medium">
                    "SmartFlow AI increased our efficiency by 75% and reduced
                    operational costs significantly."
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    - Sarah K., CEO, Lagos Tech Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-200 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
