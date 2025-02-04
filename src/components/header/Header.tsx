import { NavigationBar } from "./NavigationBar"
import { ActionBar } from "./ActionBar"

export function Header() {
  return (
    <header className="border-b">
      <div className="container w-full px-8 flex h-14 items-center justify-between">
        <NavigationBar />
        <ActionBar />
      </div>
    </header>
  )
}

