import { ref } from 'vue'

export function useFetchAllData() {
  const data = ref(null)
  const error = ref(null)

  fetch(import.meta.env.VITE_API_URL)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}

export function useFetchDataByID({ id }) {
  const data = ref(null)
  const error = ref(null)

  fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}
