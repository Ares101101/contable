
import { Datacompo } from "../utils/utils";

export interface EditComprobante{
    setComproConcar:React.Dispatch<React.SetStateAction<Datacompo | undefined>>,
    setEdit: (b:boolean) => void,
    ventasData: Datacompo[],
    ComproConcar: Datacompo | undefined,
    setVentasData:(b:Datacompo[])=>void,
    guardarComprobante:(arg:Datacompo | undefined )=>void
}   