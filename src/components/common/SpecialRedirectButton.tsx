import { useState } from "react"
import { makeButtonExpand, makeLift, makePressed } from "../../animations"

export const SpecialRedirectButton = ({ to, title, newTab }: { to: string, title: string, newTab?: boolean }) => {
  const [clickedAnimation, setClickedAnimation] = useState<boolean>(false)

  return (
    <a href={to} target={newTab ? '_blank' : '_self'}>
      <button
        className={
          `${makeLift} ${clickedAnimation ? makePressed : ''}
          ${makeButtonExpand}
          relative px-5 py-3 border-2 font-semibold text-raisin-black border-raisin-black bg-white hover:bg-gray-400 hover:text-blue-500
          rounded-br-lg rounded-tl-lg
          after:rounded-br-lg after:rounded-tl-lg
          `
        }
        onClick={() => setClickedAnimation(true)}
        onTransitionEnd={() => setClickedAnimation(false)}
      >
        {title}
      </button>
    </a>
  )
}