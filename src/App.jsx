import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./pages/Contact"
import AboutPage from "./pages/AboutPage"
import Testimonials from "./components/Testimonials"
import Faq from "./components/Faqs"
import AccountingPage from "./pages/AccountingPage"
import AdvisoryPage from "./pages/AdvisoryPage"
import TaxPage from "./pages/TaxPage"


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

       <main className="flex-1 pt-25">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="py-2 space-y-16 md:space-y-20 lg:space-y-24">
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
                    <Faq />
                  </div>
                </>
                
              }
            />
            <Route
              path="/about"
              element={
                <div>
                  <AboutPage />
                </div>
              }
            />
            <Route
              path="/accounting"
              element={
                <div>
                  <AccountingPage />
                </div>
              }
            />
            <Route
              path="/advisory"
              element={
                <div className="py-6 md:py-20 lg:py-24">
                  <AdvisoryPage />
                </div>
              }
            />
            <Route
              path="/tax"
              element={
                <div className="py-6 md:py-20 lg:py-24">
                  <TaxPage />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div>
                  <Contact />
                </div>
              }
            />
          </Routes>
        </main>

        <div className="mt-6">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
