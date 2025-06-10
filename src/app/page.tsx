"use client"
import { Header, Main, Nav, Section_ventajas_negocio } from "./_components";
import "./style.css"
import "./_components/comp.css"
export default function Home() {

  return (
    <div className=" ">
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Section_ventajas_negocio></Section_ventajas_negocio>
    </div>
  );
}
