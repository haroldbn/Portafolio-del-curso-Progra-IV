import React from 'react'
import  './Encabezado.css'
function Encabezado({completadas, total}){
return(
  <h1 className="Encabezado">
    Tareas Completadas {completadas} de {total}
  </h1>
)
}
export { Encabezado }