import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { NAV_LINKS, SITE_NAME } from "../constants"
import { logoImg } from "../utils"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
  }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-26 mt-2">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg p-2 -m-2"
            onClick={closeMenu}
          >
            <div className="w-40 max-sm:w-30 max-sm:h-15 h-18 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 bg-white">
              <img
                src={logoImg || "/placeholder.svg"}
                alt={`${SITE_NAME} Logo`}
                className="w-full h-full object-fill p-2 rounded-full"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg font-normal tracking-wide transition-all duration-300 ${
                    isActive 
                      ? "text-primary" 
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                  onClick={closeMenu}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="relative bg-primary from-primary to-primary/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  }`}
                />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 space-y-4 border-t border-gray-100">
            {NAV_LINKS.map((link, index) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl font-normal tracking-wide transition-all duration-300 transform ${
                    isActive
                      ? "text-primary translate-x-2"
                      : "text-gray-500 hover:text-gray-800 hover:translate-x-2"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                  onClick={closeMenu}
                >
                  {link.name}
                  {isActive && (
                    <span className="ml-2 inline-block w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              )
            })}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                to="/contact"
                className="block w-full text-center relative bg-primary from-primary to-primary/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                onClick={closeMenu}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar