import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import PricingTable from './components/PricingTable'
import Faq from './components/Faq'
import ContactForm from './components/ContactForm'
import GitHubStats from './components/GitHubStats'
import ContributorsSearch from './components/ContributorsSearch'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-100 min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Features />
                  <About />
                  <Team />
                  <Testimonials />
                  <PricingTable />
                  <Faq />
                  <ContactForm />
                  <GitHubStats />
                  <ContributorsSearch />
                </>
              } />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
