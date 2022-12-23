import './Browse.css'
import { Container, MySlider } from '../../components/index'; 
import { MySlider2 } from '../../components/MySlider/MySlider';
import {FeaturesGamesData} from '../../Data/index'
import {GamingLibraryData} from '../../Data/index'
import { SectionHeader, SectionWrapper } from '../../components';

const Browse = () => {

  return (
      <>
        <h1>BROWSE PAGE</h1>
        <Container>
          <SectionHeader>Our Galary</SectionHeader>
          <div className='browser-content'>
            <div className='myslider-two'>
              <MySlider2 slides={FeaturesGamesData} />
            </div>
            <div className='myslider-two'>
              <MySlider2 slides={GamingLibraryData} />
            </div>
          </div>
        </Container>
        
      </>
  )
}

export default Browse