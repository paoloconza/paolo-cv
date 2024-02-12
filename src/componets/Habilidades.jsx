import React from 'react';

const Habilidades = ({ lista }) => {

 
  return (

        <div>
          <ul className="marco">
            <li><strong>Habilidades Generales:</strong>
              <ul>
                <li>Diseño gráfico.</li>
                <li>Creatividad.</li>
                <li>Innovación.</li>
                {lista.map((e, key) => {
                return <li key={key}>{e}</li>
                 })}

              </ul>
            </li>
          </ul>
        </div>
  );
};


export default Habilidades;