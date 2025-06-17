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
  Proyectos,
  VentajasNegocio,
} from "./_components";
import "./style.css"
import "./_components/comp.css"
import "./_components/comp2.css"
export default function Home() {

  return (
    <div className=" ">
     
      <Nav></Nav>
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
    </div>
  );
}
