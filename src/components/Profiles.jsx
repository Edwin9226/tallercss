import React from "react";
import "../styles/profile.css"


const Profiles = () => {
  return (
    <div className="body">
      <form className="form">
        <label for="nya">Nombres y Apellidos:</label>
        <input type="text" name="nya" id="nya" />
        <br/>
        <label for="email">Email:</label>
        <input type="text" name="email" id="email" />
        <br/>
        <label for="edad">Edad:</label>
        <input type="text" name="edad" id="edad" />
        <br/>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Profiles;
