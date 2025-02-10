// App.tsx

import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/header/Header"
import { Footer } from "@/components/footer/Footer"
import './index.css'

// Lazy-loaded components
const MainContent = lazy(() => import('@/components/main-content/MainContent'));
const About = lazy(() => import('@/components/About'));

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Header />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex-1 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground"></div>
  </div>
);

export default App