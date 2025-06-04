import { useState } from "react"
import { businessMainImg } from "../utils"

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyType: "",
    jobTitle: "",
    numberOfEmployees: "",
    annualRevenues: "",
    services: [],
    additionalInfo: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const totalSteps = 5

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleServiceChange = (service) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service]

    setFormData({
      ...formData,
      services: updatedServices,
    })
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setCurrentStep(totalSteps + 1)
    }, 1500)
  }

  const companyTypes = ["Corporation", "LLC", "Partnership", "Sole Proprietorship", "Non-Profit", "Other"]

  const employeeRanges = ["1-10", "11-50", "51-100", "101-500", "500+"]

  const revenueRanges = ["Under $100K", "$100K - $500K", "$500K - $1M", "$1M - $5M", "$5M - $10M", "Over $10M"]

  const services = ["Accounting or Bookkeeping", "Tax Prep or Tax Consulting", "Payroll", "Other Consulting Need"]

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim() && formData.lastName.trim() && formData.email.trim()
      case 2:
        return formData.phone.trim() && formData.companyName.trim()
      case 3:
        return true // Optional fields
      case 4:
        return formData.services.length > 0
      case 5:
        return true // Optional field
      default:
        return true
    }
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Let's get to know you"
      case 2:
        return "Tell us about your business"
      case 3:
        return "Company details"
      case 4:
        return "What services do you need?"
      case 5:
        return "Anything else we should know?"
      default:
        return "Contact Us"
    }
  }

  const getStepSubtitle = () => {
    switch (currentStep) {
      case 1:
        return "We'd be pleased to get in touch to discuss your accounting and tax needs"
      case 2:
        return "Help us understand your business better"
      case 3:
        return "These details help us provide better recommendations"
      case 4:
        return "Select all services you're interested in"
      case 5:
        return "Share any additional information that might help us assist you"
      default:
        return "Ready to transform your financial future?"
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
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

        <div className="max-w-md mx-auto text-center px-4 relative z-10">
          <div
            className="w-20 h-20 bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-8"
            style={{
              clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
              boxShadow: "0 0 30px rgba(240, 180, 41, 0.4)",
            }}
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1
            className="text-4xl font-light mb-6"
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
            Thank you!
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Your information has been submitted successfully. We'll review your needs and get back to you within 24
            hours to discuss how we can help with your accounting and tax requirements.
          </p>
          <button
            onClick={() => {
              setSubmitStatus(null)
              setCurrentStep(1)
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                companyName: "",
                companyType: "",
                jobTitle: "",
                numberOfEmployees: "",
                annualRevenues: "",
                services: [],
                additionalInfo: "",
              })
            }}
            className="px-8 py-4 bg-accent text-primary font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            style={{
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
              boxShadow: "0 0 20px rgba(240, 180, 41, 0.3)",
            }}
          >
            Submit Another Request
          </button>
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

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          {/* Left Side - Form */}
          <div>
            {/* Futuristic Progress Bar */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div
                  className="inline-flex items-center px-4 py-2 bg-white backdrop-blur-md border border-accent/30 text-primary font-semibold text-sm"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                    boxShadow: "0 0 15px rgba(240, 180, 41, 0.2)",
                  }}
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                  Step {currentStep} of {totalSteps}
                </div>
                <div
                  className="inline-flex items-center px-4 py-2 bg-white backdrop-blur-md border border-accent/30 text-accent font-semibold text-sm"
                  style={{
                    clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
                    boxShadow: "0 0 15px rgba(240, 180, 41, 0.2)",
                  }}
                >
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </div>
              </div>
              <div
                className="w-full bg-white/50 h-3 shadow-inner border border-accent/20"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                  boxShadow: "inset 0 0 10px rgba(240, 180, 41, 0.1)",
                }}
              >
                <div
                  className="bg-gradient-to-r from-primary to-accent h-3 transition-all duration-700 ease-out"
                  style={{
                    width: `${(currentStep / totalSteps) * 100}%`,
                    clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                    boxShadow: "0 0 15px rgba(240, 180, 41, 0.4)",
                  }}
                ></div>
              </div>
            </div>

            {/* Header */}
            <div className="mb-16">
              <h1
                className="text-4xl md:text-5xl font-light mb-6"
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
                {getStepTitle()}
              </h1>
              <p className="text-xl text-gray-700 font-light leading-relaxed">{getStepSubtitle()}</p>
            </div>

            {/* Enhanced Form Container */}
            <div
              className="bg-white/80 backdrop-blur-sm shadow-2xl border border-accent/20 p-8 md:p-12"
              style={{
                clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                boxShadow: "0 0 40px rgba(240, 180, 41, 0.2)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,180,41,0.02) 100%)",
              }}
            >
              {/* Decorative elements */}
              <div
                className="absolute top-0 right-0 w-12 h-12 bg-accent/10"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                }}
              ></div>

              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-fadeInUp">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-3">
                        First Name *
                      </label>
                      <div className="relative">
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 text-lg"
                          placeholder="First"
                          autoFocus
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
                      <label htmlFor="lastName" className="block text-sm font-semibold text-primary mb-3">
                        Last Name *
                      </label>
                      <div className="relative">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 text-lg"
                          placeholder="Last"
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
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-3">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 text-lg"
                          placeholder="Email*"
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                            boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Business Contact */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fadeInUp">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-3">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 text-lg"
                          placeholder="Phone*"
                          autoFocus
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
                      <label htmlFor="companyName" className="block text-sm font-semibold text-primary mb-3">
                        Company Name *
                      </label>
                      <div className="relative">
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 text-lg"
                          placeholder="Company Name*"
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
                    <div className="group">
                      <label htmlFor="companyType" className="block text-sm font-semibold text-primary mb-3">
                        Type of Company
                      </label>
                      <div className="relative">
                        <select
                          id="companyType"
                          name="companyType"
                          value={formData.companyType}
                          onChange={handleChange}
                          className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 text-lg"
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                            boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                          }}
                        >
                          <option value="">Type of Company</option>
                          {companyTypes.map((type, index) => (
                            <option key={index} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Company Details */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fadeInUp">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group">
                      <label htmlFor="jobTitle" className="block text-sm font-semibold text-primary mb-3">
                        Job Title
                      </label>
                      <div className="relative">
                        <input
                          id="jobTitle"
                          name="jobTitle"
                          type="text"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 text-lg"
                          placeholder="Job Title"
                          autoFocus
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
                      <label htmlFor="numberOfEmployees" className="block text-sm font-semibold text-primary mb-3">
                        Number of Employees
                      </label>
                      <div className="relative">
                        <select
                          id="numberOfEmployees"
                          name="numberOfEmployees"
                          value={formData.numberOfEmployees}
                          onChange={handleChange}
                          className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 text-lg"
                          style={{
                            clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)",
                            boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                          }}
                        >
                          <option value="">Number of Employees</option>
                          {employeeRanges.map((range, index) => (
                            <option key={index} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)" }}
                        ></div>
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="annualRevenues" className="block text-sm font-semibold text-primary mb-3">
                        Annual Revenues
                      </label>
                      <div className="relative">
                        <select
                          id="annualRevenues"
                          name="annualRevenues"
                          value={formData.annualRevenues}
                          onChange={handleChange}
                          className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 text-lg"
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                            boxShadow: "0 0 15px rgba(240, 180, 41, 0.1)",
                          }}
                        >
                          <option value="">Annual Revenues</option>
                          {revenueRanges.map((range, index) => (
                            <option key={index} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-center text-sm text-gray-600 bg-primary/5 p-4 border border-accent/20"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                      boxShadow: "0 0 10px rgba(240, 180, 41, 0.1)",
                    }}
                  >
                    These details help us provide better recommendations tailored to your business size and needs
                  </div>
                </div>
              )}

              {/* Step 4: Services */}
              {currentStep === 4 && (
                <div className="space-y-8 animate-fadeInUp">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <label
                        key={index}
                        className={`p-6 border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                          formData.services.includes(service)
                            ? "border-accent bg-gradient-to-r from-primary/10 to-accent/10 shadow-lg"
                            : "border-accent/20 hover:border-accent/50 bg-white/50"
                        }`}
                        style={{
                          clipPath:
                            index % 2 === 0
                              ? "polygon(0 0, 100% 0, 96% 100%, 4% 100%)"
                              : "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)",
                          boxShadow: formData.services.includes(service)
                            ? "0 0 20px rgba(240, 180, 41, 0.3)"
                            : "0 0 10px rgba(240, 180, 41, 0.1)",
                        }}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                              formData.services.includes(service) ? "bg-accent" : "bg-white border-2 border-accent/30"
                            }`}
                            style={{
                              clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                              boxShadow: formData.services.includes(service)
                                ? "0 0 10px rgba(240, 180, 41, 0.4)"
                                : "0 0 5px rgba(240, 180, 41, 0.2)",
                            }}
                          >
                            {formData.services.includes(service) && (
                              <svg
                                className="w-4 h-4 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="text-gray-900 font-medium text-lg">{service}</span>
                        </div>
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="hidden"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Additional Info */}
              {currentStep === 5 && (
                <div className="space-y-8 animate-fadeInUp">
                  <div className="group">
                    <label htmlFor="additionalInfo" className="block text-sm font-semibold text-primary mb-3">
                      Add Additional Information
                    </label>
                    <div className="relative">
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Please share any specific accounting or tax challenges you're facing, deadlines you need to meet, or particular areas where you need assistance..."
                        rows={6}
                        className="w-full px-6 py-4 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 text-lg resize-none"
                        autoFocus
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
                </div>
              )}

              {/* Enhanced Navigation Buttons */}
              <div className="flex justify-between items-center pt-12">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className={`px-8 py-4 font-semibold transition-all duration-300 ${
                    currentStep === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-primary hover:text-white hover:bg-primary transform hover:scale-105"
                  }`}
                  style={{
                    clipPath: currentStep === 1 ? "none" : "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
                    boxShadow: currentStep === 1 ? "none" : "0 0 15px rgba(240, 180, 41, 0.2)",
                  }}
                >
                  ← Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={`px-10 py-4 font-semibold transition-all duration-300 transform ${
                      isStepValid()
                        ? "bg-accent text-primary hover:shadow-xl hover:scale-105"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    style={{
                      clipPath: isStepValid() ? "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" : "none",
                      boxShadow: isStepValid() ? "0 0 20px rgba(240, 180, 41, 0.3)" : "none",
                    }}
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`px-12 py-4 font-bold text-lg transition-all duration-300 transform ${
                      isSubmitting
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-accent text-primary hover:shadow-xl hover:scale-105"
                    }`}
                    style={{
                      clipPath: isSubmitting ? "none" : "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                      boxShadow: isSubmitting ? "none" : "0 0 25px rgba(240, 180, 41, 0.4)",
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Futuristic Image */}
          <div className="hidden xl:block sticky top-16">
            <div className="relative">
              {/* Main Image Container */}
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                  boxShadow: "0 0 40px rgba(240, 180, 41, 0.2)",
                }}
              >
                <img
                  src={businessMainImg || "/placeholder.svg?height=800&width=600"}
                  alt="Professional financial consultation"
                  className="w-full h-[800px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10"></div>

                {/* Decorative corner accents */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 bg-accent/20"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                  }}
                ></div>
              </div>

              {/* Enhanced Floating Stats Cards */}
              <div
                className="absolute -left-8 top-20 bg-white/90 backdrop-blur-sm p-6 shadow-xl border border-accent/20 transform rotate-3"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                  boxShadow: "0 0 25px rgba(240, 180, 41, 0.3)",
                }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>

              <div
                className="absolute -right-8 top-40 bg-white/90 backdrop-blur-sm p-6 shadow-xl border border-accent/20 transform -rotate-3"
                style={{
                  clipPath: "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)",
                  boxShadow: "0 0 25px rgba(240, 180, 41, 0.3)",
                }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">24+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div
                className="absolute -left-6 bottom-32 bg-white/90 backdrop-blur-sm p-6 shadow-xl border border-accent/20 transform rotate-2"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 94% 100%, 6% 100%)",
                  boxShadow: "0 0 25px rgba(240, 180, 41, 0.3)",
                }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>

              <div
                className="absolute -right-6 bottom-16 bg-white/90 backdrop-blur-sm p-6 shadow-xl border border-accent/20 transform -rotate-2"
                style={{
                  clipPath: "polygon(6% 0, 94% 0, 100% 100%, 0% 100%)",
                  boxShadow: "0 0 25px rgba(240, 180, 41, 0.3)",
                }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">$50M+</div>
                  <div className="text-sm text-gray-600">Assets Managed</div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl"></div>
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

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
