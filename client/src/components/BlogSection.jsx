import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { Calendar, User, ArrowRight, TrendingUp, Bot, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.jsx";

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways AI Automation Can Transform Your African SME",
      excerpt: "Discover practical ways artificial intelligence can streamline operations, reduce costs, and boost growth for small and medium enterprises across Africa.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGF1dG9tYXRpb24lMjBidXNpbmVzcyUyMEFmcmljYXxlbnwxfHx8fDE3NTUwNzI5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "SmartFlow Team",
      date: "Dec 15, 2024",
      category: "AI Automation",
      readTime: "5 min read",
      badge: "Featured",
      icon: <Bot className="h-5 w-5" />
    },
    {
      id: 2,
      title: "WhatsApp Business Automation: Complete Guide for African Businesses",
      excerpt: "Learn how to set up automated WhatsApp responses, handle customer inquiries, and boost sales with WhatsApp Business API automation.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXaGF0c2FwcCUyMGJ1c2luZXNzJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NTUwNzI5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "David Okonkwo",
      date: "Dec 12, 2024",
      category: "WhatsApp Automation",
      readTime: "8 min read",
      badge: "Popular",
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Digital Marketing ROI: How Automation Increases Revenue by 150%",
      excerpt: "Case study showing how our digital marketing automation helped a Lagos-based e-commerce store increase revenue by 150% in just 6 months.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwUk9JJTIwZ3Jvd3RofGVufDF8fHx8MTc1NTA3MjkyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      author: "Amara Johnson",
      date: "Dec 10, 2024",
      category: "Digital Marketing",
      readTime: "6 min read",
      badge: "Case Study",
      icon: <TrendingUp className="h-5 w-5" />
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Latest Insights & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in AI automation, success stories, and practical guides 
            to help you grow your African business.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-0 overflow-hidden group">
              {/* Image */}
              <div className="relative">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-700 text-white px-3 py-1 text-xs">
                    {post.badge}
                  </Badge>
                </div>

                {/* Category with Icon */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-full p-2">
                    {post.icon}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <CardTitle className="text-xl leading-tight group-hover:text-blue-700 transition-colors duration-300">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-6">
                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </CardDescription>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-700 hover:text-white hover:bg-blue-700 p-2 rounded-full transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl text-gray-900 mb-4">Stay Informed</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get weekly insights on AI automation, 
            business growth strategies, and success stories from African entrepreneurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-700 focus:ring-blue-700 outline-none"
            />
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-3">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}