// App.tsx

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/header/Header"
import { Footer } from "@/components/footer/Footer"
import { MainContent } from "./components/main-content/MainContent"
import { About } from "./components/About"
import './index.css'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App