{/* import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { Check, Star, TrendingUp, Users, PieChart, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";

export function PricingSection() {
  const { t } = useLanguage();
  
  // Main automation packages
  const automationPackages = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with automation",
      price: "$297",
      period: "one-time",
      popular: false,
      badge: "Best Value",
      features: [
        "WhatsApp Business automation setup",
        "Basic email automation (up to 1,000 contacts)",
        "Simple chatbot for FAQ responses",
        "1-month support and training",
        "Documentation and guides",
        "1 revision included",
      ],
      limitations: [
        "Single business location",
        "Basic integrations only",
        "Email support only",
      ],
      cta: "Get Started",
      color: "border-gray-200",
    },
    {
      name: "Professional",
      description: "Advanced automation for growing SMEs",
      price: "$897",
      period: "one-time",
      popular: true,
      badge: "Most Popular",
      features: [
        "Everything in Starter plan",
        "CRM integration (HubSpot, Salesforce)",
        "Advanced email workflows (up to 5,000 contacts)",
        "Custom chatbot with product recommendations",
        "Social media automation",
        "Inventory management integration",
        "3-month support and training",
        "Priority support",
        "3 revisions included",
      ],
      limitations: [
        "Up to 2 business locations",
        "Standard API integrations",
      ],
      cta: "Most Popular",
      color: "border-blue-700 ring-2 ring-blue-700/20",
    },
    {
      name: "Enterprise",
      description: "Complete automation solution for established businesses",
      price: "$1,997",
      period: "one-time",
      popular: false,
      badge: "Complete Solution",
      features: [
        "Everything in Professional plan",
        "Custom API integrations",
        "Multi-location automation management",
        "Advanced analytics and reporting",
        "Custom mobile app development",
        "E-commerce platform integration",
        "Unlimited email contacts",
        "AI-powered business insights",
        "6-month support and training",
        "Dedicated account manager",
        "Unlimited revisions",
        "24/7 priority support",
      ],
      limitations: [],
      cta: "Contact Sales",
      color: "border-gray-200",
    },
  ];

  // New standalone services
  const standaloneServices = [
    {
      name: "Digital Marketing",
      icon: <TrendingUp className="h-8 w-8 text-blue-700" />,
      description: "Comprehensive digital marketing strategy and execution",
      price: "$599",
      period: "monthly",
      popular: false,
      badge: "Growth Focused",
      features: [
        "SEO optimization and strategy",
        "Social media management (all platforms)",
        "Google Ads & Facebook Ads management",
        "Content creation and copywriting",
        "Email marketing campaigns",
        "Performance analytics and reporting",
        "Competitor analysis",
        "Monthly strategy reviews",
      ],
      cta: "Start Marketing",
      color: "border-green-200 bg-green-50/50",
    },
    {
      name: "Business Consultation",
      icon: <Users className="h-8 w-8 text-blue-700" />,
      description: "Strategic consulting to optimize and grow your business",
      price: "$150",
      period: "per hour",
      popular: true,
      badge: "Expert Guidance",
      features: [
        "Business process optimization",
        "Growth strategy development",
        "Financial planning and analysis",
        "Operational efficiency improvements",
        "Team training and development",
        "Performance metrics setup",
        "Industry best practices implementation",
        "Quarterly business reviews",
      ],
      cta: "Book Consultation",
      color: "border-blue-700 ring-2 ring-blue-700/20 bg-blue-50/30",
    },
    {
      name: "Power BI Dashboard",
      icon: <PieChart className="h-8 w-8 text-blue-700" />,
      description: "Custom sales and business intelligence dashboards",
      price: "$799",
      period: "one-time",
      popular: false,
      badge: "Data Analytics",
      features: [
        "Custom Power BI dashboard design",
        "Sales performance visualization",
        "Real-time data integration",
        "KPI tracking and monitoring",
        "Automated report generation",
        "Mobile-responsive design",
        "User training and documentation",
        "3 months of updates included",
      ],
      cta: "Get Dashboard",
      color: "border-purple-200 bg-purple-50/50",
    },
  ];

  const addOns = [
    {
      name: "Additional Business Location",
      price: "$150",
      description: "Extend automation to another branch or location",
      badge: "Add-on"
    },
    {
      name: "Custom Integration",
      price: "$300",
      description: "Connect with specialized software or legacy systems",
      badge: "Technical"
    },
    {
      name: "Extended Support",
      price: "$100/month",
      description: "Ongoing monthly support and maintenance",
      badge: "Support"
    },
    {
      name: "Training Workshop",
      price: "$250",
      description: "2-day intensive training for your team",
      badge: "Training"
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
       {/* } <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive automation packages or individual services to transform your business operations
          </p>
          <div className="mt-6">
            <Badge className="bg-blue-700 text-white px-4 py-2 text-sm">
              ✨ Transparent pricing • No hidden fees • Flexible payment options
            </Badge>
          </div>
        </div>

        {/* Automation Packages - 3 Cards Horizontal */}
       {/*  <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl text-gray-900 mb-2">Complete Automation Packages</h3>
            <p className="text-gray-600">End-to-end automation solutions for your business</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {automationPackages.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2 ${plan.color} overflow-hidden group flex-1 min-w-[300px] max-w-[380px] ${
                  plan.popular ? "scale-105" : ""
                }`}
              >
                {/* Badge */}
                {/* <div className="absolute top-4 right-4 z-10">
                  <Badge 
                    variant="secondary" 
                    className="bg-blue-700 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {plan.badge}
                  </Badge>
                </div>

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6 pt-8">
                  <CardTitle className="text-2xl text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-6">
                    {plan.description}
                  </CardDescription>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-700">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  {/* Features 
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limitations (if any) 
                  {plan.limitations.length > 0 && (
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="text-gray-500 text-sm">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button 
                  <Button
                    className={`w-full py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? "bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 hover:bg-blue-700 text-gray-800 hover:text-white border border-gray-200"
                    }`}
                    onClick={() => window.open('https://calendly.com', '_blank')}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>

                {/* Hover effect overlay 
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>

        {/* Standalone Services - 3 Cards Horizontal 
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl text-gray-900 mb-2">Individual Services</h3>
            <p className="text-gray-600">Specialized services to complement your business needs</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {standaloneServices.map((service, index) => (
              <Card
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2 ${service.color} overflow-hidden group flex-1 min-w-[300px] max-w-[380px] ${
                  service.popular ? "scale-105" : ""
                }`}
              >
                {/* Badge 
                <div className="absolute top-4 right-4 z-10">
                  <Badge 
                    variant="secondary" 
                    className="bg-blue-700 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {service.badge}
                  </Badge>
                </div>

                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-700">
                      {service.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {service.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  {/* Features 
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900">What's included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button 
                  <Button
                    className={`w-full py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      service.popular
                        ? "bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 hover:bg-blue-700 text-gray-800 hover:text-white border border-gray-200"
                    }`}
                    onClick={() => window.open('https://calendly.com', '_blank')}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>

                {/* Hover effect overlay 
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>

        {/* Add-ons Section 
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-gray-900 mb-4">
              Optional Add-ons
            </h3>
            <p className="text-gray-600">
              Enhance your automation package with these additional services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="border border-gray-200 hover:border-blue-700 transition-all duration-300 rounded-xl transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl group overflow-hidden relative">
                {/* Badge 
                <div className="absolute top-3 right-3 z-10">
                  <Badge 
                    variant="secondary" 
                    className="bg-blue-700 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {addon.badge}
                  </Badge>
                </div>

                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {addon.name}
                  </h4>
                  <p className="text-2xl font-bold text-blue-700 mb-3">
                    {addon.price}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {addon.description}
                  </p>
                </CardContent>

                {/* Hover effect overlay 
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA 
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="mb-6 text-blue-100">
              Book a free consultation to discuss your specific needs and get a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}  */}