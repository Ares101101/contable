import { Datacompo } from "../utils/utils";

export interface EditComprobante{
    setEdit: (b:boolean) => void,
    ventasData: Datacompo[],
    ComproConcar: string,
    setComproConcar:(b:string)=>void,
    setVentasData:(b:Datacompo[])=>void
}   