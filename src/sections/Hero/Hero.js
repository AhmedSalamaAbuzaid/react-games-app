import {PrimaryButton} from '../../components/index'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-main'>
      <div className='hero-text'>
        <h6 className='hero-subtitle'>Welcom To Cyborg</h6>
        <h6 className='hero-title'><em>Browse </em>Our Popular Games Here</h6>
        <PrimaryButton>Browse Now</PrimaryButton>
      </div>
    </div>
  )
}

export default Hero