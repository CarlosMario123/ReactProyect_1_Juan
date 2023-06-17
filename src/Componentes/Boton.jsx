export function Boton({setpaciente,paciente}){

    const editar = ()=>{
        setpaciente(paciente);
    
    }
    return <>
      
    <button type="button" className="px-10 py-2 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700" onClick={editar}>Editar</button>
    </>  
}

export function BotonDelete({eliminar,id}){
    const borrar = ()=>{
        eliminar(id);
    }
    return <>
    <button type="button" className="px-10 py-2 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700" onClick={borrar}>Eliminar</button>
    </>  
}