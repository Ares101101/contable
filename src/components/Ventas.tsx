import { useState,  ChangeEvent, FormEvent, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import columns, { conditionalRowStyles, Datacompo, FormatearJson, rowDisabledCriteria, rowSelectCritera } from '../utils/utils';
import EditComprobante from './EditComprobante';

export default function Ventas(){
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [ventasData, setVentasData] = useState<Datacompo[]>([]); 
    const [subDiario, setSubDiario] = useState<string>("05")
    const [cuentaConPorCo, setcuentaConPorCo] = useState<string>("121201")
    const [cuentaConIngreso, setcuentaConIngreso] = useState<string>("701101")
    const [Area, setArea]= useState<string>("")
    const [Costo, setCosto] = useState<string>("")
    const [Referencia, setReferencia] = useState<string>("")
    const [onEdit, setEdit]= useState<boolean>(false)
    const [ComproConcar, setComproConcar]= useState<string>("")

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault()

        if (!selectedFile) {
            console.error("No file selected");
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            if (event.target?.result) {
                const content = event.target.result as string;

                // Splitting content by lines and then by '|'
                const lines = content.split('\n');
                const headers = lines[0].split('|');
                const data = [];

                for (let i = 1; i < lines.length; i++) {
                    const values = lines[i].split('|');
                    if (values.length === headers.length) {
                        let entry: any = {};
                        headers.forEach((header, index) => {
                            entry[header.trim()] = values[index].trim();
                        });
                        entry.index = i;
                        entry.SubDiario = subDiario;
                        entry.cuentaConPorCo = cuentaConPorCo;
                        entry.cuentaConIngreso = cuentaConIngreso;
                        entry.Area = Area;
                        entry.Costo = Costo;
                        entry.Referencia = Referencia;
                        entry.TipoConversion = ""
                        data.push(entry);
                    }
                }
                const newData = FormatearJson(data)
                setVentasData(newData);
                console.log(newData)
            }
        };
        fileReader.readAsText(selectedFile);       
    };

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    
    const onEditFunt = (row:Datacompo["Comprobante Concar"])=>{
        setComproConcar(row)
        setEdit(true)
    }

    useEffect(()=>{
        columns.unshift({	
            name:"Editar - Eliminar",		
            cell: (row:Datacompo) =>( 
            <div className=" flex gap-2 justify-evenly w-full">
                <button 
                    className=" bg-sky-600 rounded-md text-white p-1"
                    onClick={()=>onEditFunt(row["Comprobante Concar"])}
                >
                    <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className=" size-4">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                    <path d="M13.5 6.5l4 4" />
                    </svg>
                </button>
                <button className=" bg-red-600 rounded-md text-white p-1">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className=" size-4">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 7l16 0" /><path d="M10 11l0 6" />
                    <path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                </button>
            </div>
            )
        })      
    },[])

    return (
        <div className=" w-full h-full flex overflow-hidden text-black/75 relative">
            <article className='  w-1/2 items-center flex flex-col p-4 overflow-auto'>
                <h1 className=' mx-auto text-center   text-2xl'>Generar Exportacion Excel Sire para registro de ventas</h1>
                <form 
                    className=" py-4 flex flex-col gap-2 max-w-[600px] w-full items-start "
                    onSubmit={handleSubmit}
                >
                    <fieldset className='flex flex-col w-full'>
                        <label htmlFor="arrastrar-preliminar" className=''>
                            <span>Elige preliminar SIRE</span> 
                            <input 
                                    type="file" 
                                    name='arrastrar-preliminar'
                                    className=" rounded bg-white border-black/25 border shadow-md w-full mt-2"
                                    onChange={handleFileChange}
                                    required
                                />    
                        </label>
                        <label htmlFor="Subdiario" className=' mt-2'>
                            <span className=''>Subdiario General</span>                          
                            <input 
                                type="text" 
                                name='Subdiario'
                                className=" bg-white  rounded border-black/25 border shadow-md   w-full pl-4 h-[30px] mt-2"
                                onChange={(e)=>setSubDiario(e.target.value)}
                                placeholder="05"
                                defaultValue={subDiario}    
                                required
                            />    
                        </label>
                        <label htmlFor="Subdiario" className=' mt-2'>
                            <span className=' '>Cuenta Contable por Cobrar General</span>                         
                            <input 
                                type="text" 
                                name='Subdiario'
                                className=" bg-white  rounded border-black/25 border shadow-md w-full pl-4 h-[30px] mt-2"
                                onChange={(e)=>setcuentaConPorCo(e.target.value)}
                                placeholder="121201"
                                defaultValue={cuentaConPorCo}    
                                required
                            />    
                        </label>
                        <label htmlFor="Subdiario" className=' mt-2'>
                            <span className=' '>Cuenta Contable de Ingresos General</span>                         
                            <input 
                                type="text" 
                                name='Subdiario'
                                className=" bg-white rounded  border-black/25 border shadow-md w-full pl-4 h-[30px] mt-2"
                                onChange={(e)=>setcuentaConIngreso(e.target.value)}
                                placeholder="701101"
                                defaultValue={cuentaConIngreso}    
                                required
                            />    
                        </label>
                        <label htmlFor="Subdiario" className=' mt-2'>
                            <span className=' '>Area</span>                         
                            <input 
                                type="text" 
                                name='Subdiario'
                                className=" bg-white  rounded border-black/25 border shadow-md w-full pl-4 h-[30px] mt-2"
                                onChange={(e)=>setArea(e.target.value)}
                                placeholder=""
                                defaultValue={Area}    
                               
                            />    
                        </label>
                        <label htmlFor="Subdiario" className=' mt-2'>
                            <span className=' '>Centro de costo General</span>                         
                            <input 
                                type="text" 
                                name='Subdiario'
                                className=" bg-white rounded border-black/25 border shadow-md w-full pl-4 h-[30px] mt-2"
                                onChange={(e)=>setCosto(e.target.value)}
                                placeholder=""
                                defaultValue={Costo}    
                               
                            />    
                        </label>
                        <label htmlFor="Subdiario" className=' mt-2'>
                            <span className=' '>Anexo de Referencia</span>                         
                            <input 
                                type="text" 
                                name='Subdiario'
                                className=" bg-white  rounded border-black/25 border shadow-md w-full pl-4 h-[30px] mt-2"
                                onChange={(e)=>setReferencia(e.target.value)}
                                placeholder=""
                                defaultValue={Referencia}    
                                
                            />    
                        </label>
                    </fieldset>
                    <button
                        className=" rounded bg-slate-100 shadow-md text-black  px-2 py-1 m-auto mt-4"
                        type="submit"
                    >
                       Generar Preliminar Ventas
                    </button>               
                </form> 
            </article>
            <div className="w-1/2 overflow-auto">
                <div className=''>
                    <DataTable
                        title="Registro Preliminar "
                        columns={columns}
                        data={ventasData}
                        selectableRows
                        pagination
                        onSelectedRowsChange={ data => console.log(data)}
                        fixedHeader={true}
                        fixedHeaderScrollHeight='65vh'
                        paginationComponentOptions={paginationComponentOptions}
                        selectableRowSelected={rowSelectCritera}
                        conditionalRowStyles={conditionalRowStyles}
                        selectableRowDisabled={rowDisabledCriteria}
                    />
                </div>
                <div className='mx-2'>
                    <button
                            className="rounded bg-slate-100 shadow-md text-black  px-2 py-1 m-auto mt-4 w-full text-xl"
                            type="submit"
                        >
                        Generar Formato
                    </button> 
                </div>
            </div>
            {
                onEdit&&(
                <EditComprobante 
                    setComproConcar={setComproConcar} 
                    ComproConcar={ComproConcar} 
                    ventasData={ventasData}  
                    setEdit={setEdit}
                    setVentasData={setVentasData}
                    />)
            }
        </div>
    )
}