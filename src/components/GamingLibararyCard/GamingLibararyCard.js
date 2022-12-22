import './GamingLibararyCard.css'
import {SacandaryButton} from "../../components/index";
const GamingLibararyCard = (props) => {


  return (
    <div className='Gaming-library-card'>
        <ul>
            <li><img src={props.image} alt={props.id}/></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Dates Added</h4><span>{props.added}</span></li>
            <li><h4>Hours Played</h4><span>{props.played}</span></li>
            <li><h4>Currently</h4><span>{props.download}</span></li>
            <li><SacandaryButton>Download</SacandaryButton></li>
        </ul>
    </div>
  )
}

export default GamingLibararyCard