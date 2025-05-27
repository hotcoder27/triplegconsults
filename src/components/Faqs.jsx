import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
      category: "Pricing",
      question: "How much do your services cost?",
      answer:
        "Our pricing varies based on the complexity and scope of services required. We offer transparent, competitive pricing with no hidden fees. Basic tax preparation starts at $200, while comprehensive financial planning packages range from $1,500-$5,000 annually. During your free consultation, we'll provide a detailed quote tailored to your specific needs.",
      tags: ["pricing", "cost", "fees", "consultation"],
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
    <section id="enhanced-faq-section" className="py-10 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Frequently Asked Questions
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
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

          {/* Search Bar */}
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
                className="w-full px-6 py-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div
            className={`flex flex-wrap justify-center gap-3 mt-6 transform transition-all duration-1000 delay-800 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <button
              onClick={() => setSearchTerm("")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                searchTerm === ""
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchTerm(category.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  searchTerm.toLowerCase() === category.toLowerCase()
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {(searchTerm ? filteredFAQs : faqs).map((faq, index) => (
              <div
                key={index}
                className={`group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${1000 + index * 100}ms` : "0ms",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center mb-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mr-3">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFAQ === index ? "bg-primary rotate-45" : "group-hover:bg-primary/20"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          openFAQ === index ? "text-white" : "text-primary"
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
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed mb-4">{faq.answer}</p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
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
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any FAQs matching "{searchTerm}". Try a different search term or browse all questions.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                View All FAQs
              </button>
            </div>
          )}

          {/* Contact CTA */}
          <div
            className={`text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 transform transition-all duration-1000 delay-1200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help. Get in touch with us for personalized answers to your specific financial
                questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Start a Conversation
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Us Now
                </a>
                <a
                  href="mailto:info@yourcompany.com"
                  className="inline-flex items-center border-2 border-accent text-accent px-6 py-3 rounded-xl font-semibold hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
