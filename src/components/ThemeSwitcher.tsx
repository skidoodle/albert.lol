import { VscColorMode } from 'react-icons/vsc'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    switch (theme) {
      case 'dark':
        setTheme('light')
        break
      case 'light':
        setTheme('dark')
        break
      default:
        setTheme('dark')
        break
    }
  }

  return (
    <button
      aria-label='Switch Theme'
      type='button'
      className={`ml-auto mr-5 mt-5 flex transition duration-300 ease-in-out ${
        theme === 'light' ? 'hover:bg-gray-300' : 'dark:hover:bg-gray-700'
      } p-2 rounded-full`}
      onClick={() => toggle()}
    >
      <VscColorMode size={30} />
    </button>
  )
}
