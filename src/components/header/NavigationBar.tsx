import { Link } from "react-router-dom"
import '@fontsource/manrope/400.css';

export function NavigationBar() {
  return (
    <nav className="flex items-center space-x-4">
      <Link to="/" className="text-sm font-manrope hover:text-primary">
        Home
      </Link>
      <Link to="/about" className="text-sm font-manrope text-muted-foreground hover:text-primary">
        About
      </Link>
    </nav>
  )
}


