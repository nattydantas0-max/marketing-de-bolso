import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import HowItWorks from './components/HowItWorks'
import Tools from './components/Tools'
import Demo from './components/Demo'
import Benefits from './components/Benefits'
import Closing from './components/Closing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhatIs />
        <HowItWorks />
        <Tools />
        <Demo />
        <Benefits />
        <Closing />
      </main>
      <Footer />
    </div>
  )
}

export default App
