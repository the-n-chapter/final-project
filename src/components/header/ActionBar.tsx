// ActionBar.tsx

import { ThemeToggle } from "./ThemeToggle"

export function ActionBar() {
  return (
    <div className="flex items-center space-x-2">
      <ThemeToggle />
    </div>
  )
}