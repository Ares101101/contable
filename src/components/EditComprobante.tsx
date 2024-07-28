import { ChangeEvent, useEffect, useState } from "react"
import type { EditComprobante } from "../types/types"
import { Datacompo } from "../utils/utils"

 const EditComprobante:React.FC<EditComprobante> =(props)=> {
    const{
        setEdit,
        ventasData,
        ComproConcar,
        setComproConcar,
        setVentasData
    }=props
    const [venta, setVenta] =useState<Datacompo>(ventasData[0])

    useEffect(()=>{
        ventasData.map((venta)=>{
            if (venta["Comprobante Concar"]=== ComproConcar){
                return setVenta(venta)
            }
        })
    },[ComproConcar])

    const handleSubmit =()=>{
        const newsVentas = ventasData.map((venta)=>{
            if(venta["Comprobante Concar"]=== venta["Comprobante Concar"]){
                return venta
            }else {
                return venta
            }
        })
        setVentasData(newsVentas)
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setVenta((prevVenta)=>({
            ...prevVenta,
            [name]:value
        }))
        console.log(venta)
    }
    const formatDateForInput = (date: string): string => {
        if(!date){
            return ""
        }
        const [day, month, year] = date.split('/');
        return `${year}-${month}-${day}`;
      };
    return (
        <div  className=" overflow-auto flex fixed top-7 right-0 left-0 z-50 justify-center items-center w-full inset-0 h-100% max-h-full backdrop-blur-sm bg-black/10">
            <div className=" p-4 w-full  max-h-full flex items-center justify-center">     
                <div className=" bg-white rounded-lg shadow w-full flex flex-col max-w-4xl">
                    <div className=" w-full flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                           Edición de comprobantes
                        </h3>
                        <button 
                            className="text-gray-400 bg-transparent hover:bg-red-600 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            onClick={()=>setEdit(false)}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>        
                        </button>
                    </div>        
                    <form 
                        className="p-5 w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid gap-4 mb-4 grid-cols-4">
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Subdiario</label>
                                <input 
                                type="text" 
                                name="SubDiario"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "                               
                                defaultValue={venta.SubDiario}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Comprobante</label>
                                <input 
                                type="text" 
                                name="Comprobante Concar"                               
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Comprobante Concar"]}
                                onChange={handleChange} />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Moneda</label>
                                <input 
                                type="text"
                                name="Moneda"                                 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta.Moneda}
                                onChange={handleChange}  />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Fecha de emisión</label>
                                <input 
                                type="date" 
                                name="Fecha de emisión"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                                defaultValue={formatDateForInput(venta["Fecha de emisión"])} 
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Fecha de Vencimiento</label>
                                <input 
                                type="date" 
                                name="name"  
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={formatDateForInput(venta["Fecha Vcto/Pago"])}
                                onChange={handleChange} />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Tipo de documento</label>
                                <select 
                                id="category" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  ">                                
                                    <option defaultValue="FT">Factura</option>
                                    <option defaultValue="BV">Boleta</option>
                                    <option defaultValue="NA">N.Credito</option>
                                    <option defaultValue="NC">N.Debito</option>
                                </select>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Serie de documento</label>
                                <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={venta["Serie de documento"]}
                                placeholder={venta["Serie de documento"]} />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Número de documento</label>
                                <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={venta["Número de documento"]}
                                placeholder={venta["Número de documento"]} />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Tipo de D.I</label>
                                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  ">
                                    <option defaultValue="6">RUC</option>
                                    <option defaultValue="1">DNI</option>
                                    <option defaultValue="4">C.E</option>
                                    <option defaultValue="0">Sin DI</option>
                                    <option defaultValue="7">Pasaporte</option>
                                    <option defaultValue="A">CDI</option>
                                </select>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">N° de D.I</label>
                                <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={venta["Número de documento de identidad"]}
                                placeholder={venta["Número de documento de identidad"]} />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Razón Social Proveedor</label>
                                <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={venta["Apellidos y Nombres, denominación o razón social del proveedor"]}
                                placeholder={venta["Apellidos y Nombres, denominación o razón social del proveedor"]} />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">V. Exportación</label>
                                <input type="number" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Valor facturado de la exportación"]}
                                value={venta["Valor facturado de la exportación"]} 
                                />
                                

                            </div>
                            <div className="col-span-1">
                                <label 
                                htmlFor="name" 
                                className="block mb-2 text-sm font-medium text-gray-900 ">B.I</label>
                                <input 
                                type="number" 
                                name="name" 
                                 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Base imponible de la operación gravada"]} 
                                value={venta["Base imponible de la operación gravada"]}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">V. Exonerada</label>
                                <input type="number" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Importe total de la operación Exonerada"]} 
                                value={venta["Importe total de la operación Exonerada"]} 
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">V. Inafecta</label>
                                <input type="number" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Importe total de la operación Inafecta"]} 
                                value={venta["Importe total de la operación Inafecta"]}
                                />
                                
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">ISC</label>
                                <input type="number" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta.ISC}
                                value={venta.ISC}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">IGV Y/O IPM</label>
                                <input type="number" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["IGV Y/O IPM"]} 
                                value={venta["IGV Y/O IPM"]} 
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">ICBPER</label>
                                <input type="number" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta.ICBPER} 
                                value={venta.ICBPER} 
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Otros tributos</label>
                                <input type="number" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Otros tributos"]} 
                                value={venta["Otros tributos"]} 
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 "> Importe total</label>
                                <input type="number" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Importe total"]} 
                                value={venta["Importe total"]} 
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 "> Tipo de Conversión</label>
                                <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Tipo de Conversión"]}
                                value={venta["Tipo de Conversión"]}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 "> Tipo de cambio</label>
                                <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Tipo de cambio"]} 
                                value={venta["Tipo de cambio"]} 
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 "> Cuenta contable por cobrar</label>
                                <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Cuenta contable por cobrar"]} 
                                value={venta["Cuenta contable por cobrar"]} 
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 "> Cuenta contable de ingresos</label>
                                <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                defaultValue={venta["Cuenta contable de ingresos"]} 
                                value={venta["Cuenta contable de ingresos"]}
                                />
                            </div>   
                        </div>
                        <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className=" mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.626 7.293a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
                            Guardar cambios
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default  EditComprobante