"use client"
import {
  ComoTrabajo,
  Empecemos,
  FooterComponent,
  FormComponent,
  HagoRealidadProyectos,
  Header,
  Main,
  MisServicios,
  Nav,
  NavMobile,
  Proyectos,
  VentajasNegocio,
} from "./_components";
import "./style.css"
import "./_components/comp.css"
import "./_components/comp2.css"
import "./_components/carrusel.css"
import "./_components/responsive.css"
import { ArrowUp } from "./_reusable/Arrow";
import { ToastContainer } from 'react-toastify';
export default function Home() {

  return (
    <div className=" ">
      <Nav></Nav>
      <NavMobile></NavMobile>
      <Header></Header>
      <Main></Main>
      <VentajasNegocio></VentajasNegocio>
      <HagoRealidadProyectos></HagoRealidadProyectos>
      <Empecemos></Empecemos>
      <Proyectos></Proyectos>
      <ComoTrabajo></ComoTrabajo>
      <MisServicios></MisServicios>
      <FormComponent></FormComponent>
      <FooterComponent></FooterComponent>
      <ArrowUp></ArrowUp>
      <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          // transition={Bounce} 
          />
    </div>
  );
}
