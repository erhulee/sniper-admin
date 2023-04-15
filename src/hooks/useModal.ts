import { useState } from 'react'

export default function useModal(defaultValue: boolean = false):
  [boolean, () => void, () => void] {
  const [vis, setVis] = useState(defaultValue);

  return [
    vis,
    () => {
      setVis(true)
    },
    () => {
      setVis(false)
    }
  ]
}
