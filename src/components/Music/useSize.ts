import { useCallback, useEffect, useRef, useState } from 'react'

const useSize = (containerDimensions: { height: number, width: number }) => {
  const containerRef = useRef<HTMLElement>(null)
  const [width, setWidth] = useState(containerDimensions.width)
  const [height, setHeight] = useState(containerDimensions.height)

  const setSizes = useCallback(() => {
    setWidth(containerDimensions?.width)
    setHeight(containerDimensions?.height)
  }, [setWidth, setHeight])

  useEffect(() => {
    window.addEventListener('resize', setSizes)
    setSizes()
    return () => window.removeEventListener('resize', setSizes)
  }, [setSizes])

  return [width, height]
}

export default useSize
