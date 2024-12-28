import { writable } from 'svelte/store';

// Check if the code is running in the browser
const isBrowser = typeof window !== 'undefined';

// Initialize theme based on localStorage (browser) or fallback to light (server-side)
const storedTheme = isBrowser ? localStorage.getItem('theme') : 'light';
export const theme = writable(storedTheme || 'light');

// Subscribe to changes and update localStorage (only in the browser)
theme.subscribe((value) => {
  if (isBrowser && value) {
    localStorage.setItem('theme', value);
    document.documentElement.classList.toggle('dark', value === 'dark');
  }
});
