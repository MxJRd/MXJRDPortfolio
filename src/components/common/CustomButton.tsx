import classNames from 'classnames'
import { ReactComponent as GithubIcon } from '../../assets/github.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg'
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'
import { ReactComponent as EmailIcon } from '../../assets/mail.svg'
import { ReactComponent as ClosedChevronIcon } from '../../assets/chevron-right.svg'
import { bundleClickHandlerAndAnimation, fetchButtonSize } from '../../helpers'
import { useState } from 'react'
import { makeShimmer } from '../../animations'

type Icons = 'phone' | 'github' | 'linkedin' | 'email' | 'right-chevron'
type Sizes = 'small' | 'medium' | 'large'
type Colors = 'blue' | 'black'
type BGColors = 'white' | 'slate'

const fetchBGColor = (bgColor: string) => {
  switch(bgColor) {
    case 'white':
      return 'bg-[#ffffff]'
    case 'slate':
      return 'bg-slate-100'
  }
}

const fetchColor = (color: string) => {
  switch(color) {
    case 'blue':
      return 'text-blue-500'
    case 'black':
      return 'text-raisin-black'
  }
}

const fetchIcon = (iconName: Icons) => {
  switch(iconName) {
    case 'phone':
      return <PhoneIcon />
    case 'github':
      return <GithubIcon />
    case 'linkedin':
      return <LinkedInIcon />
    case 'email':
      return <EmailIcon />
    case 'right-chevron':
      return <ClosedChevronIcon />
    default : ''
  }
}

interface CustomButtonProps {
  iconName: Icons
  textContent?: string
  clickHandler?: (...args: any) => void
  size: Sizes
  color?: Colors
  bgColor: BGColors
}

const CustomButton = ({ iconName, clickHandler = () => null, textContent = '', size = 'medium', color = 'blue', bgColor = 'white' }: CustomButtonProps) => {
  const [clickedAnimation, setClickedAnimation] = useState<boolean>(false)
  const iconOnly = 'border-2 rounded'
  const icon = fetchIcon(iconName)
  const buttonSize = fetchButtonSize(size)
  const buttonColor = fetchColor(color)
  const backgroundColor = fetchBGColor(bgColor)
  return (
    <div>
      <button
        className={classNames(
          `${iconName ? iconOnly : ''}`,
          `${clickedAnimation ? 'animate-click-pulse' : ''}`,
          buttonSize,
          buttonColor,
          'hover:bg-gray-300 cursor-pointer overflow-hidden',
          'before:animate-shimmer',
          backgroundColor,
          `${makeShimmer}`
        )}
        onClick={() => bundleClickHandlerAndAnimation(setClickedAnimation, clickHandler)}
        onAnimationEnd={() => setClickedAnimation(false)}
      >
        { iconName && icon}
        { textContent && textContent }
      </button>
    </div>
  )
}

// (to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)

export default CustomButton
