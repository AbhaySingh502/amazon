import React from 'react'
import CurrencyFormat from "react-currency-format"
import '../css/sub_up.css'
function Subtotal() {
  return (
    <div className='subtotal' >
      <div className='sub_items'>
     <CurrencyFormat
      renderText ={(value)=>(
        <>
        <p>
          Subtotal(0 items): <strong>0</strong>
        </p>
        <small className='Sub_gift'>
          <input type='checkbox'/> This order conatis a gift
        </small>
        </>
     )}
        decimalScale ={2}
        value ={0}
        displayType ={"text"}
        thousandSeprator = {true}
        prefix ={"$"}

     />
     <button>Procead to checkout</button>
     </div>
    </div>
  )
}

export default Subtotal
