export const MenuListar = () => {
  return (
    <>
    <div className="pt-3 d-flex justify-content-center">
     <div className="col-md-10">
      <table className="table">
        <thead>
          <tr>
          <th style={{width: "5%" }}>No.</th>
            <th style={{width: "30%" }} className="text-center">Plato</th>
            <th style={{width: "25%" }} className="text-center"> Acompañamiento</th>
            <th style={{width: "20%" }} className="text-center">Precio</th>
            <th style={{width: "15%" }} className="text-center">Región</th>
            <th style={{width: "10%" }} className="text-center">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td className="text-center">Bandeja Paisa</td>
            <td className="text-center">Aguacate</td>
            <td className="text-center">35000</td>
            <td className="text-center">Paisá</td>
          </tr>
          <tr>
            <th>2</th>
            <td className="text-center">Ajiaco</td>
            <td className="text-center">Arroz</td>
            <td className="text-center">28000</td>
            <td className="text-center">Andina</td>
          </tr>
          <tr>
            <th>3</th>
            <td className="text-center">Mute Santandereano</td>
            <td className="text-center">Arroz</td>
            <td className="text-center">35000</td>
            <td className="text-center">Santander</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
};