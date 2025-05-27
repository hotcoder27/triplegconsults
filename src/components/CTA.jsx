import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("cta-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const benefits = [
    "Free initial consultation",
    "Personalized financial strategy",
    "Expert tax planning advice",
    "24/7 client support",
  ]

  return (
    <section
      id="cta-section"
      className="py-20 bg-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div
            className={`relative bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-12 shadow-2xl transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-3xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Badge */}
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 transform transition-all duration-1000 delay-200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                Limited Time Offer
              </div>

              {/* Heading */}
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 delay-400 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Ready to Transform Your
                <br />
                <span className="text-accent">Financial Future?</span>
              </h2>

              {/* Description */}
              <p
                className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-600 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Take the first step towards financial freedom. Our expert team is ready to create a personalized
                strategy that aligns with your goals and secures your future.
              </p>

              {/* Benefits List */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-800 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center md:justify-start">
                    <svg
                      className="w-5 h-5 text-accent mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <Link
                  to="/contact"
                  className="group relative bg-accent text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden min-w-[200px]"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Book Free Consultation
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  to="/services"
                  className="group flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 min-w-[200px]"
                >
                  Explore Our Services
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div
                className={`mt-12 pt-8 border-t border-white/20 transform transition-all duration-1000 delay-1200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="group">
                    <div className="text-2xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                      🔒
                    </div>
                    <div className="text-white/90 font-medium">Secure & Confidential</div>
                    <div className="text-white/70 text-sm">Your data is protected</div>
                  </div>
                  <div className="group">
                    <div className="text-2xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                      ⚡
                    </div>
                    <div className="text-white/90 font-medium">Quick Response</div>
                    <div className="text-white/70 text-sm">We'll contact you within 24 hours</div>
                  </div>
                  <div className="group">
                    <div className="text-2xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                      💯
                    </div>
                    <div className="text-white/90 font-medium">No Obligation</div>
                    <div className="text-white/70 text-sm">Free consultation, no strings attached</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent/20 rounded-xl p-4 animate-float">
              <div className="text-accent font-bold text-lg">FREE</div>
              <div className="text-white text-xs">Consultation</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/20 rounded-xl p-4 animate-float delay-1000">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <div className="text-white font-semibold text-sm">Available Now</div>
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div
            className={`mt-12 text-center transform transition-all duration-1000 delay-1400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-gray-100 mb-4">
              Have questions? Call us directly at{" "}
              <a
                href="tel:+1234567890"
                className="text-white font-semibold hover:text-accent transition-colors duration-300"
              >
                (123) 456-7890
              </a>
            </p>
            <p className="text-gray-100 text-sm">
              Or email us at{" "}
              <a
                href="mailto:info@triplegconsulting.com"
                className="text-white hover:text-accent transition-colors duration-300"
              >
                info@triplegconsulting.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
