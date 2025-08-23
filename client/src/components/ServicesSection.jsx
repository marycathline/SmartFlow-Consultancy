import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { 
  Bot, 
  MessageSquare, 
  Mail, 
  Smartphone, 
  TrendingUp, 
  Users, 
  BarChart, 
  Settings,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { useLanguage } from "./LanguageContext.jsx";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      icon: <Bot className="h-8 w-8" />,
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent automation that learns and adapts to your operations.",
      features: ["Process Optimization", "Task Automation", "Smart Routing", "Performance Analytics"],
      price: "From $297",
      popular: false,
      color: "from-blue-500 to-blue-600",
      darkColor: "dark:from-blue-400 dark:to-blue-500"
    },
    {
      id: 2,
      icon: <MessageSquare className="h-8 w-8" />,
      title: "WhatsApp & Chatbot Automation",
      description: "Engage customers 24/7 with intelligent WhatsApp automation and AI-powered chatbots.",
      features: ["24/7 Customer Support", "Lead Qualification", "Order Processing", "Multi-language Support"],
      price: "From $197",
      popular: true,
      color: "from-green-500 to-green-600",
      darkColor: "dark:from-green-400 dark:to-green-500"
    },
    {
      id: 3,
      icon: <Mail className="h-8 w-8" />,
      title: "Email & CRM Automation",
      description: "Nurture leads and manage customer relationships with automated email sequences and CRM integration.",
      features: ["Email Campaigns", "Lead Nurturing", "CRM Integration", "Segmentation"],
      price: "From $247",
      popular: false,
      color: "from-purple-500 to-purple-600",
      darkColor: "dark:from-purple-400 dark:to-purple-500"
    },
    {
      id: 4,
      icon: <Smartphone className="h-8 w-8" />,
      title: "Website & App Development",
      description: "Build responsive websites and mobile apps that integrate perfectly with your automation workflows.",
      features: ["Responsive Design", "Mobile Apps", "API Integration", "Custom Features"],
      price: "From $897",
      popular: false,
      color: "from-orange-500 to-orange-600",
      darkColor: "dark:from-orange-400 dark:to-orange-500"
    },
    {
      id: 5,
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing Automation",
      description: "Scale your marketing efforts with automated campaigns across social media, search, and email.",
      features: ["Social Media Management", "Ad Campaign Optimization", "SEO Automation", "Analytics"],
      price: "$599/month",
      popular: false,
      color: "from-pink-500 to-pink-600",
      darkColor: "dark:from-pink-400 dark:to-pink-500"
    },
    {
      id: 6,
      icon: <Users className="h-8 w-8" />,
      title: "Business Consultation",
      description: "Strategic guidance to optimize your business processes and maximize automation ROI.",
      features: ["Strategy Development", "Process Analysis", "Training Programs", "Ongoing Support"],
      price: "$150/hour",
      popular: false,
      color: "from-indigo-500 to-indigo-600",
      darkColor: "dark:from-indigo-400 dark:to-indigo-500"
    },
    {
      id: 7,
      icon: <BarChart className="h-8 w-8" />,
      title: "Power BI Sales Dashboards",
      description: "Visualize your business data with custom Power BI dashboards and real-time analytics.",
      features: ["Real-time Analytics", "Custom Dashboards", "Data Integration", "Mobile Access"],
      price: "From $799",
      popular: false,
      color: "from-yellow-500 to-yellow-600",
      darkColor: "dark:from-yellow-400 dark:to-yellow-500"
    },
    {
      id: 8,
      icon: <Settings className="h-8 w-8" />,
      title: "Custom API Integrations",
      description: "Connect your existing systems with custom APIs and third-party integrations for seamless operations.",
      features: ["System Integration", "API Development", "Data Synchronization", "Legacy System Support"],
      price: "From $497",
      popular: false,
      color: "from-gray-500 to-gray-600",
      darkColor: "dark:from-gray-400 dark:to-gray-500"
    }
  ];

  return (
    <section id="services" className="responsive-py bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-mobile">
        {/* Section Header */}
        <div className="text-center responsive-margin">
          <div className="flex justify-center mb-6">
            <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-4 py-2 text-sm font-medium rounded-full">
              🛠️ Comprehensive AI Solutions
            </Badge>
          </div>
          
          <h2 className="text-responsive-heading text-gray-900 dark:text-white mb-6">
            {t('services.title')}
          </h2>
          
          <p className="text-responsive-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Transform your African SME with our comprehensive suite of AI-powered automation services. 
            From WhatsApp bots to custom dashboards, we've got everything you need to scale efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-responsive-cards">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className={`group relative bg-white dark:bg-gray-800 border-0 rounded-responsive shadow-responsive hover:shadow-xl dark:hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden ${
                service.popular ? 'ring-2 ring-blue-500 dark:ring-blue-400 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full shadow-lg">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} ${service.darkColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <CardHeader className="pb-4 pt-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} ${service.darkColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white">
                    {service.icon}
                  </span>
                </div>

                <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
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

                {/* Pricing */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{service.price}</span>
                    {service.price.includes('month') && (
                      <span className="text-gray-500 dark:text-gray-400 ml-1">/mo</span>
                    )}
                  </div>
                  
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

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-responsive opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-responsive bg-gradient-to-r ${service.color} ${service.darkColor} opacity-10 blur-xl`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-responsive p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-responsive-subheading mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-responsive-small text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
              Join 500+ African businesses that have already transformed their operations with our AI automation solutions.
            </p>
            
            <div className="flex-responsive-center">
              <Button
                size="lg"
                onClick={() => window.open('https://calendly.com', '_blank')}
                className="btn-responsive bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-700 dark:hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-responsive border-white/30 text-blue-600 hover:bg-white/10 dark:border-gray-300 dark:hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-blue-200">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}