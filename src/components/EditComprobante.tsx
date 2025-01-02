import { ChangeEvent, useEffect, useState } from "react"
import type { EditComprobante } from "../types/types"
import { Datacompo } from "../utils/utils"

 const EditComprobante:React.FC<EditComprobante> =(props)=> {
    const{
        setEdit,
        ventasData,
        ComproConcar,
        setVentasData,
        guardarComprobante,
        setComproConcar
    }=props


    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setComproConcar((arg)=>(arg?{
            ...arg,
            [name]: value,
        }:undefined))
        console.log(ComproConcar)
    }
    const formatDateForInput = (date: string | undefined): string => {
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
                        onSubmit={()=>{guardarComprobante(ComproConcar)}}
                    >
                        <div className="grid gap-4 mb-4 grid-cols-4">
                            <div className="col-span-1">
                                <label htmlFor="Subdiario" className="block mb-2 text-sm font-medium text-gray-900 ">Subdiario</label>
                                <input 
                                type="text" 
                                name="SubDiario"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "                               
                                value={ComproConcar?.SubDiario}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label 
                                    htmlFor="Comprobante Concar" 
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Comprobante
                                </label>
                                <input 
                                type="text" 
                                name="Comprobante Concar"                               
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Comprobante Concar"]}
                                onChange={handleChange} />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Moneda" className="block mb-2 text-sm font-medium text-gray-900 ">Moneda</label>
                                <input 
                                type="text"
                                name="Moneda"                                 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.Moneda}
                                onChange={handleChange}  />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Fecha de emisión" className="block mb-2 text-sm font-medium text-gray-900 ">Fecha de emisión</label>
                                <input 
                                type="date" 
                                name="Fecha de emisión"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                                value={formatDateForInput(ComproConcar?.["Fecha de emisión"])} 
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Fecha de Vencimiento" className="block mb-2 text-sm font-medium text-gray-900 ">Fecha de Vencimiento</label>
                                <input 
                                type="date" 
                                name="Fecha de Vencimiento"  
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={formatDateForInput(ComproConcar?.["Fecha Vcto/Pago"])}
                                onChange={handleChange} />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Tipo de documento</label>
                                <select 
                                id="category" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  ">                                
                                    <option value="FT">Factura</option>
                                    <option value="BV">Boleta</option>
                                    <option value="NA">N.Credito</option>
                                    <option value="NC">N.Debito</option>
                                </select>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Serie de documento" className="block mb-2 text-sm font-medium text-gray-900 ">Serie de documento</label>
                                <input type="text" name="Serie de documento"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Serie de documento"]}
                                placeholder={ComproConcar?.["Serie de documento"]} />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Número de documento" className="block mb-2 text-sm font-medium text-gray-900 ">Número de documento</label>
                                <input type="text" name="Número de documento"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Número de documento"]}
                                onChange={handleChange} />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Tipo de D.I" className="block mb-2 text-sm font-medium text-gray-900 ">Tipo de D.I</label>
                                <select name="Tipo de D.I" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  ">
                                    <option value="6">RUC</option>
                                    <option value="1">DNI</option>
                                    <option value="4">C.E</option>
                                    <option value="0">Sin DI</option>
                                    <option value="7">Pasaporte</option>
                                    <option value="A">CDI</option>
                                </select>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Número de documento de identidad" className="block mb-2 text-sm font-medium text-gray-900 ">N° de D.I</label>
                                <input type="text" name="Número de documento de identidad"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Número de documento de identidad"]}
                                onChange={handleChange} />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="Apellidos y Nombres, denominación o razón social del proveedor" className="block mb-2 text-sm font-medium text-gray-900 ">Razón Social Proveedor</label>
                                <input type="text" name="Apellidos y Nombres, denominación o razón social del proveedor"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Apellidos y Nombres, denominación o razón social del proveedor"]}
                                onChange={handleChange} />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Valor facturado de la exportación" className="block mb-2 text-sm font-medium text-gray-900 ">V. Exportación</label>
                                <input type="number" name="Valor facturado de la exportación"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Valor facturado de la exportación"]}
                                onChange={handleChange}
                                />
                                

                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Base imponible de la operación gravada" className="block mb-2 text-sm font-medium text-gray-900 ">B.I</label>
                                <input type="number"  name="Base imponible de la operación gravada" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Base imponible de la operación gravada"]} 
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Importe total de la operación Exonerada" className="block mb-2 text-sm font-medium text-gray-900 ">V. Exonerada</label>
                                <input type="number" name="Importe total de la operación Exonerada"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Importe total de la operación Exonerada"]} 
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Importe total de la operación Inafecta" className="block mb-2 text-sm font-medium text-gray-900 ">V. Inafecta</label>
                                <input type="number" name="Importe total de la operación Inafecta"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Importe total de la operación Inafecta"]} 
                                onChange={handleChange}
                                />
                                
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="ISC" className="block mb-2 text-sm font-medium text-gray-900 ">ISC</label>
                                <input type="number" name="ISC"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.ISC}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="IGV Y/O IPM" className="block mb-2 text-sm font-medium text-gray-900 ">IGV Y/O IPM</label>
                                <input type="number" name="IGV Y/O IPM"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["IGV Y/O IPM"]} 
                                onChange={handleChange} 
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="ICBPER" className="block mb-2 text-sm font-medium text-gray-900 ">ICBPER</label>
                                <input type="number" name="ICBPER"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.ICBPER} 
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Otros tributos" className="block mb-2 text-sm font-medium text-gray-900 ">Otros tributos</label>
                                <input type="number" name="Otros tributos"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Otros tributos"]} 
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Importe total" className="block mb-2 text-sm font-medium text-gray-900 ">Importe total</label>
                                <input type="number" name="Importe total"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Importe total"]} 
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Tipo de Conversión" className="block mb-2 text-sm font-medium text-gray-900 "> Tipo de Conversión</label>
                                <input type="text" name="Tipo de Conversión"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Tipo de Conversión"]}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Tipo de cambio" className="block mb-2 text-sm font-medium text-gray-900 "> Tipo de cambio</label>
                                <input type="text" name="Tipo de cambio"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Tipo de cambio"]} 
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Cuenta contable por cobrar" className="block mb-2 text-sm font-medium text-gray-900 "> Cuenta contable por cobrar</label>
                                <input type="text" name="Cuenta contable por cobrar"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Cuenta contable por cobrar"]} 
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="Cuenta contable de ingresos" className="block mb-2 text-sm font-medium text-gray-900 "> Cuenta contable de ingresos</label>
                                <input type="text" name="Cuenta contable de ingresos"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " 
                                value={ComproConcar?.["Cuenta contable de ingresos"]} 
                                onChange={handleChange}
                                />
                            </div>   
                        </div>
                        <button 
                            type="submit" 
                            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                        >
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