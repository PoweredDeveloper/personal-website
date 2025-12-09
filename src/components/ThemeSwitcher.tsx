import { useEffect, useState } from 'react'

// Icons
import { LuSun } from 'react-icons/lu'
import { LuMoon } from 'react-icons/lu'

const STORAGE_THEME_KEY = 'theme'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_THEME_KEY)) return
    setIsDark(JSON.parse(localStorage.getItem(STORAGE_THEME_KEY) || ''))
  })

  const handleThemeChange = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem(STORAGE_THEME_KEY, JSON.stringify(isDark))
  }

  return (
    <button onClick={handleThemeChange} className="bg-surface hover:bg-surface-2 cursor-pointer rounded-full p-2">
      {isDark ? <LuSun className="size-7" /> : <LuMoon className="size-7" />}
    </button>
  )
}
