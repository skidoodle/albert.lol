import { VscColorMode } from 'react-icons/vsc'
import { useTheme } from 'next-themes'
import { useCallback } from 'react'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme, setTheme])

  return (
    <button
      aria-label='Switch Theme'
      type='button'
      className={`fixed top-5 right-5 transition-colors duration-300 ease-in-out p-3 rounded-full ${
        theme === 'light' ? 'hover:bg-gray-300' : 'dark:hover:bg-gray-700'
      }`}
      onClick={toggleTheme}
    >
      <VscColorMode size={30} />
    </button>
  )
}
