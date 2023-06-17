import { Boton,BotonDelete } from "./Boton";
import { useEffect } from "react";
export function Paciente({paciente,setpaciente,eliminar}){
   
    return<div className="px-5 py-5 mb-6 ml-5 bg-white rounded-md">
    <p className="mb-3 font-bold ">Nombre: {" "} <span className="text-gray-700">{paciente.nombre}</span></p>
    <p className="mb-3 font-bold text-black">Propietario: {" "} <span  className="text-gray-700">{paciente.propietario}</span></p>
    <p className="mb-3 font-bold text-black">Email:{" "} <span  className="text-gray-700">{paciente.correo}</span></p>
    <p className="mb-3 font-bold text-black">Fecha alta:{" "} <span  className="text-gray-700">{paciente.fecha}</span></p>
    <p className="mb-3 font-bold text-black">Sintomas:{" "} <span  className="text-gray-700">{paciente.comentario}</span></p>
    <Botones setpaciente={setpaciente} paciente={paciente} eliminar={eliminar} id={paciente.id}/>
    </div>
}

function Botones({setpaciente,paciente,eliminar,id}){
    return <div className="flex justify-between">
        <Boton setpaciente={setpaciente} paciente={paciente} /><BotonDelete eliminar ={eliminar} id={id}/>
    </div>
}