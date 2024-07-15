import { useState,  ChangeEvent, FormEvent } from 'react';
import DataTable from 'react-data-table-component';
import columns, { conditionalRowStyles, FormatearJson, rowDisabledCriteria, rowSelectCritera } from '../utils/utils';

export default function Ventas(){
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [ventasData, setVentasData] = useState<any[]>([]); 
    const [ subDiario, setSubDiario ] = useState<string>("05")
    const [cuentaConPorCo, setcuentaConPorCo] = useState<string>("121201")
    const [cuentaConIngreso, setcuentaConIngreso] = useState<string>("701101")
    const [Area, setArea]= useState<string>("")
    const [Costo, setCosto] = useState<string>("")
    const [Referencia, setReferencia] = useState<string>("")

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
      
    
    return (
        <div className=" w-full h-full flex overflow-hidden text-black/75">
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
        </div>
    )
}