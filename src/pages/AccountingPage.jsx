import { useState } from "react"
import { bussdpImg } from "../utils"

const AccountingPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    email: "",
    solution: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const services = [
    {
      icon: "📊",
      title: "Financial Statement Preparation",
      description:
        "Comprehensive preparation of income statements, balance sheets, and cash flow statements that comply with accounting standards.",
      features: ["GAAP Compliance", "Monthly/Quarterly Reports", "Annual Statements", "Comparative Analysis"],
    },
    {
      icon: "🔍",
      title: "Independent Auditing Services",
      description: "Thorough and objective examination of your financial records to ensure accuracy and compliance.",
      features: ["External Audits", "Internal Audit Support", "Compliance Reviews", "Risk Assessment"],
    },
    {
      icon: "🛡️",
      title: "Internal Controls Assessment",
      description: "Evaluation and improvement of your internal control systems to prevent fraud and ensure accuracy.",
      features: ["Control Design", "Process Documentation", "Weakness Identification", "Improvement Recommendations"],
    },
    {
      icon: "📋",
      title: "Compliance Reporting",
      description: "Ensure your business meets all regulatory requirements with our comprehensive compliance services.",
      features: ["Regulatory Filings", "Industry Standards", "Government Reporting", "Documentation Management"],
    },
  ]

  const solutionOptions = [
    "Accounting & Auditing",
    "Financial Statement Preparation",
    "Internal Controls Assessment",
    "Compliance Reporting",
    "Risk Assessment",
    "Other",
  ]

  return (
    <div className="bg-white relative overflow-hidden mt-[-50px]">
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
        {[...Array(20)].map((_, i) => (
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Futuristic Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 pt-20">
          <div>
            <div
              className="inline-flex items-center px-6 py-3 bg-white backdrop-blur-md border border-accent/30 text-primary font-semibold text-sm mb-8"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                boxShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
              }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
              ACCOUNTING & AUDITING SERVICES
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-8"
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
              Accounting & Auditing
            </h1>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                At TripleG Consult, we believe that reliable financial reporting starts with strong partnerships. Our
                approach to accounting and auditing is built on a foundation of trust, communication, and a deep
                understanding of your business operations.
              </p>
              <p className="mb-6">
                We go beyond the numbers—leveraging advanced tools such as auditing software, integrated tax systems,
                and comprehensive risk assessments to ensure your financial records are accurate, compliant, and
                insightful. Our focus is not only on what is required but also on identifying opportunities to improve
                and areas that may pose future risks.
              </p>
              <p>
                Before we begin on-site work, we engage in detailed planning to minimize disruptions. This includes
                clear scheduling, targeted document requests, and team coordination to make the process as seamless and
                efficient as possible for your staff.
              </p>
              <p className="mt-6 font-medium text-primary">
                By staying aligned with the latest industry standards and best practices, TripleG acts as a
                forward-thinking advisor, delivering audit and accounting solutions that support smart decision-making
                and long-term success.
              </p>
            </div>
          </div>

          {/* Futuristic Professional Image Section */}
          <div className="relative">
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{
                clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                boxShadow: "0 0 30px rgba(240, 180, 41, 0.2)",
              }}
            >
              <img
                src={bussdpImg}
                alt="Professional accounting consultation"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>

              {/* Decorative corner accents */}
              <div
                className="absolute top-0 right-0 w-16 h-16 bg-accent/20"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                }}
              ></div>
            </div>

            {/* Futuristic Professional Info Card */}
            <div
              className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 shadow-xl border border-accent/20"
              style={{
                clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                boxShadow: "0 0 25px rgba(240, 180, 41, 0.3)",
              }}
            >
              <div className="flex items-center space-x-4">
                <div
                  className="w-16 h-16 bg-primary flex items-center justify-center"
                  style={{
                    clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                    boxShadow: "0 0 15px rgba(240, 180, 41, 0.3)",
                  }}
                >
                  <span className="text-white font-bold text-xl">MO</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Moruf Owoiya CPA</h3>
                  <p className="text-primary font-semibold">Partner</p>
                  <p className="text-gray-600 text-sm">Leading our Accounting & Auditing practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Futuristic Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center px-4 py-2 bg-white backdrop-blur-md border border-accent/30 text-primary font-medium text-sm mb-6"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                boxShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
              }}
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Our Expertise
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
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
              Our Accounting & <span className="text-accent">Auditing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial solutions designed to meet your business needs with precision and expertise.
            </p>
          </div>

          {/* Enhanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border border-accent/20 p-6 shadow-lg hover:shadow-2xl hover:border-accent/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
                style={{
                  clipPath:
                    index % 2 === 0
                      ? "polygon(0 0, 100% 0, 98% 100%, 2% 100%)"
                      : "polygon(2% 0, 98% 0, 100% 100%, 0% 100%)",
                  boxShadow: "0 0 20px rgba(240, 180, 41, 0.1)",
                  minHeight: "400px",
                }}
              >
                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-8 h-8 bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                  }}
                ></div>

                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon with enhanced styling */}
                  <div
                    className="w-16 h-16 flex items-center justify-center text-3xl mb-4 group-hover:scale-125 transition-transform duration-300"
                    style={{
                      clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                      background: "rgba(240, 180, 41, 0.1)",
                      boxShadow: "0 0 15px rgba(240, 180, 41, 0.2)",
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">{service.description}</p>

                  {/* Features with enhanced styling */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <div
                          className="w-3 h-3 bg-accent mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{
                            clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                            boxShadow: "0 0 6px rgba(240, 180, 41, 0.3)",
                          }}
                        ></div>
                        <span className="font-medium text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button 
                  <div className="mt-4 pt-4 border-t border-accent/10">
                    <button
                      className="w-full py-2 text-accent font-semibold text-sm hover:text-primary hover:bg-accent/10 transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                        border: "1px solid rgba(240, 180, 41, 0.2)",
                      }}
                    >
                      Learn More →
                    </button>
                  </div> 
                  */}

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Futuristic Contact Form Section */}
        <div className="mb-20 flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Form Header */}
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center px-6 py-3 bg-white backdrop-blur-md border border-accent/30 text-primary font-medium text-sm mb-6"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                  boxShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
                }}
              >
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                Get In Touch
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
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
                Contact <span className="text-accent">TripleG's</span> Advisors
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your financial operations? Let's discuss how we can help your business thrive.
              </p>
            </div>

            {/* Enhanced Form Container */}
            <div
              className="relative bg-white shadow-2xl p-8 md:p-12 border border-accent/20 mx-auto"
              style={{
                clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                boxShadow: "0 0 40px rgba(240, 180, 41, 0.2)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,180,41,0.02) 100%)",
              }}
            >
              {/* Decorative elements */}
              <div
                className="absolute top-0 right-0 w-16 h-16 bg-accent/10"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-16 h-16 bg-accent/10"
                style={{
                  clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                }}
              ></div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                {/* Enhanced Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors duration-200"
                    >
                      First Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Enter your first name"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
                          boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }}
                      ></div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors duration-200"
                    >
                      Last Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Enter your last name"
                        style={{
                          clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)",
                          boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="title"
                      className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors duration-200"
                    >
                      Job Title
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Your job title"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
                          boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }}
                      ></div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="company"
                      className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors duration-200"
                    >
                      Company Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="Your company name"
                        style={{
                          clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)",
                          boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors duration-200"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        placeholder="your.email@company.com"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)",
                          boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }}
                      ></div>
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="solution"
                      className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors duration-200"
                    >
                      Service Interest *
                    </label>
                    <div className="relative">
                      <select
                        id="solution"
                        name="solution"
                        required
                        value={formData.solution}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        style={{
                          clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)",
                          boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                        }}
                      >
                        <option value="">Select a service</option>
                        {solutionOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-3 group-hover:text-accent transition-colors duration-200"
                  >
                    How Can We Help You? *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                      placeholder="Please describe your accounting and auditing needs, current challenges, or specific goals you'd like to achieve..."
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 99% 100%, 1% 100%)",
                        boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ clipPath: "polygon(0 0, 100% 0, 99% 100%, 1% 100%)" }}
                    ></div>
                  </div>
                </div>

                {/* Enhanced Submit Button */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    className="group relative px-16 py-5 bg-accent text-primary font-bold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                      boxShadow: "0 0 30px rgba(240, 180, 41, 0.4)",
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      SEND MESSAGE
                      <svg
                        className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </div>

                {/* Form Footer */}
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours. Your information is secure and confidential.
                  </p>
                </div>
              </form>
            </div>
          </div>
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
    </div>
  )
}

export default AccountingPage
