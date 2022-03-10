export function useStorage<T>(key: string, defaultValue?: T) {
  const [value, setValue] = useState(
    (JSON.parse(localStorage.getItem(key) as string) as T) ?? defaultValue,
  )

  return [
    value,
    (newValue: T) => {
      localStorage.setItem(key, JSON.stringify(newValue))
      return setValue(newValue)
    },
  ]
}
