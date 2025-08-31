import React from "react";
import { Card, CardContent } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.jsx";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Amara Okafor",
      position: "CEO",
      company: "TechHub Lagos",
      location: "Lagos, Nigeria",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbiUyMENFT3xlbnwxfHx8fDE3NTUwNzI5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      testimonial: "SmartFlow transformed our customer service operations completely. Our WhatsApp automation now handles 80% of customer inquiries automatically, and our response time went from hours to seconds. Revenue increased by 150% in just 6 months!",
      results: "150% revenue increase",
      badge: "Featured Success"
    },
    {
      id: 2,
      name: "David Mbeki",
      position: "Founder",
      company: "Mbeki Fashion",
      location: "Johannesburg, South Africa", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVzaW5lc3MlMjBtYW4lMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzU1MDcyOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      testimonial: "The email automation and CRM integration saved us 25 hours per week. We can now focus on designing new collections instead of managing customer data. The ROI was visible within the first month of implementation.",
      results: "25 hours saved weekly",
      badge: "Efficiency Master"
    },
    {
      id: 3,
      name: "Grace Kwame",
      position: "Managing Director",
      company: "Kwame Logistics",
      location: "Accra, Ghana",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbiUyMGxlYWRlcnxlbnwxfHx8fDE3NTUwNzI5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      testimonial: "SmartFlow's Power BI dashboard gives us real-time insights into our logistics operations. We can now predict delivery delays, optimize routes, and provide better customer updates. Our customer satisfaction score improved by 40%.",
      results: "40% satisfaction increase",
      badge: "Data Driven"
    },
    {
      id: 4,
      name: "Samuel Ochieng",
      position: "Owner",
      company: "Ochieng Agribusiness",
      location: "Nairobi, Kenya",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZmFybWVyJTIwYWdyaWJ1c2luZXNzfGVufDF8fHx8MTc1NTA3MjkyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      testimonial: "The digital marketing automation helped us reach new markets across East Africa. Our online sales grew from 20% to 70% of total revenue. The team's understanding of local markets made all the difference.",
      results: "250% online growth",
      badge: "Market Expansion"
    },
    {
      id: 5,
      name: "Fatima Al-Hassan",
      position: "Founder",
      company: "Al-Hassan Trading",
      location: "Kano, Nigeria",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbiUyMHRyYWRlcnxlbnwxfHx8fDE3NTUwNzI5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      testimonial: "Business consultation and process automation helped us scale from 2 locations to 8 across Northern Nigeria. The workflow automation handles inventory, orders, and suppliers seamlessly. Couldn't have grown this fast without SmartFlow.",
      results: "4x business expansion",
      badge: "Rapid Scaling"
    },
    {
      id: 6,
      name: "Jean-Baptiste Munyangabe",
      position: "Director",
      company: "Rwanda Coffee Co-op",
      location: "Kigali, Rwanda",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29mZmVlJTIwZmFybWVyJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU1MDcyOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      testimonial: "The custom integrations connected our farming data with international buyers directly. Export documentation that took weeks now takes hours. We've increased our export volume by 180% and reached premium markets in Europe.",
      results: "180% export growth",
      badge: "Global Reach"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            We give you visibility and scale your business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how businesses are transforming their operations and accelerating growth 
            with our AI automation solutions.
          </p>
          <div className="mt-6 flex justify-center">
            <Badge className="bg-blue-700 text-white px-4 py-2 text-sm">
              ⭐ 4.9/5 Average Rating • 98% Customer Satisfaction
            </Badge>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-50 border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden relative">
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge 
                  variant="secondary" 
                  className="bg-blue-700 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {testimonial.badge}
                </Badge>
              </div>

              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Quote className="h-5 w-5 text-blue-700" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Results Badge */}
                <div className="mb-6">
                  <Badge className="bg-green-100 text-green-800 px-3 py-1 text-sm">
                    🎯 {testimonial.results}
                  </Badge>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                    <p className="text-xs text-gray-500">
                      📍 {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl mb-8">Join Hundreds of Successful Businesses</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100 text-sm">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">75%</div>
              <div className="text-blue-100 text-sm">Avg. Efficiency Gain</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm">Satisfaction Rate</div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
}