import Honeycomb from '../../assets/honeycomb.svg'

const HoneycombBackground = () => {
  return (
    <img style={{ opacity: 0.015, zIndex: -1000 }} src={Honeycomb} className='h-full w-full absolute bottom-0 left-0 object-cover'/>
  )
}

export default HoneycombBackground
