import {useCallback} from 'react'

export const useStorage = () => {
  const setByKey = useCallback((key, value) => {
    return localStorage.setItem(key, value)
  }, [])

  const getByKey = useCallback((key) => {
    return localStorage.getItem(key)
  }, [])

  return {setByKey, getByKey}
}
