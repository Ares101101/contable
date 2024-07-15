import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Ventas from "./components/Ventas";
import Compras from "./components/Compras";
import Pagos from "./components/Pagos";
import HojaDeT from "./components/HojaDeT";

function App() {

  const [layout, SetLayout]= useState([true,false,false,false])
  
  const Cambio = (i:number):void=>{
    const newLayout = layout.map((_,e)=> e === i)
    newLayout?SetLayout(newLayout):console.log("no se encontro el layout")
  }
  
  return (
    <div className=" App" >
      <Header  layout={layout} Cambio={Cambio}/>
      {
        layout[0]?<Ventas/>:""       
      }
      {
        layout[1]?<Compras/>:""
      }
      {
        layout[2]?<HojaDeT/>:""
      }
      {
        layout[3]?<Pagos/>:""
      }
    </div>
  );
}

export default App;
