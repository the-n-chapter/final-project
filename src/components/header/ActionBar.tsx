import { SearchBar } from "./SearchBar"
import { ThemeToggle } from "./ThemeToggle"

export function ActionBar() {
  return (
    <div className="flex items-center space-x-2">
      <SearchBar onSearch={(query) => console.log("Search query:", query)} />
      <ThemeToggle />
    </div>
  )
}