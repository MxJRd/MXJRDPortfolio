import { useEffect, useRef } from "react"

const useClickAway = (callback: () => void) => {
  const ref = useRef<HTMLElement>()
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(ref.current && !ref.current.contains(e.target as Node)) { // if the element isn't a child of the currentElement, do things
        callback()
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => document.removeEventListener('click', handleClickOutside, true)
  }, [ref])

  return ref
}

export default useClickAway
