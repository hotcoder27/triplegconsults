import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./pages/Contact"
import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage"
import Testimonials from "./components/Testimonials"
import CTA from "./components/Cta"
import FAQ from "./components/Faqs"


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

       <main className="flex-1 pt-6 max-sm:pt-30 pb-10">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="space-y-16 md:space-y-20 lg:space-y-24">
                    <Hero />
                  </div>
                  <div className="space-y-16 md:space-y-20 lg:space-y-24">
                    <Services />
                  </div>
                  <div className="space-y-16 md:space-y-20 lg:space-y-24">
                    <About />
                  </div>
                  <div className="space-y-16 md:space-y-20 lg:space-y-24">
                    <Testimonials />
                  </div>
                  <div className="space-y-16 md:space-y-20 lg:space-y-24">
                    <CTA />
                  </div>
                  <div className="space-y-16 md:space-y-20 lg:space-y-24">
                    <FAQ />
                  </div>
                </>
                
              }
            />
            <Route
              path="/about"
              element={
                <div className="py-16 md:py-20 lg:py-24">
                  <AboutPage />
                </div>
              }
            />
            <Route
              path="/services"
              element={
                <div className="py-16 md:py-20 lg:py-24">
                  <ServicesPage />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="py-16 md:py-20 lg:py-24">
                  <Contact />
                </div>
              }
            />
          </Routes>
        </main>

        <div className="mt-16 md:mt-20 lg:mt-24">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
