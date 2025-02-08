import { Link } from "react-router-dom"
import '@fontsource/manrope/400.css';

interface NavItemProps {
  href: string
  label: string
}

function NavItem({ href, label }: NavItemProps) {
  return (
    <Link to={href} className="text-sm font-manrope transition-colors hover:text-primary">
      {label}
    </Link>
  )
}

export function NavigationBar() {
  return (
    <nav className="flex items-center space-x-6">
      <NavItem href="/" label="Home" />
      <NavItem href="/about" label="About" />
    </nav>
  )
}


