import { writable, type Writable } from 'svelte/store';

// Helper function to create a writable store synced with localStorage
function persistInLocalStorage<T>(key: string, initialValue: T): Writable<T> {
    const isBrowser = typeof window !== 'undefined'; // Check if running in the browser
    const storedValue = isBrowser ? localStorage.getItem(key) : null;
    const value = storedValue ? JSON.parse(storedValue) : initialValue;

    const store = writable(value);

    if (isBrowser) {
        store.subscribe((currentValue) => {
            localStorage.setItem(key, JSON.stringify(currentValue));
        });
    }

    return store;
}

// Store for sidebar open/close state
export const isSidebarOpen: Writable<boolean> = writable(false); // false by default (sidebar closed)

// Store for submenu open/close state, synced with localStorage
export const submenu: Writable<boolean> = persistInLocalStorage('submenu', false); // false by default
