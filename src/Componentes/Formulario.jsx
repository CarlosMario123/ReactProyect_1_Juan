import { useEffect, useState } from "react";
import { Error } from "./Error";


export function Formulario({pacientes,setpacientes,paciente,setpaciente}) {
  //los states de descargan en la parte superior de mi componente
  const [nombre, setNombre] = useState(""); //para el nombre
  const [propietario, setpropietario] = useState(""); //para el propietario
  const [correo, setcorreo] = useState(""); //correo
  const [fecha, setfecha] = useState("");
  const [comentario, setcomentario] = useState("");
  
  useEffect(() => {
    const {nombre, propietario, correo, fecha, comentario} = paciente;
    setNombre(nombre);
    setpropietario(propietario);
    setcorreo(correo);
    setfecha(fecha);
    setcomentario(comentario);
    console.log(paciente)
  }, [paciente])
  
  
  

  const [error, seterror] = useState(false);
  const generarId = ()=>{
       const random = Math.random().toString(36).substring(2);
       const fecha = Date.now().toString(36);
       return fecha + random;
  }
  const handleSubmit = (e) => {
    e.preventDefault(); //previene el envio del formulario
    if ([nombre, propietario, correo, fecha, comentario].includes("")) {
      console.log("hay al menos un campo vacio");
      seterror(true);
      return;
    }
    seterror(false);
    //creamo un objeto de paciente
     const objPaciente = {
        nombre,
        propietario,
        correo,
        fecha,
        comentario,
        id:generarId()
     }


     if(paciente.id){
       //editando registro
       objPaciente.id = paciente.id;

       //actualizar listado de pacientes
       const pacienteActualizados= pacientes.map( pacienteState => {
        if(pacienteState.id == paciente.id){
           return objPaciente;
        }else{
          return pacienteState;
        }
      });
       console.log(paciente.id);
        console.table(pacienteActualizados);
       setpacientes(pacienteActualizados);

       //reiniciamos el paciente
       setpaciente({})
     }else{
      //nuevo registro
      setpacientes([...pacientes,objPaciente]);
     }
     
   //reinciar los campos del formulario
   setNombre("");
   setpropietario("");
   setcomentario("");
   setcorreo("");
   setfecha("");
  };
  return (
    <div className="w-1/2">
      <h2 className="text-3xl font-black text-center">Formulario</h2>
      <p className="mt-5 mb-10 text-lg font-bold text-center">
        Añade paciente y{" "}
        <span className="text-indigo-600 font bold">Adminstralos</span>
      </p>

      {/*formulario*/}
      <form
        action=""
        className="px-5 py-10 bg-white rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        {error && (
         <Error/> 
        )}
        <div className="flex flex-col mb-5">
          <label htmlFor="mascota" className="mb-2 font-black">
            nombre de mascota
          </label>
          <input
            type="text"
            name=""
            id="mascota"
            placeholder="Nombre de la mascota"
            className="w-full p-2 border-2 border-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="propietario" className="mb-2 font-black">
            Nombre del propietario
          </label>
          <input
            type="text"
            name=""
            id="propietario"
            placeholder="Nombre del propietario"
            className="w-full p-2 border-2 border-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => {
              setpropietario(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="correo" className="mb-2 font-black">
            Email
          </label>
          <input
            type="email"
            name=""
            id="correo"
            placeholder="Nombre del propieario"
            className="w-full p-2 border-2 border-gray-400 rounded-md"
            value={correo}
            onChange={(e) => {
              setcorreo(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="Alta" className="mb-2 font-black">
            Alta
          </label>
          <input
            type="date"
            name=""
            id="Alta"
            placeholder="Alta"
            className="w-full p-2 border-2 border-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => {
              setfecha(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="sintomas" className="mb-2 font-black">
            Sintomas
          </label>
          <textarea
            type="text"
            name=""
            id="sintomas"
            placeholder="comentarios"
            className="w-full p-2 border-2 border-gray-400 rounded-md"
            value={comentario}
            onChange={(e) => {
              setcomentario(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          className="w-full p-3 font-bold text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700"
          value= {paciente.id ? "editar paciente":"agregar paciente"}
        />
      </form>
    </div>
  );
}
