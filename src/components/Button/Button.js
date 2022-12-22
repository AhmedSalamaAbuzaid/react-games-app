import './Button.css'

const Button = (props) => {
  return (
    <div className='button primary-btn'>
        <a href='/#' >{props.children}</a>
    </div>
  )
}


const SacandaryButton = (props) => {
    return (
    <div  className='button secandary-btn'>
        <a href='/#' >{props.children}</a>
    </div>
    )
  }

export default Button
export  {SacandaryButton} 