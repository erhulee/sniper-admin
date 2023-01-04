import { useState } from 'react'

export default function useModal(): [boolean, () => void, () => void] {
  const [vis, setVis] = useState(false)
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
