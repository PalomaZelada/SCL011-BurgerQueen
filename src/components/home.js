import React from 'react';
import ButtonTo from './inicioButton';

function Home() {
  return (
    <div className="btnLocation">
      <ButtonTo
      linkto="/mesero"
      name="Mesero"
      />
      <ButtonTo
      linkto="/cocina"
      name="Cocina"
      />
    </div>
  );
}

export default Home;
