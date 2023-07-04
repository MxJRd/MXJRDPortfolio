import classNames from 'classnames'

import { ReactComponent as GithubIcon } from '../../assets/github.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg'
import { ReactComponent as PhoneIcon } from '../../assets/phone.svg'
import { ReactComponent as EmailIcon } from '../../assets/mail.svg'
import { ReactComponent as ClosedChevronIcon } from '../../assets/chevron-right.svg'

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

const fetchSize = (size: string) => {
  switch(size) {
    case 'small':
      return 'p-1'
    case 'medium':
      return 'p-2'
    case 'large':
      return 'p-3'
  }
}

const fetchIcon = (iconName: Icons) => {
  switch(iconName) {
    case 'phone':
      return <PhoneIcon />;
    case 'github':
      return <GithubIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
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
  clickHandler?: ({ ...args }) => void
  size: Sizes
  color?: Colors
}

const CustomButton = ({ iconName, clickHandler, textContent = '', size = 'medium', color = 'blue' }: CustomButtonProps) => {
  const iconOnly = 'border-2 rounded'

  const icon = fetchIcon(iconName)
  const buttonSize = fetchSize(size)
  const buttonColor = fetchColor(color)
  return (
    <div>
      <button className={classNames(`${iconName ? iconOnly : ''}`, buttonSize, buttonColor)} onClick={clickHandler}>
        { iconName && icon}
        { textContent && textContent }
      </button>
    </div>
  )
}

export default CustomButton
