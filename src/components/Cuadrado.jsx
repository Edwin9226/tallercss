import React from 'react'
import "../styles/cuadrado.css"
function Cuadrado({calcularborn}) {
  const datos = calcularborn.split(",");
  const [ano,mes,dia]=datos;
  return (
    <div className='cuadro'>
      
        <div className='hijo1'>
            {ano} <br/>
            Years
        </div>
        
        <div className='hijo2'>
        {mes} <br/>
            Months
        </div>
        
        <div className='hijo3'>
          {dia} <br/>
            Days
        </div>
    </div>
  )
}

export default Cuadrado