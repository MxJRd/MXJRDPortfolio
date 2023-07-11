import { StateUpdater, useEffect, useState } from 'preact/hooks'

const useLocalStorage = <S>(storageKey: string, fallbackState: S): [S, StateUpdater<S>] => {
  const existingValue = localStorage.getItem(storageKey)
  let defaultValue: S

  try {
    defaultValue = JSON.parse(existingValue ?? '')
  } catch {
    defaultValue = fallbackState
  }

  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value))
  }, [value, storageKey])

  return [value, setValue]
}

export default useLocalStorage
