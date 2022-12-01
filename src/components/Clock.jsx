import React from 'react'
import "../styles/clock.css"

function reloj() {
  let time = new Date();
  let horas = time.getHours();
  let minutos = time.getMinutes();
  let segundos = time.getSeconds();
  let porcentajeSegundos;
  let porcentajeHoras;
  let porcentajeMinutos;

  if (horas >= 12) {
    porcentajeHoras = horas / 12 * 360;
  } else {
    porcentajeHoras = horas / 24 * 360;
  }
  
  porcentajeHoras += minutos / 60 * 30;
  porcentajeMinutos = minutos / 60 * 360;
  porcentajeSegundos = segundos / 60 * 360;

  document.getElementById("horas").style.transform = "rotate(" + porcentajeHoras + "deg)";
  document.getElementById("minutos").style.transform = "rotate(" + porcentajeMinutos + "deg)";
  document.getElementById("segundos").style.transform = "rotate(" + porcentajeSegundos + "deg)";
}
function Clock() {
  setInterval(reloj, 1000);
  return (

    <div className="clock">
      <div className="hand hour" data-hour-hand id='horas'></div>
      <div className="hand minute" data-minute-hand id='minutos'></div>
      <div className="hand second" data-second-hand id='segundos'></div>
      <div className="number number1">1</div>
      <div className="number number2">2</div>
      <div className="number number3">3</div>
      <div className="number number4">4</div>
      <div className="number number5">5</div>
      <div className="number number6">6</div>
      <div className="number number7">7</div>
      <div className="number number8">8</div>
      <div className="number number9">9</div>
      <div className="number number10">10</div>
      <div className="number number11">11</div>
      <div className="number number12">12</div>
    </div>

  )
}



export default Clock