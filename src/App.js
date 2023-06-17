import { Header } from "./Componentes/Header";
import { Formulario } from "./Componentes/Formulario";
import { ListadoPacientes } from "./Componentes/ListadoDePacientes";
import { useState,useEffect } from "react";

function App() {
  const [pacientes, setpacientes] = useState([]);
  const [paciente, setpaciente] = useState({});
   const eliminar = (id)=>{
     console.log("eliminar")
      const pacientesActualizdo = pacientes.filter(paciente => paciente.id != id);
      setpacientes(pacientesActualizdo);
   }
  console.log(paciente)

  return (
    <div className="px-20 bg-slate-200">
     <Header/>

     <div className="flex mt-12">
       <Formulario pacientes={pacientes} setpacientes={setpacientes} paciente={paciente} setpaciente={setpaciente}/>
       <ListadoPacientes pacientes={pacientes} setpaciente={setpaciente} paciente = {paciente} eliminar = {eliminar}/>
       
     </div>
    </div>
  );
}

export default App;
