import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    onSearch(query)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="relative flex items-center">
      <Button variant="ghost" size="icon" onClick={() => setIsVisible(!isVisible)} aria-label="Toggle search">
        <Search className="h-4 w-4" />
      </Button>
      {isVisible && (
        <div className="absolute right-0 top-full mt-2 bg-background border rounded-md shadow-lg z-10">
          <div className="flex items-center p-2">
            <Input
              type="text"
              placeholder="Search keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-[200px] mr-2"
            />
            <Button variant="ghost" size="icon" onClick={handleSearch} aria-label="Perform search">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)} aria-label="Close search">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

