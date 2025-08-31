import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { Smartphone, Bot, MessageSquare, BarChart, Settings, ArrowRight, CheckCircle } from "lucide-react";

export function ServicesSection() {

  const services = [
    {
      id: 1,
      icon: <Smartphone className="h-8 w-8" />,
      title: "Website & App Development",
      description: "We design and build modern websites and mobile apps tailored to your business needs, giving you a professional online presence and seamless customer experience.",
      features: ["Responsive Design", "Mobile & Web Apps", "SEO Optimization", "Custom Features", "Maintenance & Updates"],
      popular: false,
      color: "from-orange-500 to-orange-600",
      darkColor: "dark:from-orange-400 dark:to-orange-500"
    },
    {
      id: 2,
      icon: <Bot className="h-8 w-8" />,
      title: "AI-Powered Automations",
      description: "Save time and work smarter with AI tools like email automation, chatbots, and smart integrations that keep your business running even when you’re offline.",
      features: ["Email Automation", "Chatbots & Messaging", "Workflow Optimization", "Task Automation", "Analytics & Reporting"],
      popular: true,
      color: "from-blue-500 to-blue-600",
      darkColor: "dark:from-blue-400 dark:to-blue-500"
    },
    {
      id: 3,
      icon: <Settings className="h-8 w-8" />,
      title: "WhatsApp & API Integrations",
      description: "Seamlessly connect your business systems and engage customers through WhatsApp automation and custom API integrations, streamlining communication, order management, and support.",
      features: ["WhatsApp Business Automation", "Custom API Integrations", "Automated Messaging", "Order Management", "Customer Support", "Multi-language Support"],
      popular: false,
      color: "from-green-500 to-green-600",
      darkColor: "dark:from-green-400 dark:to-green-500"
    },
    {
      id: 4,
      icon: <BarChart className="h-8 w-8" />,
      title: "Data & Business Intelligence Dashboards",
      description: "Turn data into decisions with Power BI dashboards that give you real-time insights, helping you track performance and grow with confidence.",
      features: ["Real-Time Analytics", "Custom Dashboards", "Performance Tracking", "Data-Driven Decisions"],
      popular: false,
      color: "from-yellow-500 to-yellow-600",
      darkColor: "dark:from-yellow-400 dark:to-yellow-500"
    },
  ];

  return (
    <section id="services" className="responsive-py bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-mobile">
        {/* Section Header */}
        <div className="text-center responsive-margin">
  <div className="flex justify-center mb-6">
    <h2 className="text-responsive-heading font-bold text-4xl md:text-5xl 
                   bg-gradient-to-r from-blue-600 to-blue-700 
                   bg-clip-text text-transparent mb-6">
      What We Do
    </h2>
  </div>


          
         
          
         {/*} <p className="text-responsive-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
          From Website & App Development to AI-Powered Automations, WhatsApp & API Integrations,
           and Data & Business Intelligence Dashboards, we deliver seamless 
          technology solutions designed to streamline operations, enhance customer engagement,
           and drive growth. customers effectively, and make informed decisions.
          </p>*/}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className={`group relative bg-white dark:bg-gray-800 border-0 rounded-responsive shadow-responsive hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden ${service.popular ? 'ring-2 ring-blue-500 dark:ring-blue-400 scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} ${service.darkColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <CardHeader className="pb-4 pt-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} ${service.darkColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white">{service.icon}</span>
                </div>

                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 rounded-full p-3 transition-all duration-300 group/btn"
                    onClick={() => window.open('https://calendly.com', '_blank')}
                  >
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    <span className="sr-only">Learn more about {service.title}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
