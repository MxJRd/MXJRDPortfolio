import classNames from 'classnames'
import { ReactComponent as GithubIcon } from '../../assets/github.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg'
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'
import { ReactComponent as EmailIcon } from '../../assets/mail.svg'
import { ReactComponent as ClosedChevronIcon } from '../../assets/chevron-right.svg'
import { bundleClickHandlerAndAnimation, fetchButtonSize } from '../../helpers'
import { useState } from 'react'

type Icons = 'phone' | 'github' | 'linkedin' | 'email' | 'right-chevron'
type Sizes = 'small' | 'medium' | 'large'
type Colors = 'blue' | 'black'

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
}

const CustomButton = ({ iconName, clickHandler = () => null, textContent = '', size = 'medium', color = 'blue' }: CustomButtonProps) => {
  const [clickedAnimation, setClickedAnimation] = useState<boolean>(false)
  const iconOnly = 'border-2 rounded'
  const icon = fetchIcon(iconName)
  const buttonSize = fetchButtonSize(size)
  const buttonColor = fetchColor(color)

  return (
    <div>
      <button
        className={classNames(
          `${iconName ? iconOnly : ''}`,
          `${clickedAnimation ? 'animate-clickPulse' : ''}`,
          buttonSize,
          buttonColor,
          'hover:bg-gray-300 cursor-pointer'
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

export default CustomButton
