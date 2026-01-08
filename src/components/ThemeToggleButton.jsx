import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

function ThemeToggleButton() {

    const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className='px-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

export default ThemeToggleButton