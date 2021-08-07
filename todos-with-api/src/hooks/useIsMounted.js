import { useEffect, useRef } from 'react'

// src/hooks/useIsMounted.js
export const useIsMounted = () => {
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    return () => (isMounted.current = false)
  }, [])
  return isMounted
}