import React, { useState } from 'react'
import "../styles/ims.css"
export default function Calcular() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    
    
    const [mensage, setMensage] = useState("");
    function calcularIMC(){
        const alt = altura / 100;
        const imc = peso / (alt * alt);


        if(altura === "" && peso === ""){
            alert(" Por Favor, Ingrese el  peso  0 la altura correctamente  !");
        }else if(!alt){
            alert("Por Favor, Ingrese el  peso  o la altura correctamente !");
            
        }else if(imc>18.5 && imc<24.9){
            setMensage('Peso Normal');
        }else if(imc>25 && imc<29.9){
            setMensage('Sobrepeso');
        }else if(imc>30 && imc<34.9){
            setMensage('obesidad Grado 1');
        }else if(imc>35 && imc<39.9){
            setMensage('obesidad Grado 2');
        }else if(imc > 40){
            setMensage('obesidad Grado 3');
        }

    }
  return (
    <div className="calcular">
       
          <input 
            type="range"
            value={peso}
            max="200"
            onChange={ (e) => setPeso(e.target.value) }
          />

          <label>peso: {peso}</label>

<br/>
       
          <input 
            type="range"
          
            value={altura}
            max="200"
            onChange={ (e) => setAltura(e.target.value) }
          />
          <label>Altura:{altura}</label>
          <br/>
       
          <button onClick={calcularIMC}>
            Calcular
          </button>

            <h2>
                {mensage} <br/>
            </h2>
      </div>
  )
}
