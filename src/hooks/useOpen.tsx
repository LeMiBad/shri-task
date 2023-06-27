import { useState } from "react"




const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false)

  const switchHandler = () => {
    setIsOpen(prev => !prev)
  }

  return {
    isOpen,
    switchHandler
  }
}

export default useOpen