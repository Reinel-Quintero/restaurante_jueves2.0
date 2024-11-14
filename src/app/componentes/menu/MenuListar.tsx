import { useState } from "react";
import { Plato } from "../../modelos/Plato";
import { ARREGLO_PLATOS } from "../../mocks/Plato-mocks";
import { ARREGLO_PLATOS_REGION } from "../../utilidades/rutas/dominios/DomRegion";

export const MenuListar = () => {
  const [arrPlatos] = useState<Plato[]>(ARREGLO_PLATOS);

  const obtenerNombre = (valor:string)=>{
    for(const objRegion of ARREGLO_PLATOS_REGION){
      if(objRegion.codRegion==valor){
        return objRegion.nombreRegion;
      }
    }
  }



  return (
    <>
    <div className="pt-3 d-flex justify-content-center">
     <div className="col-md-10">
      <table className="table">
        <thead>
          <tr>
          <th style={{width: "5%" }}>codigo</th>
            <th style={{width: "30%" }} className="text-center">nombredeplato</th>
            <th style={{width: "20%" }} className="text-center">Precio</th>
            <th style={{width: "25%" }} className="text-center">Región</th>
            <th style={{width: "20%" }} className="text-center">imagen</th>
          </tr>
        </thead>
        <tbody>

           {arrPlatos.map((miPla:Plato)=>(

          <tr key={miPla.codPlato} className="alig">
            <th>{miPla.codPlato}</th>
            <td className="text-center">{miPla.nombrePlato}</td>
            <td className="text-center">{miPla.precioPlato}</td>
            <td className="text-center">{obtenerNombre(miPla.regionPlato)}</td>
            <td className="text-center">
              <img src={miPla.imagenPlatoBase64} alt={miPla.nombrePlato} className="imagenListado" />
              <br />
              {miPla.imagenPlato}
              </td>

          </tr>

           ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
};