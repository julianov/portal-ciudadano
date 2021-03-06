
import './Registro.css';
import { FooterComponet } from "../../Components/Footer";
import { RegistroHeader } from "./RegistroComponets/RegistroHeader";
import { Campos } from "./RegistroComponets/RegistroCampos";
import { getTokenSourceMapRange } from "typescript";

import { Link } from "react-router-dom";



const Registro: React.FC = () => {

    return(
        <>
            <RegistroHeader />
            <div className="container">
                <div className="section" style={{ marginBottom: "10px" }}>
                    <div id="contenedorTitulo">
                        <h1 style={{fontWeight:"700"}}>Creá tu cuenta</h1>
                        <hr></hr>
                    </div>
                    <p> Por favor completá estos datos para continuar.</p>
                    <Link to="/ingresar" style={{ margin: "5px" }}>Si ya estás registrado, ingresá a tu cuenta.</Link>
                    <Campos />
                </div>
                <section>
                </section>
            </div>
            <FooterComponet />
        </>     
      );
};



      
export default Registro;
      