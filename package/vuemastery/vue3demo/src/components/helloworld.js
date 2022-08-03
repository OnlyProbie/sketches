import { ref } from 'vue'
export default function usePromise (_fn) {
  const loading = ref(false)
  const results = ref(null)
  const error = ref(null)
  const createPromise = async (..._args) => {
    loading.value = true
    results.value = null
    error.value = null
    try {
      results.value = await _fn(..._args)
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }
  return { results, loading, error, createPromise }
}