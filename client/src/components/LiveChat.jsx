import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "./ui/button.jsx";

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! 👋 I'm here to help you learn about our AI automation solutions. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Auto-responses based on common questions
  const autoResponses = {
    "pricing": "Our automation packages start at $297 for our Starter plan. We also offer Professional ($897) and Enterprise ($1,997) packages. Each includes different features and support levels. Would you like me to connect you with a specialist to discuss your specific needs?",
    "demo": "I'd love to show you how our AI automation works! You can book a free consultation call with our experts at https://calendly.com or I can connect you with a live agent right now. Which would you prefer?",
    "whatsapp": "Yes! WhatsApp automation is one of our most popular services. We can set up automated responses, customer inquiries handling, lead qualification, and more. This typically increases response rates by 300%+. Want to learn more?",
    "services": "We offer 8 main services: AI Workflow Automation, WhatsApp & Chatbot Automation, Email & CRM Automation, Website & App Development, Digital Marketing, Business Consultation, Power BI Dashboards, and Custom Integrations. Which interests you most?",
    "support": "We provide comprehensive support with all our packages! Starter includes 1-month support, Professional includes 3-month support, and Enterprise includes 6-month support plus a dedicated account manager. Plus, extended support is available for $100/month.",
    "default": "That's a great question! Let me connect you with one of our AI automation specialists who can give you detailed information. You can also book a free consultation call at https://calendly.com. Is there anything specific you'd like to know about our services?"
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Auto-respond after a delay
    setTimeout(() => {
      const messageText = inputMessage.toLowerCase();
      let responseText = autoResponses.default;

      // Check for keywords and provide relevant responses
      if (messageText.includes("price") || messageText.includes("cost") || messageText.includes("pricing")) {
        responseText = autoResponses.pricing;
      } else if (messageText.includes("demo") || messageText.includes("show") || messageText.includes("see")) {
        responseText = autoResponses.demo;
      } else if (messageText.includes("whatsapp") || messageText.includes("chat")) {
        responseText = autoResponses.whatsapp;
      } else if (messageText.includes("service") || messageText.includes("what") || messageText.includes("offer")) {
        responseText = autoResponses.services;
      } else if (messageText.includes("support") || messageText.includes("help") || messageText.includes("assistance")) {
        responseText = autoResponses.support;
      }

      const botResponse = {
        id: messages.length + 2,
        sender: "bot",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const quickResponses = [
    "See pricing",
    "Book demo",
    "WhatsApp automation",
    "Services overview"
  ];

  const handleQuickResponse = (response) => {
    setInputMessage(response);
    setTimeout(() => {
      document.getElementById('chat-submit').click();
    }, 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
            isOpen 
              ? "bg-red-500 hover:bg-red-600" 
              : "bg-blue-700 hover:bg-blue-800"
          } text-white`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-40 flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-700 text-white p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">SmartFlow AI Assistant</h3>
              <p className="text-sm text-blue-100">Usually responds instantly</p>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === "user" 
                    ? "bg-blue-700 text-white" 
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {message.sender === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div className={`max-w-[80%] ${
                  message.sender === "user" ? "text-right" : ""
                }`}>
                  <div className={`rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Responses */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="px-3 py-1 bg-gray-100 hover:bg-blue-700 hover:text-white text-gray-700 rounded-full text-xs transition-all duration-200"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-blue-700 focus:ring-blue-700 text-sm"
              />
              <button
                id="chat-submit"
                type="submit"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}