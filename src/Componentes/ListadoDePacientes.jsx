import { Paciente } from "./Pacientes";
import { NoHayPacientes } from "./SinPaciente";

export function ListadoPacientes({pacientes,setpaciente,paciente,eliminar}) {
  return <div className="w-1/2"> { pacientes.length > 0 ? (  <>
    <h2 className="text-3xl font-black text-center">Listado de pacientes</h2>

    <p className="mt-6 mb-10 font-bold text-center">Administar tus{" "} <span className="text-indigo-500">pacientes</span></p>

    <div className="h-screen overflow-y-scroll">
     {
      pacientes.map((paciente)=>{
       return <Paciente 
       key={paciente.id}
       paciente={paciente}  setpaciente={setpaciente} eliminar = {eliminar}/>
     
      })
     }
    </div>
  </>)
  : 
    <NoHayPacientes/>
    }
    </div>
   
  
}
