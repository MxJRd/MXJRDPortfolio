import { useCallback, useEffect, useState } from 'react'

const useSize = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const setSizes = useCallback(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [setWidth, setHeight])

  useEffect(() => {
    window.addEventListener('resize', setSizes)
    setSizes()
    return () => window.removeEventListener('resize', setSizes)
  }, [setSizes])

  return [width, height]
}

export default useSize
