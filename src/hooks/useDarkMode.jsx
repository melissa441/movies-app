"use client";

import { useState, useEffect } from "react";
import { darkMode } from "../utils/darkMode";

export function useDarkMode() {
  // Initialize from localStorage or default to false
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) {
        return JSON.parse(saved);
      }
      // Optional: check system preference if no saved value
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Apply dark mode changes and save to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      darkMode.setDarkMode(isDarkMode);
      localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  // Initialize dark mode on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) {
        const savedTheme = JSON.parse(saved);
        setIsDarkMode(savedTheme);
        darkMode.setDarkMode(savedTheme);
      } else {
        // No saved preference, check system preference
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setIsDarkMode(systemPrefersDark);
        darkMode.setDarkMode(systemPrefersDark);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, toggleDarkMode };
}
