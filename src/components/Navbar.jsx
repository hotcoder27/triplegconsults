import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { NAV_LINKS, SITE_NAME } from "../constants"
import { logoImg } from "../utils"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const serviceOptions = [
    { name: "Accounting & Auditing", path: "/accounting" },
    { name: "Advisory", path: "/advisory" },
    { name: "Tax Solutions", path: "/tax" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-2xl border-b border-accent/20"
          : "bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200/50"
      }`}
      style={{
        boxShadow: isScrolled ? "0 0 30px rgba(240, 180, 41, 0.2)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Top accent line - only show when scrolled */}
      {isScrolled && <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent"></div>}

      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto my-5">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg p-2 -m-2"
            onClick={closeMenu}
          >
            <div
              className="w-40 max-sm:w-30 max-sm:h-15 h-18 overflow-hidden transition-all duration-300 group-hover:scale-105"
              style={{
                clipPath: isScrolled ? "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" : "none",
                background: isScrolled ? "rgba(240, 180, 41, 0.1)" : "rgba(240, 180, 41, 0.05)",
                boxShadow: isScrolled ? "0 0 20px rgba(240, 180, 41, 0.2)" : "0 0 10px rgba(240, 180, 41, 0.1)",
                borderRadius: isScrolled ? "0" : "12px",
              }}
            >
              <img
                src={logoImg || "/placeholder.svg"}
                alt={`${SITE_NAME} Logo`}
                className="w-full h-full object-fill p-2"
                style={{
                  filter: "brightness(1.2) contrast(1.1)",
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path

              // Special handling for Services dropdown
              if (link.name === "Services") {
                return (
                  <div key={link.name} className="relative group">
                    <button
                      className={`relative px-4 py-2 font-normal tracking-wide transition-all duration-300 flex items-center ${
                        isActive || location.pathname.startsWith("/services")
                          ? isScrolled
                            ? "text-accent"
                            : "text-primary"
                          : isScrolled
                            ? "text-white/80 hover:text-white"
                            : "text-gray-600 hover:text-primary"
                      }`}
                      style={{
                        clipPath: isScrolled ? "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)" : "none",
                        background:
                          isActive || location.pathname.startsWith("/services")
                            ? isScrolled
                              ? "rgba(240, 180, 41, 0.1)"
                              : "rgba(240, 180, 41, 0.05)"
                            : "transparent",
                        boxShadow:
                          isActive || location.pathname.startsWith("/services")
                            ? isScrolled
                              ? "0 0 15px rgba(240, 180, 41, 0.2)"
                              : "0 0 10px rgba(240, 180, 41, 0.1)"
                            : "none",
                        borderRadius: isScrolled ? "0" : "8px",
                      }}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                      {(isActive || location.pathname.startsWith("/services")) && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-accent rounded-full" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 backdrop-blur-md border py-2 transition-all duration-300 ${
                        isScrolled ? "bg-primary/95 border-accent/20" : "bg-white/95 border-gray-200 shadow-lg"
                      } ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                      style={{
                        clipPath: isScrolled ? "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" : "none",
                        boxShadow: isScrolled ? "0 0 30px rgba(240, 180, 41, 0.2)" : "0 10px 25px rgba(0, 0, 0, 0.1)",
                        borderRadius: isScrolled ? "0" : "12px",
                      }}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className={`border-t my-2 ${isScrolled ? "border-accent/20" : "border-gray-200"}`}></div>
                      {serviceOptions.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className={`block px-6 py-3 transition-all duration-200 ${
                            isScrolled
                              ? "text-white/80 hover:text-accent hover:bg-accent/10"
                              : "text-gray-700 hover:text-primary hover:bg-gray-50"
                          }`}
                          onClick={closeMenu}
                          style={{
                            borderLeft: "2px solid transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.borderLeft = "2px solid rgba(240, 180, 41, 0.5)"
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.borderLeft = "2px solid transparent"
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 font-normal tracking-wide transition-all duration-300 ${
                    isActive
                      ? isScrolled
                        ? "text-accent"
                        : "text-primary"
                      : isScrolled
                        ? "text-white/80 hover:text-white"
                        : "text-gray-600 hover:text-primary"
                  }`}
                  style={{
                    clipPath: isScrolled ? "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)" : "none",
                    background: isActive
                      ? isScrolled
                        ? "rgba(240, 180, 41, 0.1)"
                        : "rgba(240, 180, 41, 0.05)"
                      : "transparent",
                    boxShadow: isActive
                      ? isScrolled
                        ? "0 0 15px rgba(240, 180, 41, 0.2)"
                        : "0 0 10px rgba(240, 180, 41, 0.1)"
                      : "none",
                    borderRadius: isScrolled ? "0" : "8px",
                  }}
                  onClick={closeMenu}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="relative bg-accent text-primary px-6 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 overflow-hidden group"
              style={{
                clipPath: isScrolled ? "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" : "none",
                boxShadow: isScrolled ? "0 0 20px rgba(240, 180, 41, 0.3)" : "0 4px 14px rgba(240, 180, 41, 0.3)",
                borderRadius: isScrolled ? "0" : "25px",
              }}
            >
              <span className="relative z-10 flex items-center">
                Book Consultation
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden relative w-10 h-10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 ${
              isScrolled ? "bg-primary/50 hover:bg-accent/20" : "bg-gray-100 hover:bg-gray-200"
            }`}
            style={{
              clipPath: isScrolled ? "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" : "none",
              boxShadow: isScrolled ? "0 0 15px rgba(240, 180, 41, 0.2)" : "0 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: isScrolled ? "0" : "8px",
            }}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 transition-all duration-300 ${
                    isScrolled ? "bg-accent" : "bg-gray-700"
                  } ${isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
                />
                <span
                  className={`block h-0.5 w-6 transition-all duration-300 ${
                    isScrolled ? "bg-accent" : "bg-gray-700"
                  } ${isOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`block h-0.5 w-6 transition-all duration-300 ${
                    isScrolled ? "bg-accent" : "bg-gray-700"
                  } ${isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
                />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all p-0 m-0 duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`py-6 space-y-4 border-t ${isScrolled ? "border-accent/20" : "border-gray-200"}`}
            style={{
              background: isScrolled ? "rgba(240, 180, 41, 0.05)" : "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            {NAV_LINKS.map((link, index) => {
              const isActive = location.pathname === link.path

              // Special handling for Services in mobile menu
              if (link.name === "Services") {
                return (
                  <div key={link.name}>
                    <button
                      onClick={toggleServicesDropdown}
                      className={`w-full text-left px-4 py-3 font-normal tracking-wide transition-all duration-300 transform flex items-center justify-between ${
                        isActive || location.pathname.startsWith("/services")
                          ? isScrolled
                            ? "text-accent translate-x-2"
                            : "text-primary translate-x-2"
                          : isScrolled
                            ? "text-white/80 hover:text-white hover:translate-x-2"
                            : "text-gray-600 hover:text-primary hover:translate-x-2"
                      }`}
                      style={{
                        transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                        clipPath: isScrolled ? "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" : "none",
                        background:
                          isActive || location.pathname.startsWith("/services")
                            ? "rgba(240, 180, 41, 0.1)"
                            : "transparent",
                        boxShadow:
                          isActive || location.pathname.startsWith("/services")
                            ? "0 0 15px rgba(240, 180, 41, 0.2)"
                            : "none",
                        borderRadius: isScrolled ? "0" : "8px",
                      }}
                    >
                      <span>
                        {link.name}
                        {(isActive || location.pathname.startsWith("/services")) && (
                          <span className="ml-2 inline-block w-1 h-1 bg-accent rounded-full" />
                        )}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mobile Services Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isServicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-8 pt-2 space-y-2">
                        {serviceOptions.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.path}
                            className={`block px-4 py-2 transition-colors duration-200 ${
                              isScrolled ? "text-white/70 hover:text-accent" : "text-gray-600 hover:text-primary"
                            }`}
                            style={{
                              borderLeft: "2px solid rgba(240, 180, 41, 0.3)",
                            }}
                            onClick={closeMenu}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 font-normal tracking-wide transition-all duration-300 transform ${
                    isActive
                      ? isScrolled
                        ? "text-accent translate-x-2"
                        : "text-primary translate-x-2"
                      : isScrolled
                        ? "text-white/80 hover:text-white hover:translate-x-2"
                        : "text-gray-600 hover:text-primary hover:translate-x-2"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                    clipPath: isScrolled ? "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" : "none",
                    background: isActive ? "rgba(240, 180, 41, 0.1)" : "transparent",
                    boxShadow: isActive ? "0 0 15px rgba(240, 180, 41, 0.2)" : "none",
                    borderRadius: isScrolled ? "0" : "8px",
                  }}
                  onClick={closeMenu}
                >
                  {link.name}
                  {isActive && <span className="ml-2 inline-block w-1 h-1 bg-accent rounded-full" />}
                </Link>
              )
            })}
            <div className={`pt-4 mt-4 border-t ${isScrolled ? "border-accent/20" : "border-gray-200"}`}>
              <Link
                to="/contact"
                className="block w-full text-center relative bg-accent text-primary px-6 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden group"
                style={{
                  clipPath: isScrolled ? "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" : "none",
                  boxShadow: "0 0 20px rgba(240, 180, 41, 0.3)",
                  borderRadius: isScrolled ? "0" : "25px",
                }}
                onClick={closeMenu}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Started
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line - only show when scrolled */}
      {isScrolled && (
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      )}
    </nav>
  )
}

export default Navbar
