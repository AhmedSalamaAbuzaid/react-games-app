import './MostPopular.css'
import {Card} from '../../components/index'
import popular_01 from '../../assets/images/popular-01.jpg'
import popular_02 from '../../assets/images/popular-02.jpg'
import popular_03 from '../../assets/images/popular-03.jpg'
import popular_04 from '../../assets/images/popular-04.jpg'
import popular_05 from '../../assets/images/popular-05.jpg'


const MostPopular = () => {
  return (
    <>
    <div className='section-wrapper'>
        <div className='section-header'>
            <h4>Most Popular</h4>
        </div>
        <div className='most-popular-items'>
            <Card image={popular_01} category="sandbox" rate="3.8" download="2.3M" title="fortnite"/>
            <Card image={popular_02} category="stream-X" rate="4.8" download="1.9M" title="PubG"/>
            <Card image={popular_03} category="legendary" rate="2.7" download="5.2M" title="Dota2"/>
            <Card image={popular_04} category="battel s" rate="3.9" download="4.8M" title="Cs-Go"/>
            <Card image={popular_05} category="race" rate="4.4" download="6.1M" title="L3ba"/>
            <Card image={popular_01} category="sandbox" rate="3.8" download="2.3M" title="fortnite"/>
            <Card image={popular_02} category="stream-X" rate="4.8" download="1.9M" title="PubG"/>
            <Card image={popular_03} category="legendary" rate="2.7" download="5.2M" title="Dota2"/>
            <Card image={popular_04} category="battel s" rate="3.9" download="4.8M" title="Cs-Go"/>
            <Card image={popular_05} category="race" rate="4.4" download="6.1M" title="L3ba"/>
        </div>
    </div>
    </>
  )
}

export default MostPopular