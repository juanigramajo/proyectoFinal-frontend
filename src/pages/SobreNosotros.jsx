import React from "react";
import NavBar from "../components/NavBar";
import "../css/sobreNosotros.css";
import SNC from '../components/SNC';
import Image from "react-bootstrap/Image";
import imagenSN from "../Img/imagenSN.png"

export default function SobreNosotros({token, user, setToken}) {
  return (
    <>
      <NavBar token={token} user={user} setToken={setToken}/>
      <Image src={imagenSN} fluid/>
      <div className="container my-5 ">
        <h2 className="text-center">Sobre Nosotros</h2>
        <div className="">

          <div className="mt-5 text-justify">
            <p>
            O´Tech se compromete a cumplir las leyes y regulaciones locales y a aplicar un código de conducta mundial estricto para todos nuestros empleados. Creemos que la administración 
            ética no es solo una herramienta para hacer frente a los rápidos cambios del entorno comercial mundial, sino que también sirve como vehículo para desarrollar la confianza 
            con las diversas partes interesadas, que incluyen los clientes, los accionistas, los empleados, los socios comerciales y las comunidades locales. Con el objetivo de 
            convertirse en una de las empresas más éticas del mundo, O´Tech continúa capacitando a sus empleados y utilizando sistemas de monitoreo, al mismo tiempo que implementa 
            una administración corporativa justa y transparente.
            </p>
          </div>
        </div>

        <h2 className="text-center mt-5">Nuestros atletas</h2>
       
      </div>
      <SNC></SNC>
    </>
  );
}
