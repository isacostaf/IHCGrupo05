import { useState, useEffect } from 'react'

export function useCheckboxState(id: string, defaultValue = false) {
  const [checked, setChecked] = useState(defaultValue)

  useEffect(() => {
    // Load state from localStorage on mount
    const savedState = localStorage.getItem(`checkbox-${id}`)
    if (savedState !== null) {
      setChecked(JSON.parse(savedState))
    }
  }, [id])

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked)
    localStorage.setItem(`checkbox-${id}`, JSON.stringify(newChecked))
  }

  return [checked, handleChange] as const
} 