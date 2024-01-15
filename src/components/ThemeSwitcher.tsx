import { VscColorMode } from 'react-icons/vsc'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      aria-label='Switch Theme'
      type='button'
      className={`ml-auto mr-5 mt-5 flex transition-colors duration-300 ease-in-out p-2 rounded-full ${
        theme === 'light' ? 'hover:bg-gray-300' : 'dark:hover:bg-gray-700'
      }`}
      onClick={() => toggle()}
    >
      <VscColorMode size={30} />
    </button>
  )
}
