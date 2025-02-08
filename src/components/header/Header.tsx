import { NavigationBar } from "./NavigationBar"
import { ActionBar } from "./ActionBar"

export function Header() {
  return (
    // Freeze the header
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container w-full px-8 flex h-14 items-center justify-between">
        <NavigationBar />
        <ActionBar />
      </div>
    </header>
  )
}

