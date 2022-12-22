import './Browse.css'
import Carousel from 'react-bootstrap/Carousel';
import FeaturesGamesData from '../../Data/FeaturesGamesData';
import { SectionHeader, SectionWrapper } from '../../components';

const Browse = () => {
  const sliders =
  FeaturesGamesData.map(item => {
  return <Carousel.Item>
          <img
            className="d-block w-100"
            src={item.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>Nulla vitae elit libero, {item.category}</p>
          </Carousel.Caption>
        </Carousel.Item>
  })
  
  return (
      <>
        <h1>BROWSE PAGE</h1>
        <SectionWrapper>
          <SectionHeader>Features Games</SectionHeader>
          <Carousel fade>
              {sliders}
          </Carousel>
        </SectionWrapper>
      </>
  )
}

export default Browse