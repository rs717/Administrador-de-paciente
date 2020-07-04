import React,{Fragment,useState} from 'react';
import Formulario from "./components/Formulario"


function App() {

  const[citas,guardarCitas]=useState([])

  const crearCita = cita => {
    guardarCitas([ ...citas, cita ]);

    console.log(citas);
  }
  return (
    <Fragment>
        <div className="container">
          <h1>Administrador de Paciente</h1>
            <div className="row">
              <div className="one-half column">
                <Formulario 
                crearCita={crearCita}
                />
              </div>
              <div className="one-half column">1/2</div>
            </div>
        </div>
    </Fragment>
  );
}

export default App;
