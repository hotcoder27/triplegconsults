import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { SITE_TAGLINE, SITE_DESCRIPTION } from "../constants"
import { businessMainImg, meetImg } from "../utils"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden bg-primary">
      
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-primary">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            transform: `scale(1.1) translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>
      </div>

      {/* Futuristic Overlay Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${meetImg || "/placeholder.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `scale(1.1) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: "transform 0.1s ease-out",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/60"></div>
      </div>

      {/* Futuristic Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: i % 3 === 0 ? "rgba(240, 180, 41, 0.8)" : "rgba(255, 255, 255, 0.6)",
              boxShadow: i % 3 === 0 ? "0 0 8px rgba(240, 180, 41, 0.8)" : "0 0 6px rgba(255, 255, 255, 0.6)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `floatParticle ${Math.random() * 15 + 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
              display: i > 20 && window.innerWidth < 640 ? "none" : "block", // Show fewer particles on mobile
            }}
          ></div>
        ))}
      </div>

      {/* Futuristic Geometric Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent opacity-40"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 border-r-2 border-t-2 border-accent opacity-20 hidden md:block"></div>
      <div className="absolute bottom-1/4 left-10 w-20 h-20 border-l-2 border-b-2 border-accent opacity-20 hidden md:block"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Futuristic Badge */}
          <div
            className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-primary/40 backdrop-blur-md border border-accent/30 text-accent font-medium text-xs sm:text-sm mb-6 sm:mb-8 transform transition-all duration-1500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{
              transform: `translateY(${isVisible ? 0 : 48}px) translateX(${mousePosition.x * -5}px)`,
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
              boxShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
            }}
          >
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            TRUSTED FINANCIAL PARTNERS SINCE 2000
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full ml-2 sm:ml-3 animate-pulse hidden sm:block"></span>
          </div>

          {/* Futuristic Title */}
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-8 leading-none transform transition-all duration-2000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f0b429 50%, #ffffff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(240, 180, 41, 0.3)",
              transform: `translateY(${isVisible ? 0 : 64}px) translateX(${mousePosition.x * -8}px)`,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {SITE_TAGLINE.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-white">{SITE_TAGLINE.split(" ").slice(2).join(" ")}</span>
          </h1>

          {/* Futuristic Description */}
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed font-light transform transition-all duration-2000 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{
              transform: `translateY(${isVisible ? 0 : 48}px) translateX(${mousePosition.x * 3}px)`,
              textShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
            }}
          >
            {SITE_DESCRIPTION}
          </p>

          {/* Futuristic CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-16 transform transition-all duration-2000 delay-900 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{
              transform: `translateY(${isVisible ? 0 : 48}px)`,
            }}
          >
            <Link
              to="/contact"
              className="group relative bg-accent text-primary w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-md transform hover:scale-105 transition-all duration-500 overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                boxShadow: "0 0 30px rgba(240, 180, 41, 0.3), 0 0 0 1px rgba(240, 180, 41, 0.1)",
                maxWidth: "280px",
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
                BOOK CONSULTATION
                <svg
                  className="w-5 h-5 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </Link>

            <button
              onClick={scrollToServices}
              className="group flex items-center justify-center w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-md text-white border-2 border-accent/30 hover:border-accent hover:bg-accent/10 backdrop-blur-md transition-all duration-500"
              style={{
                clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
                boxShadow: "0 0 20px rgba(240, 180, 41, 0.2)",
                maxWidth: "280px",
              }}
            >
              EXPLORE SERVICES
              <svg
                className="w-5 h-5 ml-2 sm:ml-3 group-hover:translate-y-2 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Futuristic Stats - Responsive Grid */}
          <div
            className={`hidden md:grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto transform transition-all duration-2000 delay-1200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {[
              { number: "500+", label: "CLIENTS" },
              { number: "98%", label: "SUCCESS" },
              { number: "24/7", label: "SUPPORT" },
              { number: "5★", label: "RATING" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center p-3 sm:p-6 rounded-md bg-primary/30 backdrop-blur-md border border-accent/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-500"
                style={{
                  transform: `translateX(${mousePosition.x * (index % 2 === 0 ? -3 : 3)}px)`,
                  transition: "transform 0.1s ease-out, background-color 0.5s, border-color 0.5s",
                  clipPath:
                    index % 2 === 0
                      ? "polygon(0 0, 100% 0, 95% 100%, 5% 100%)"
                      : "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
                  boxShadow: "0 0 20px rgba(240, 180, 41, 0.1)",
                }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-accent mb-1 sm:mb-2 group-hover:scale-125 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="text-white/80 font-bold tracking-wider text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.5}px)`,
        }}
      >
        <button
          onClick={scrollToServices}
          className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/30 backdrop-blur-md border border-accent/30 rounded-full flex items-center justify-center hover:bg-accent/20 hover:scale-125 transition-all duration-500 group"
          style={{
            boxShadow: "0 0 20px rgba(240, 180, 41, 0.3)",
          }}
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-accent group-hover:text-white transition-colors duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Futuristic Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-60"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-60"></div>
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

export default Hero
