import { useState, useEffect } from "react"

const Faq = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredFAQs, setFilteredFAQs] = useState([])

  const faqs = [
    {
      category: "General",
      question: "What services do you offer?",
      answer:
        "We provide comprehensive financial services including tax planning and preparation, business consulting, investment advisory, retirement planning, estate planning, bookkeeping services, and financial audits. Our team works with both individuals and businesses to create customized financial strategies that align with your specific goals and circumstances.",
      tags: ["services", "tax", "consulting", "investment", "retirement"],
    },
    {
      category: "Business",
      question: "Do you work with small businesses?",
      answer:
        "We specialize in helping small and medium-sized businesses with their financial needs. From startup financial planning to established business optimization, we provide bookkeeping, payroll services, tax planning, business advisory services, cash flow management, and growth strategies tailored to your business size and industry.",
      tags: ["business", "small business", "startup", "bookkeeping", "payroll"],
    },
    {
      category: "Communication",
      question: "How often will we meet or communicate?",
      answer:
        "Communication frequency depends on your needs and service level. Most clients have quarterly reviews, with additional meetings as needed during tax season or major financial decisions. We're always available for urgent questions and provide 24/7 support through our client portal. You'll have direct access to your dedicated advisor via phone, email, or secure messaging.",
      tags: ["communication", "meetings", "support", "contact"],
    },
    {
      category: "Expertise",
      question: "What makes you different from other financial advisors?",
      answer:
        "Our personalized approach sets us apart. We take time to understand your unique situation and goals, providing customized strategies rather than one-size-fits-all solutions. With over 20 years of experience, CPA and CFP certifications, and a 98% client satisfaction rate, we deliver proven results. We also offer comprehensive services under one roof, eliminating the need for multiple advisors.",
      tags: ["expertise", "experience", "certifications", "personalized"],
    },
    {
      category: "Getting Started",
      question: "How do I get started?",
      answer:
        "Getting started is simple! Schedule a free, no-obligation consultation through our website or by calling us directly. During this 30-minute meeting, we'll discuss your financial goals, current situation, and challenges. We'll explain how we can help and provide a customized proposal. If you decide to work with us, we'll begin with a comprehensive financial assessment.",
      tags: ["getting started", "consultation", "onboarding", "process"],
    },
    {
      category: "Security",
      question: "Is my financial information secure?",
      answer:
        "Yes, absolutely. We use bank-level security measures including 256-bit SSL encryption, secure cloud storage, and multi-factor authentication. All data is stored in FINRA-compliant systems and accessed only by authorized team members. We're bound by strict confidentiality agreements and professional ethics standards. Your privacy and security are our top priorities.",
      tags: ["security", "privacy", "encryption", "confidential"],
    },
    {
      category: "Tax Services",
      question: "Do you help with tax preparation and planning?",
      answer:
        "Yes, tax services are one of our core specialties. We provide both tax preparation for individuals and businesses, as well as strategic tax planning throughout the year. Our proactive approach helps minimize your tax liability, maximize deductions, identify tax-saving opportunities, and ensure compliance. We stay current with all tax law changes to optimize your strategy.",
      tags: ["tax", "preparation", "planning", "deductions", "compliance"],
    },
    {
      category: "Investment",
      question: "Do you provide investment advice?",
      answer:
        "Yes, we offer comprehensive investment advisory services. Our certified financial planners help you develop investment strategies aligned with your risk tolerance, time horizon, and financial goals. We provide portfolio management, asset allocation guidance, retirement planning, and regular performance reviews. We work with leading investment platforms to offer diverse options.",
      tags: ["investment", "portfolio", "retirement", "financial planning"],
    },
    {
      category: "Emergency",
      question: "What if I have an urgent financial question?",
      answer:
        "We understand that financial emergencies don't follow business hours. Our clients have access to our emergency hotline for urgent matters. For immediate assistance, you can reach us through our 24/7 client portal, emergency phone line, or secure messaging system. We typically respond to urgent matters within 2-4 hours, even on weekends.",
      tags: ["emergency", "urgent", "24/7", "hotline", "immediate"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("enhanced-faq-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    const filtered = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    setFilteredFAQs(filtered)
  }, [searchTerm])

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  const categories = [...new Set(faqs.map((faq) => faq.category))]

  return (
    <section id="enhanced-faq-section" className="pt-10 bg-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Geometric Accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/20 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/20 opacity-30"></div>
      </div>

      {/* Subtle Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 3 === 0 ? "rgba(240, 180, 41, 0.6)" : "rgba(0, 0, 0, 0.2)",
              boxShadow: i % 3 === 0 ? "0 0 8px rgba(240, 180, 41, 0.4)" : "0 0 6px rgba(0, 0, 0, 0.1)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `floatParticle ${Math.random() * 15 + 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-4 py-2 bg-white backdrop-blur-md border border-accent/30 text-primary font-medium text-sm mb-6 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
              boxShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
            }}
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Frequently Asked Questions
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              background: "linear-gradient(135deg, #000000 0%, #f0b429 50%, #000000 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(240, 180, 41, 0.2)",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Got <span className="text-primary">Questions?</span> We Have <span className="text-accent">Answers</span>
          </h2>

          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Find answers to the most common questions about our financial services. Use the search below to find
            specific information.
          </p>

          {/* Futuristic Search Bar */}
          <div
            className={`max-w-2xl mx-auto transform transition-all duration-1000 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 bg-gradient-to-r from-gray-50 to-white border border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                  boxShadow: "0 0 20px rgba(240, 180, 41, 0.1)",
                }}
              />
              <div
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-accent/10"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                }}
              >
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Futuristic Category Filter */}
          <div
            className={`flex flex-wrap justify-center gap-3 mt-6 transform transition-all duration-1000 delay-800 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <button
              onClick={() => setSearchTerm("")}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                searchTerm === ""
                  ? "bg-accent text-primary"
                  : "bg-gradient-to-r from-gray-100 to-white text-gray-600 hover:bg-accent/10 hover:text-accent border border-accent/20"
              }`}
              style={{
                clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
                boxShadow: searchTerm === "" ? "0 0 15px rgba(240, 180, 41, 0.3)" : "0 0 10px rgba(240, 180, 41, 0.1)",
              }}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchTerm(category.toLowerCase())}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  searchTerm.toLowerCase() === category.toLowerCase()
                    ? "bg-accent text-primary"
                    : "bg-gradient-to-r from-gray-100 to-white text-gray-600 hover:bg-accent/10 hover:text-accent border border-accent/20"
                }`}
                style={{
                  clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
                  boxShadow:
                    searchTerm.toLowerCase() === category.toLowerCase()
                      ? "0 0 15px rgba(240, 180, 41, 0.3)"
                      : "0 0 10px rgba(240, 180, 41, 0.1)",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Futuristic FAQ Items */}
          <div className="space-y-4 mb-12">
            {(searchTerm ? filteredFAQs : faqs).map((faq, index) => (
              <div
                key={index}
                className={`group bg-white border border-accent/20 hover:border-accent/50 shadow-sm hover:shadow-lg transition-all duration-300 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${1000 + index * 100}ms` : "0ms",
                  clipPath: "polygon(0 0, 100% 0, 99% 100%, 1% 100%)",
                  boxShadow: "0 0 20px rgba(240, 180, 41, 0.1)",
                }}
              >
                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-8 h-8 bg-accent/20"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                  }}
                ></div>

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent/20 relative"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center mb-2">
                        <span
                          className="inline-block px-3 py-1 text-primary text-xs font-medium mr-3"
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                            background: "rgba(240, 180, 41, 0.1)",
                            boxShadow: "0 0 10px rgba(240, 180, 41, 0.2)",
                          }}
                        >
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${
                        openFAQ === index ? "bg-accent rotate-45" : "bg-accent/10 group-hover:bg-accent/20"
                      }`}
                      style={{
                        clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                        boxShadow:
                          openFAQ === index ? "0 0 15px rgba(240, 180, 41, 0.4)" : "0 0 10px rgba(240, 180, 41, 0.2)",
                      }}
                    >
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          openFAQ === index ? "text-primary" : "text-accent"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <div className="px-6">
                    <div className="border-t border-accent/20 pt-4">
                      <p className="text-gray-600 leading-relaxed mb-4">{faq.answer}</p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block px-2 py-1 text-gray-600 text-xs"
                            style={{
                              clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
                              background: "rgba(240, 180, 41, 0.1)",
                              boxShadow: "0 0 5px rgba(240, 180, 41, 0.1)",
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {searchTerm && filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div
                className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-accent/10"
                style={{
                  clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                  boxShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
                }}
              >
                <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any FAQs matching "{searchTerm}". Try a different search term or browse all questions.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="inline-flex items-center bg-accent text-primary px-6 py-3 font-semibold hover:bg-accent/90 transition-all duration-300"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                  boxShadow: "0 0 20px rgba(240, 180, 41, 0.3)",
                }}
              >
                View All FAQs
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add keyframes for particle animation */}
      <style jsx>{`
        @keyframes floatParticle {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
          }
          50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
          }
          75% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  )
}

export default Faq
