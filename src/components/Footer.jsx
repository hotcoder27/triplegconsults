"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")

    // Reset after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000)
  }

  const currentYear = new Date().getFullYear()

  const footerSections = {
    services: {
      title: "Our Services",
      links: [
        {
          name: "Tax Planning & Preparation",
          href: "/services/tax-planning",
          description: "Comprehensive tax services",
        },
        {
          name: "Business Consulting",
          href: "/services/business-consulting",
          description: "Strategic business advice",
        },
        { name: "Investment Advisory", href: "/services/investment-advisory", description: "Portfolio management" },
        { name: "Retirement Planning", href: "/services/retirement-planning", description: "Secure your future" },
        { name: "Estate Planning", href: "/services/estate-planning", description: "Wealth transfer strategies" },
        { name: "Bookkeeping Services", href: "/services/bookkeeping", description: "Financial record management" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about", description: "Our story and mission" },
        { name: "Our Team", href: "/team", description: "Meet our experts" },
        { name: "Careers", href: "/careers", description: "Join our team" },
        { name: "News & Insights", href: "/blog", description: "Latest financial insights" },
        { name: "Case Studies", href: "/case-studies", description: "Client success stories" },
        { name: "Contact Us", href: "/contact", description: "Get in touch" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Financial Calculator", href: "/tools/calculator", description: "Planning tools" },
        { name: "Tax Calendar", href: "/resources/tax-calendar", description: "Important dates" },
        { name: "Financial Guides", href: "/resources/guides", description: "Educational content" },
        { name: "Market Updates", href: "/market-updates", description: "Current market insights" },
        { name: "Webinars", href: "/webinars", description: "Educational sessions" },
        { name: "Client Portal", href: "/portal", description: "Secure access" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help", description: "Get assistance" },
        { name: "FAQ", href: "#faq-section", description: "Common questions" },
        { name: "Contact Support", href: "/support", description: "Technical help" },
        { name: "Schedule Consultation", href: "/consultation", description: "Book a meeting" },
        { name: "Emergency Contact", href: "/emergency", description: "Urgent assistance" },
        { name: "Feedback", href: "/feedback", description: "Share your thoughts" },
      ],
    },
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/yourcompany",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourcompany",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/yourcompany",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/yourcompany",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yourcompany",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.036.388a6.5 6.5 0 0 0-2.357 1.533A6.5 6.5 0 0 0 .146 4.294c-.183.484-.306 1.058-.34 2.006C-.028 7.247 0 7.654 0 12.017c0 4.624.067 5.052.681 6.855.174.485.454.92.892 1.357.438.438.872.718 1.357.892.484.174 1.058.297 2.006.331.95.034 1.357.048 5.713.048 4.624 0 5.052-.067 6.855-.681.485-.174.92-.454 1.357-.892.438-.438.718-.872.892-1.357.174-.484.297-1.058.331-2.006.034-.95.048-1.357.048-5.713 0-4.624-.067-5.052-.681-6.855-.174-.485-.454-.92-.892-1.357A6.5 6.5 0 0 0 19.706.146c-.484-.183-1.058-.306-2.006-.34C16.751-.028 16.344 0 12.017 0zm0 2.16c4.624 0 5.052.067 6.855.681.485.174.92.454 1.357.892.438.438.718.872.892 1.357.174.484.297 1.058.331 2.006.034.95.048 1.357.048 5.713 0 4.624-.067 5.052-.681 6.855-.174.485-.454.92-.892 1.357-.438.438-.872.718-1.357.892-.484.174-1.058.297-2.006.331-.95.034-1.357.048-5.713.048-4.624 0-5.052-.067-6.855-.681-.485-.174-.92-.454-1.357-.892-.438-.438-.718-.872-.892-1.357-.174-.484-.297-1.058-.331-2.006-.034-.95-.048-1.357-.048-5.713 0-4.624.067-5.052.681-6.855.174-.485.454-.92.892-1.357.438-.438.872-.718 1.357-.892.484-.174 1.058-.297 2.006-.331.95-.034 1.357-.048 5.713-.048z" />
          <path d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zm0 10.179a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.441 1.441 0 1 1-2.883 0 1.441 1.441 0 0 1 2.883 0z" />
        </svg>
      ),
    },
  ]

  const certifications = [
    { name: "CPA", description: "Certified Public Accountant" },
    { name: "CFP", description: "Certified Financial Planner" },
    { name: "FINRA", description: "Financial Industry Regulatory Authority" },
    { name: "SIPC", description: "Securities Investor Protection Corporation" },
  ]

  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10">

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Your Trusted Financial Partner</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  With over 20 years of experience serving individuals and businesses, we provide comprehensive
                  financial services designed to help you achieve your goals and secure your financial future.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Main Office</div>
                    <div className="text-white/80">Street, Suite 500</div>
                    <div className="text-white/80">Business District, YZ 10001</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">(123) 456-7890</div>
                    <div className="text-white/80">Monday - Friday: 8:00 AM - 6:00 PM EST</div>
                    <div className="text-white/80">Saturday: 9:00 AM - 2:00 PM EST</div>
                    <div className="text-white/60 text-sm mt-1">Emergency line available 24/7</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">info@yourcompany.com</div>
                    <div className="text-white/80">General inquiries and support</div>
                    <div className="text-white/60 text-sm mt-1">We respond within 24 hours</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 text-white">Connect With Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
                      title={social.name}
                    >
                      <span className="group-hover:text-primary transition-colors duration-300">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-white">
          <div className="container mx-auto px-6 lg:px-8 py-8">
            <div className="text-center mb-6">
              <h4 className="font-semibold text-lg mb-4 text-white">Professional Certifications & Memberships</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {certifications.map((cert) => (
                  <div key={cert.name} className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-accent font-bold text-lg">{cert.name}</span>
                    </div>
                    <div className="text-white/80 text-sm font-medium">{cert.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-white/70 text-sm text-center lg:text-left">
                © {currentYear} Your Financial Company. All rights reserved. | Licensed in State, Country
              </div>

              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6 text-sm text-white/70">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span>Bank-Level Security</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>FINRA Member</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>SIPC Protected</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>BBB A+ Rating</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
