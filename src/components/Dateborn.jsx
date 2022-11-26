import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/dateborn.css"
import Cuadrado from './Cuadrado';


export default function Dateborn() {
    const [startdate, setStartDate]= useState(new Date());
    const [edadmesdia, setEdadmesdia] = useState("");

    const calcularborn=(startdate)=>{
      const  birthday_arr = startdate.split(",");
      
      const hoy=new Date();
      
      const ano = parseInt(birthday_arr[2]);
      if (isNaN(ano))
         return false
      
      const mes = parseInt(birthday_arr[1]);
      if (isNaN(mes))
         return false
      
      const dia = parseInt(birthday_arr[0]);
         if (isNaN(dia))
         return false
         
      let edad = (hoy.getFullYear() + 1900) - ano;
      if (hoy.getMonth()+1 < mes) {
        edad--;
      }
      if ((mes === hoy.getMonth()+1) && (hoy.getDate() < dia)) {
        edad--;
      }
      if (edad > 1900) {
        edad -= 1900;
      }
      
      
      // calculamos los meses
      
      let meses;
      if (hoy.getMonth()+1 > mes && dia > hoy.getDate())
        meses = hoy.getMonth()+1  - mes - 1;
      else if (hoy.getMonth()+1 > mes)
        meses = hoy.getMonth()+1 - mes
      if (hoy.getMonth()+1 < mes && dia < hoy.getDate())
        meses = 12 - (mes - hoy.getMonth()+1);
      else if (hoy.getMonth()+1< mes)
        meses = 12 - (mes - hoy.getMonth()+1 + 1);
      if (hoy.getMonth()+1 === mes && dia > hoy.getDate())
        meses = 11;
      
      // calculamos los dias
      let dias ;
      if (hoy.getDate()> dia)
        dias = hoy.getDate() - dia;
      if (hoy.getDate() < dia) {
        const ultimoDiaMes = new Date(hoy.getFullYear(), hoy.getMonth()+1 - 1, 0);
        dias = ultimoDiaMes.getDate() - (dia - hoy.getDate());
      }
      setEdadmesdia(edad + "," + meses + "," + dias);
      }
      const hoy=new Date();
    return (
    <div className='cuadrado'>
     <div className="hijo1">
     <DatePicker props={"fecha"} selected={startdate} onChange={(date)=> setStartDate(date)} 
    dateFormat="dd-M-yyyy" showYearDropdown
    yearDropdownItemNumber={50}
    scrollableYearDropdown
    maxDate={hoy}/> 
    
  
    <br/>
   
    </div>   
    <div className='hijo2'>
    <button onClick={event=>calcularborn( `${startdate.getDate()},${startdate.getMonth()+1},${startdate.getFullYear()}`)}> Calcular</button>
   
    </div>
     
    <Cuadrado calcularborn={`${edadmesdia}`}/>
    </div>


  )
}
