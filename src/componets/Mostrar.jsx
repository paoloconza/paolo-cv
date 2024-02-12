import React from 'react';

const Mostrar = ({ onClick, visible }) => {
  return (
    <button onClick={onClick}>{visible ? <i class="fa-solid fa-angles-down fa-xl"></i> : <i class="fa-solid fa-angles-up fa-xl"></i>}</button>
  );
};

export default Mostrar;