import { Link } from "react-router-dom"
import '@fontsource/manrope/400.css';

export function NavigationBar() {
  return (
    <nav className="flex items-center space-x-4">
      <Link to="/" className="font-manrope hover:text-sky-400 pr-1">
        Home
      </Link>
      <Link to="/about" className="font-manrope hover:text-sky-400">
        About
      </Link>
    </nav>
  )
}


