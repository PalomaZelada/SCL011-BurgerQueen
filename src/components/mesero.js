import React from 'react';
import ButtonTo from './inicioButton';

function Mesero() {
  return (
    <div>
      <h2>Home</h2>
      <ButtonTo
      linkto="/breakfast"
      name="Desayuno"
      />
      <ButtonTo
      linkto="/menu"
      name="Menú"
      />
    </div>
  );
}

export default Mesero;