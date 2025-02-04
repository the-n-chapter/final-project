import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/header/Header"
import { Footer } from "@/components/footer/Footer"
import { MainContent } from "./components/main-content/MainContent"
import './index.css'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App