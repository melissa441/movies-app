export const darkMode = {
  setDarkMode(isDark) {
    if (typeof document === "undefined") return

    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  },

  toggleDarkMode(current) {
    const newMode = !current
    this.setDarkMode(newMode)
    return newMode
  },
}
