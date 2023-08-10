import { useEffect, useState } from 'react'

const useSetViewTitle = (title: string) => {
  const [viewTitle, setViewTitle] = useState(title)
  useEffect(() => {
    setViewTitle(title)
  }, [])

  return { viewTitle, setViewTitle }
}

export default useSetViewTitle