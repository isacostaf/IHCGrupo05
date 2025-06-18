export function resetPageCheckboxes() {
  // Get all localStorage keys
  const keys = Object.keys(localStorage)
  
  // Filter keys that start with 'checkbox-'
  const checkboxKeys = keys.filter(key => key.startsWith('checkbox-'))
  
  // Remove all checkbox states
  checkboxKeys.forEach(key => {
    localStorage.removeItem(key)
  })
  
  // Reload the page to reflect changes
  window.location.reload()
} 