import { useState } from "react"
import { bussdpImg } from "../utils"

const AboutPage = () => {
  const [showCareersModal, setShowCareersModal] = useState(false)
  const [careersFormData, setCareersFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    section: "",
    coverLetter: "",
    resume: null,
  })

  const stats = [
    { icon: "👥", label: "Happy Clients", value: "500+" },
    { icon: "🏆", label: "Years Experience", value: "24+" },
    { icon: "📈", label: "Success Rate", value: "98%" },
    { icon: "🛡️", label: "Assets Managed", value: "$50M+" },
  ]

  const handleCareersChange = (e) => {
    if (e.target.type === "file") {
      setCareersFormData({
        ...careersFormData,
        [e.target.name]: e.target.files[0],
      })
    } else {
      setCareersFormData({
        ...careersFormData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleCareersSubmit = (e) => {
    e.preventDefault()
    console.log("Careers form submitted:", careersFormData)
    // Handle form submission here
    setShowCareersModal(false)
    // Reset form
    setCareersFormData({
      fullName: "",
      email: "",
      phone: "",
      section: "",
      coverLetter: "",
      resume: null,
    })
  }

  const sectionOptions = ["Audit", "Tax", "Advisory"]

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
              ABOUT TRIPLE G CONSULT
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
              About Triple G Consult
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Lifting the Burden, Fueling Your Growth</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                Every business owner deserves the freedom to focus on what truly drives success, innovation, customer
                relationships, and strategic growth not the daily grind of books and accounts. That's where Triple G
                Consult comes in.
              </p>
              <p className="mb-6">
                We understand that behind every successful business is a leader with vision. But managing finances,
                staying compliant, and making sense of ever-changing tax and accounting rules can quickly become
                overwhelming. At Triple G, we exist to take that weight off your shoulders.
              </p>
              <p className="mb-6">
                With decades of combined experience, our team has earned a reputation for delivering dependable,
                forward-thinking accounting, tax, and advisory services. We support a diverse client base from startups
                and family-run enterprises to nonprofits and high-net-worth individuals offering tailored solutions that
                make sense for your unique goals.
              </p>
              <p className="mb-6">
                What sets us apart is our proactive approach. We go beyond routine bookkeeping to offer insights that
                improve efficiency, uncover opportunities, and guide smart decision-making. Whether it's preparing for
                growth, managing risk, or navigating financial complexity, we bring clarity and confidence to your
                business journey.
              </p>
              <p className="font-medium text-primary">
                At Triple G Consult, we don't just manage your numbers, we help you reclaim your time, reduce stress, and
                stay focused on building the future you envision. Let us handle the back office, so you can lead from
                the front.
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
                alt="Moruf Owoiya - Partner at Triple G Consult"
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
                  <h3 className="text-xl font-bold text-primary">Moruf Owoiya</h3>
                  <p className="text-accent font-semibold">Partner</p>
                  <p className="text-gray-600 text-sm">Leading Triple G Consult's vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Futuristic Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white border border-accent/20 p-6 shadow-lg hover:shadow-xl hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2"
              style={{
                clipPath: "polygon(0 0, 100% 0, 99% 100%, 1% 100%)",
                boxShadow: "0 0 20px rgba(240, 180, 41, 0.1)",
              }}
            >
              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-6 h-6 bg-accent/20"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                }}
              ></div>

              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Futuristic Mission and Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div
            className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-accent/20"
            style={{
              clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
              boxShadow: "0 0 20px rgba(240, 180, 41, 0.1)",
            }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              To provide exceptional financial services that empower our clients to achieve their dreams and secure
              their financial future. We believe that everyone deserves access to professional financial guidance,
              regardless of their current wealth or investment experience.
            </p>
            <p className="text-lg text-gray-600">
              Our commitment to transparency, integrity, and client success has made us a trusted partner for hundreds
              of families and businesses over the past two decades.
            </p>
          </div>

          <div
            className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20"
            style={{
              clipPath: "polygon(2% 0, 98% 0, 100% 100%, 0% 100%)",
              boxShadow: "0 0 20px rgba(240, 180, 41, 0.1)",
            }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div
                  className="w-4 h-4 bg-accent mt-2 mr-4 flex-shrink-0"
                  style={{
                    clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                    boxShadow: "0 0 8px rgba(240, 180, 41, 0.3)",
                  }}
                ></div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Integrity</h3>
                  <p className="text-gray-600">We operate with the highest ethical standards in all our dealings.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div
                  className="w-4 h-4 bg-accent mt-2 mr-4 flex-shrink-0"
                  style={{
                    clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                    boxShadow: "0 0 8px rgba(240, 180, 41, 0.3)",
                  }}
                ></div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Excellence</h3>
                  <p className="text-gray-600">We strive for excellence in every service we provide.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div
                  className="w-4 h-4 bg-accent mt-2 mr-4 flex-shrink-0"
                  style={{
                    clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                    boxShadow: "0 0 8px rgba(240, 180, 41, 0.3)",
                  }}
                ></div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">Client-First</h3>
                  <p className="text-gray-600">Your success is our success. We put your interests first, always.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Futuristic Careers Section */}
        <div
          className="relative bg-primary overflow-hidden mb-20"
          style={{
            clipPath: "polygon(0 0, 100% 0, 99% 100%, 1% 100%)",
            boxShadow: "0 0 40px rgba(240, 180, 41, 0.3)",
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                                  linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Decorative corner accents */}
          <div
            className="absolute top-0 left-0 w-20 h-20 bg-accent/20"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-20 h-20 bg-accent/20"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            }}
          ></div>

          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white tracking-tight"
                style={{
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                }}
              >
                JOIN US.
              </h2>
              <p
                className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-5xl mx-auto"
                style={{
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                }}
              >
                We invite you to explore the perks and benefits of joining Triple G Consult by visiting our Careers page
                today. Discover exciting career opportunities and experience firsthand why Triple G is the ideal
                destination for those seeking growth, fulfillment, and a vibrant workplace culture.
              </p>

              <button
                onClick={() => setShowCareersModal(true)}
                className="inline-flex items-center px-10 py-5 border-2 border-accent text-accent font-bold text-lg hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-105"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                  boxShadow: "0 0 25px rgba(240, 180, 41, 0.3)",
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Futuristic Careers Modal */}
        {showCareersModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div
              className="bg-white shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{
                clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                boxShadow: "0 0 50px rgba(240, 180, 41, 0.3)",
              }}
            >
              {/* Modal Header */}
              <div
                className="bg-gradient-to-r from-primary to-accent px-8 py-6"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
                }}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Join Our Team</h2>
                  <button
                    onClick={() => setShowCareersModal(false)}
                    className="text-white hover:text-gray-200 transition-colors duration-200 p-2"
                    style={{
                      clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
                      background: "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-8 text-center">
                  Ready to take the next step in your career? Submit your application below and join our dynamic team at
                  Triple G Consult.
                </p>

                <form onSubmit={handleCareersSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={careersFormData.fullName}
                      onChange={handleCareersChange}
                      className="w-full px-4 py-3 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200"
                      placeholder="Enter your full name"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                        boxShadow: "0 0 10px rgba(240, 180, 41, 0.1)",
                      }}
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={careersFormData.email}
                        onChange={handleCareersChange}
                        className="w-full px-4 py-3 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200"
                        placeholder="your.email@example.com"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                          boxShadow: "0 0 10px rgba(240, 180, 41, 0.1)",
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={careersFormData.phone}
                        onChange={handleCareersChange}
                        className="w-full px-4 py-3 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200"
                        placeholder="(555) 123-4567"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                          boxShadow: "0 0 10px rgba(240, 180, 41, 0.1)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Section */}
                  <div>
                    <label htmlFor="section" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Section *
                    </label>
                    <select
                      id="section"
                      name="section"
                      required
                      value={careersFormData.section}
                      onChange={handleCareersChange}
                      className="w-full px-4 py-3 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                        boxShadow: "0 0 10px rgba(240, 180, 41, 0.1)",
                      }}
                    >
                      <option value="">Select a section</option>
                      {sectionOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                      Resume/CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleCareersChange}
                        className="w-full px-4 py-3 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-primary hover:file:bg-accent/90"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                          boxShadow: "0 0 10px rgba(240, 180, 41, 0.1)",
                        }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={careersFormData.coverLetter}
                      onChange={handleCareersChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-accent/20 focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all duration-200 resize-none"
                      placeholder="Tell us why you'd like to join Triple G Consult..."
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
                        boxShadow: "0 0 10px rgba(240, 180, 41, 0.1)",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowCareersModal(false)}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200"
                      style={{
                        clipPath: "polygon(2% 0, 98% 0, 100% 100%, 0% 100%)",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-accent text-primary font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      style={{
                        clipPath: "polygon(0 0, 98% 0, 100% 100%, 2% 100%)",
                        boxShadow: "0 0 20px rgba(240, 180, 41, 0.3)",
                      }}
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
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

export default AboutPage
