import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Button } from "./ui/button.jsx";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business with AI automation? Let's discuss how we can help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-100 border-0 rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border-gray-200 focus:border-blue-700 focus:ring-blue-700 rounded-lg"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border-gray-200 focus:border-blue-700 focus:ring-blue-700 rounded-lg"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-white border-gray-200 focus:border-blue-700 focus:ring-blue-700 rounded-lg resize-none"
                    placeholder="Tell us about your business and automation needs"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* CTA Section */}
            <Card className="bg-blue-700 text-white border-0 rounded-2xl shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">
                  Book a free consultation call with our AI automation experts
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  Book a Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900">Email</h4>
                  <p className="text-gray-600">contact@smartflowconsultancy.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900">Phone</h4>
                  <p className="text-gray-600">+254 720883861</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900">Location</h4>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}