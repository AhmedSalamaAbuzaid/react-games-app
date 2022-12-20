import './MostPopular.css'
import {Card} from '../../components/index'
const MostPopular = () => {
  return (
    <>
    <div className='section-wrapper'>
        <div className='section-header'>
            <h4>Most Popular</h4>
        </div>
        <div className='most-popular-items'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    </>
  )
}

export default MostPopular