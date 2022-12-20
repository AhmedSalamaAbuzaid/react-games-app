import './Card.css'
import popular_01 from '../../assets/images/popular-01.jpg'

const Card = () => {
  return (
    <div className='most-popular-item'>
        <div className='card-box'>
            <img alt="most-popular-item-pic" src={popular_01}/>
            <div className='most-popular-item-content'>
                <h4 className='most-popular-item-title'>
                    forntnine <br />
                    <span>sandbox</span>
                </h4>
                <ul>
                    <li><span>4.8</span></li>
                    <li><span>2.3</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card