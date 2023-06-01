import './CardWidget.css'

const CardWidget = () => {
    const imgcarrito = "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png"
  return (
    <div>
        <img className='imgcarrito' src={imgcarrito}/>
        <strong>10</strong>
    </div>
  )
}

export default CardWidget