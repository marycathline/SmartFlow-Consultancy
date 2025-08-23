import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback.jsx";
import { Target, Eye, Users, Heart, Zap, Shield, Globe, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";

export function AboutSection() {
  const coreElements = [
    {
      icon: <Target className="h-8 w-8 text-blue-700" />,
      title: "Our Mission",
      description: "To democratize AI automation technology and make it accessible to small and medium enterprises across Africa, enabling them to compete globally while solving local challenges.",
      badge: "Purpose-Driven"
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-700" />,
      title: "Our Vision",
      description: "To become the leading AI automation partner for businesses, fostering a digitally transformed continent where technology drives sustainable economic growth.",
      badge: "Future-Focused"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-700" />,
      title: "Our Approach",
      description: "We believe in personalized solutions, local understanding, and affordable technology that grows with your business. Every automation we create is tailored to your unique needs and challenges.",
      badge: "Client-Centered"
    },
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-blue-700" />,
      title: "Customer-Centric",
      description: "Your success is our priority. We listen, understand, and deliver solutions that truly meet your needs.",
      badge: "Core Value"
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-700" />,
      title: "Innovation-Driven",
      description: "We constantly explore cutting-edge technologies to bring you the most effective automation solutions.",
      badge: "Tech-Forward"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-700" />,
      title: "Reliability & Trust",
      description: "We build lasting partnerships through consistent delivery, transparency, and dependable support.",
      badge: "Trustworthy"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-700" />,
      title: "Local Understanding",
      description: "Deep knowledge of global markets, cultures, and business environments guides our solutions.",
      badge: "Africa-Focused"
    },
    {
      icon: <Award className="h-6 w-6 text-blue-700" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from development to customer service.",
      badge: "Quality-Driven"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-700" />,
      title: "Continuous Learning",
      description: "We evolve with technology and market needs, ensuring our solutions remain relevant and effective.",
      badge: "Growth-Minded"
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            About SmartFlow Consultancy
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are dedicated to empowering businesses with cutting-edge AI automation 
            solutions that drive growth, efficiency, and innovation across the continent.
          </p>
        </div>

        {/* Mission, Vision, Approach - 3 Cards Horizontal */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {coreElements.map((element, index) => (
            <Card key={index} className="bg-gray-50 border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden relative flex-1 min-w-[280px] max-w-[350px]">
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge 
                  variant="secondary" 
                  className="bg-blue-700 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {element.badge}
                </Badge>
              </div>

              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {element.icon}
                </div>
                <h3 className="text-xl text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {element.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {element.description}
                </p>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Company Story with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl text-gray-900">
              Transforming Global Business Landscapes
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to bridge the technology gap in businesses, SmartFlow Consultancy
                has been at the forefront of making advanced automation accessible to businesses of all sizes.
              </p>
              <p>
                Our team of experienced developers, consultants, and digital marketing experts understand 
                the unique challenges facing businesses. From infrastructure limitations to resource 
                constraints, we've designed our solutions to work within these realities while delivering 
                world-class results.
              </p>
              <p>
                With over 500 successful implementations across 15 countries, we've helped businesses 
                increase efficiency by up to 75% and reduce operational costs significantly.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-1">15+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579389083175-247ef703006f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTUwNzI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Team Collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-transparent"></div>
              
              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4">
                  <p className="text-sm text-gray-800 font-medium mb-1">
                    "Working with SmartFlow has revolutionized our operations"
                  </p>
                  <p className="text-xs text-gray-600">
                    - David M., Managing Director, Kenya
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gray-100 rounded-full shadow-lg opacity-80"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-700 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>

        {/* Company Values */}
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients, 
              partners, and communities across the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden relative">
                {/* Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <Badge 
                    variant="secondary" 
                    className="bg-blue-700 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {value.badge}
                  </Badge>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that have already transformed their operations with our AI automation solutions.
            </p>
            <button
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}