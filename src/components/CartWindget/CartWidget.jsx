import React from 'react'
import './CartWidget.css'

export const CartWidget = () => {
    const imgCarrito = "https://codigofuentenet.files.wordpress.com/2013/02/shoppingcartempty.jpg"
  return (
    <div>
        <img className='imgCarrito' src = {imgCarrito} alt="Carrito" />
        <strong>21</strong>
    </div>
  )
}

export default CartWidget