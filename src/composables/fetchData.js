const BASE_URL = import.meta.env.VITE_API_URL;

export async function useFetchAllData() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    return { data, error: null };
  } catch {
    return { data: null, error: 'Error al cargar los datos del API' };
  }
}

export async function useFetchDataByID({ id }) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();

    return { data, error: null };
  } catch (error) {
    return { data: null, error: 'Error al cargar los datos del API' };
  }
}
