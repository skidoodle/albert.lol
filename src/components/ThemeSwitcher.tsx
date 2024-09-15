import { VscColorMode } from 'react-icons/vsc'
import { useTheme } from 'next-themes'
import { useCallback } from 'react'
import { motion } from 'framer-motion'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme, setTheme])

  return (
    <motion.button
      aria-label='Switch Theme'
      type='button'
      className={`fixed top-5 right-5 p-3 rounded-full ${
        theme === 'light' ? 'hover:bg-gray-300' : 'dark:hover:bg-gray-700'
      }`}
      onClick={toggleTheme}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <VscColorMode size={30} />
      </motion.div>
    </motion.button>
  )
}
