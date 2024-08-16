import { ref } from 'vue'
// import * as Sentry from '@sentry/vue'

export function useHandleErrors() {
  const error = ref(null)

  function captureError(err) {
    error.value = err
    // Sentry.captureException(err) // Debe usarse el API con las credenciales de Sentry...
  }

  return {
    error,
    captureError
  }
}
