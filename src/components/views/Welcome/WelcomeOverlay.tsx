import MXJRDLogo from '../../../assets/MXJRDLogo.png'

const WelcomeOverlay = ({ animateDisappear }: { animateDisappear: boolean }) => {
  return (
    <div className={`w-[400px] ml-auto mr-auto max-w-[400px] ${animateDisappear ? 'animate-ping' : ''}`}>
      <div className='relative flex flex-col'>
        <img src={MXJRDLogo} alt='MXJRD logo :)' className='max-h-screen rounded-full shadow-lg' />
      </div>
    </div>
  )
}

export default WelcomeOverlay