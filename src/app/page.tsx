"use client"
import {
  ComoTrabajo,
  Empecemos,
  HagoRealidadProyectos,
  Header,
  Main,
  MisServicios,
  Nav,
  Proyectos,
  Section_ventajas_negocio
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
      <Section_ventajas_negocio></Section_ventajas_negocio>
      <HagoRealidadProyectos></HagoRealidadProyectos>
      <Empecemos></Empecemos>
      <Proyectos></Proyectos>
      <ComoTrabajo></ComoTrabajo>
      <MisServicios></MisServicios>
    </div>
  );
}
