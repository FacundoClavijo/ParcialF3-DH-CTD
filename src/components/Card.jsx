import React from "react";



const Card = ({persona}) => {
    return (
      <>
          <div className="card">
              <h1>Esta es la tarjeta de:</h1>
              <h2>{persona.nombre}</h2>
              <h2>{persona.apellido}</h2>
              <h2>Tienes {persona.edad} años</h2>
              <h4>¡Espero que te haya gustado mi proyecto de React!</h4>
              <h6>¿Habré aprobado?🤔</h6>
          </div>
      </>
    )
  }


export default Card;
