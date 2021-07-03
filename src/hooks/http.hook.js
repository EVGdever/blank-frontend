import {useState, useCallback} from 'react'
import config from 'config'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (
      url,
      method = 'GET',
      body = null,
      headers = {},
  ) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-type'] = 'application/json'
      }

      const response = await fetch(
          config.get('api.url') + url,
          {method, body, headers},
      )
      const data = response.json()

      setLoading(false)
      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return ({loading, request, error, clearError})
}
