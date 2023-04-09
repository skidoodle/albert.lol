import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      aria-label='Switch Theme'
      type='button'
      className='mr-5 mt-5 flex ml-auto'
      onClick={() => toggle()}
    >
      {theme === 'light' ? (
        <BsMoonFill style={{ fill: 'black' }} size={25} />
      ) : (
        <BsSunFill size={25} />
      )}
    </button>
  );
};
