import { VscColorMode } from 'react-icons/vsc'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const buttonStyle =
    theme === 'light' ? 'hover:bg-gray-300' : 'dark:hover:bg-gray-700'

  return (
    <button
      aria-label='Switch Theme'
      type='button'
      className={`ml-auto mr-5 mt-5 flex transition-colors duration-300 ease-in-out p-2 rounded-full ${buttonStyle}`}
      onClick={toggleTheme}
    >
      <VscColorMode size={30} />
    </button>
  )
}
