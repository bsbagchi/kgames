const API_BASE_URL = 'https://api.yourproject.com';

export async function fetchData(endpoint: string, options = {}) {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
}
