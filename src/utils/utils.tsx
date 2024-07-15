import { TableColumn } from "react-data-table-component";

export type Datacompo = {
    SubDiario: string,
    "Comprobante Concar": string,
    Moneda: string,
    "Fecha de emisión": string,
    "Fecha Vcto/Pago": string,
    "Tipo de Documento": string,
    "Serie de documento": string,
    "Número de documento": string,
    "Tipo de documento de Identidad": string,
    "Número de documento de identidad": string,
    "Apellidos y Nombres, denominación o razón social del proveedor": string,
    "Valor facturado de la exportación": number|string,
    "Base imponible de la operación gravada": number|string,
    "Importe total de la operación Exonerada": number|string,
    "Importe total de la operación Inafecta": number|string,
    ISC: number|string,
    "IGV Y/O IPM": number|string,
    ICBPER: number|string,
    "Otros tributos": number|string,
    "Importe total": number|string,
    "Tipo de Conversión": number|string,
    "Tipo de cambio": number|string,
    "Referencia del comprobante de pago que se modifica Fecha": number|string,
    "Referencia del comprobante de pago que se modifica Tipo": number|string,
    "Referencia del comprobante de pago que se modifica Serie": number|string,
    "Referencia del comprobante de pago que se modifica Numero": number|string,
    "Cuenta contable por cobrar": number|string,
    "Cuenta contable de ingresos": number|string,
    Area: number|string,
    "Centro de Costo": number|string,
    "Anexo de Referencia": number|string
}

const columns: TableColumn<Datacompo>[] = [
    {
        name:"SubDiario",
        selector: row => row.SubDiario
    },
    {
        name:"Comprobante Concar",
        selector:row=>row["Comprobante Concar"]
    },
    {
        name: "Moneda",
        selector:row=>row.Moneda
    },
    {
        name: "Fecha de emisión",
        selector: row=>row["Fecha de emisión"] 
    },
    {
        name: "Fecha de Vencimiento o Pago",
        selector:row=>row["Fecha Vcto/Pago"]
    },
    {
        name: "Tipo de Documento",
        selector: row=>row["Tipo de Documento"]
    },
    {
        name: "Serie de documento",
        selector: row=>row["Serie de documento"]
    },
    {
        name:"Número de documento",
        selector:row=>row["Número de documento"]
    },
    {
        name:"Tipo de documento de Identidad",
        selector: row=>row["Tipo de documento de Identidad"]
    },
    {
        name:"Número de documento de identidad",
        selector: row=>row["Número de documento de identidad"]
    },
    {
        name:"Apellidos y Nombres, denominación o razón social del proveedor",
        selector:row=>row["Apellidos y Nombres, denominación o razón social del proveedor"]
    },
    {
        name:"Valor facturado de la exportación",
        selector:row=>row["Valor facturado de la exportación"]
    },
    {
        name:"Base imponible de la operación gravada",
        selector:row=>row["Base imponible de la operación gravada"]
    },
    {
        name:"Importe total de la operación Exonerada",
        selector:row=>row["Importe total de la operación Exonerada"]
    },
    {
        name:"Importe total de la operación Inafecta",
        selector:row=>row["Importe total de la operación Inafecta"]
    },
    {
        name:"ISC",
        selector:row=>row.ISC
    },
    {
        name:"IGV Y/O IPM",
        selector:row=>row["IGV Y/O IPM"]
    },
    {
        name:"ICBPER",
        selector:row=>row.ICBPER
    },
    {
        name:"Otros tributos",
        selector:row=>row["Otros tributos"]
    },
    {
        name:"Importe total",
        selector:row=>row["Importe total"]
    },
    {
        name:"Tipo de Conversión",
        selector:row=>row["Tipo de Conversión"]
    },
    {
        name:"Tipo de cambio",
        selector:row=>row["Tipo de cambio"]
    },
    {
        name:"Referencia del comprobante de pago que se modifica Fecha",
        selector:row=>row["Referencia del comprobante de pago que se modifica Fecha"]
    },
    {
        name:"Referencia del comprobante de pago que se modifica Tipo",
        selector:row=>row["Referencia del comprobante de pago que se modifica Tipo"]
    },
    {
        name:"Referencia del comprobante de pago que se modifica Serie",
        selector:row=>row["Referencia del comprobante de pago que se modifica Serie"]
    },
    {
        name:"Referencia del comprobante de pago que se modifica Numero",
        selector:row=>row["Referencia del comprobante de pago que se modifica Numero"]
    },
    {
        name:"Cuenta contable por cobrar",
        selector:row=>row["Cuenta contable por cobrar"]
    },
    {
        name:"Cuenta contable de ingresos",
        selector:row=>row["Cuenta contable de ingresos"]
    },
    {
        name:"Area",
        selector: row => row.Area
    },
    {
        name:"Centro de Costo",
        selector: row => row["Centro de Costo"]
    },
    {
        name:"Anexo de Referencia",
        selector:ref=>ref["Anexo de Referencia"]
    }
]

export default columns


interface DataRow {
    "SubDiario": string;
    "Fecha de emisión": string;
    "Fecha Vcto/Pago": string;
    "Tipo CP/Doc.": string;
    "Serie del CDP": string;
    "Nro CP o Doc. Nro Inicial (Rango)": string;
    "Tipo Doc Identidad": string;
    "Nro Doc Identidad": string;
    "Apellidos Nombres/ Razón Social": string;
    "Valor Facturado Exportación": string;
    "BI Gravada": string;
    "Mto Exonerado": string;
    "Mto Inafecto": string;
    "ISC": string;
    "IGV / IPM": string;
    "ICBPER": string;
    "Otros Tributos": string;
    "Total CP": string;
    "Moneda": string;
    "Fecha Emisión Doc Modificado": string;
    "Tipo CP Modificado": string;
    "Serie CP Modificado": string;
    "Nro CP Modificado": string;
    "index": number;
    "cuentaConPorCo": string;
    "cuentaConIngreso": string;
    "Area": string;
    "Costo": string;
    "Referencia": string;
    
}

export function FormatearJson(Json:any[]) {
    const mes = parseFloat(Json[0]["Fecha de emisión"].split('/')[1]) * 10000;

    const newJson = Json.map((compo:DataRow, index:number) => {
        const tp = () => {
            if (compo["Tipo CP/Doc."] === "01") {
                return "FT";
            }
            if (compo["Tipo CP/Doc."] === "03") {
                return "BV";
            }
            if (compo["Tipo CP/Doc."] === "07") {
                return "NA";
            } else {
                return "No se encontro";
            }
        };

        const vFE = () => {
            if (compo["Valor Facturado Exportación"] === '0') {
                return "";
            } else {
                return parseFloat(compo["Valor Facturado Exportación"]).toFixed(2);
            }
        };

        const bIoG = () => {
            const biGravada = parseFloat(compo["BI Gravada"]);
            if (isNaN(biGravada) || biGravada === 0) {
                return "";
            } else if (biGravada < 0) {
                return (biGravada * -1).toFixed(2);
            } else {
                return biGravada.toFixed(2);
            }
        };

        const monE = () => {
            if (compo["Mto Exonerado"] === '0') {
                return "";
            } else {
                return parseFloat(compo["Mto Exonerado"]).toFixed(2);
            }
        };

        const MtoIna = () => {
            if (compo["Mto Inafecto"] === '0') {
                return "";
            } else {
                return parseFloat(compo["Mto Inafecto"]).toFixed(2);
            }
        };

        const iSC = () => {
            if (compo.ISC === '0') {
                return "";
            } else {
                return parseFloat(compo.ISC).toFixed(2);
            }
        };

        const IGV = () => {
            const IGV = parseFloat(compo["IGV / IPM"]);
            if (isNaN(IGV) || IGV === 0) {
                return "";
            } else if (IGV < 0) {
                return (IGV * -1).toFixed(2);
            } else {
                return IGV.toFixed(2);
            }
        };

        const ICBPER = () => {
            if (compo.ICBPER === '0') {
                return "";
            } else {
                return parseFloat(compo.ICBPER).toFixed(2);
            }
        };

        const OtrosTributos = () => {
            if (compo["Otros Tributos"] === '0') {
                return "";
            } else {
                return parseFloat(compo["Otros Tributos"]).toFixed(2);
            }
        };

        const totalCP = () => {
            const total = parseFloat(compo["Total CP"]);
            if (total < 0) {
                return (total * -1).toFixed(2);
            } else {
                return total.toFixed(2);
            }
        };

        const tipoC = () => {
            if (compo["Tipo CP/Doc."] === "07") {
                return "V";
            } else {
                return 'M';
            }
        };

        const TipoCPModificado = () => {
            if (compo["Tipo CP Modificado"] === "01") {
                return "FT";
            } else if (compo["Tipo CP Modificado"] === "03") {
                return "BV";
            } else {
                return "";
            }
        };
        const NumeroIdentidad = () => {
            if (compo["Nro Doc Identidad"] === "10000000003") {
                return "0000";
            } else {
                compo["Nro Doc Identidad"];
            }
        };
        const RazonSocial = ()=>{
            if(compo["Apellidos Nombres/ Razón Social"]== "-"){
                return "CLIENTES VARIOS"
            }else{
                return compo["Apellidos Nombres/ Razón Social"]
            }
        }
        return {
            SubDiario: compo.SubDiario,
            "Comprobante Concar": `0${mes + (index + 1)}`,
            Moneda: (compo.Moneda === 'PEN') ? "MN" : "DL",
            "Fecha de emisión": compo["Fecha de emisión"],
            "Fecha Vcto/Pago": compo["Fecha Vcto/Pago"],
            "Tipo de Documento": tp(),
            "Serie de documento": compo["Serie del CDP"],
            "Número de documento": compo["Nro CP o Doc. Nro Inicial (Rango)"],
            "Tipo de documento de Identidad": compo["Tipo Doc Identidad"],
            "Número de documento de identidad": NumeroIdentidad(),
            "Apellidos y Nombres, denominación o razón social del proveedor": RazonSocial(),
            "Valor facturado de la exportación": vFE(),
            "Base imponible de la operación gravada": bIoG(),
            "Importe total de la operación Exonerada": monE(),
            "Importe total de la operación Inafecta": MtoIna(),
            ISC: iSC(),
            "IGV Y/O IPM": IGV(),
            ICBPER: ICBPER(),
            "Otros tributos": OtrosTributos(),
            "Importe total": totalCP(),
            "Tipo de Conversión": tipoC(),
            "Tipo de cambio": "",
            "Referencia del comprobante de pago que se modifica Fecha": compo["Fecha Emisión Doc Modificado"],
            "Referencia del comprobante de pago que se modifica Tipo": TipoCPModificado(),
            "Referencia del comprobante de pago que se modifica Serie": compo["Serie CP Modificado"],
            "Referencia del comprobante de pago que se modifica Numero": compo["Nro CP Modificado"],
            "Cuenta contable por cobrar": compo.cuentaConPorCo,
            "Cuenta contable de ingresos": compo.cuentaConIngreso,
            Area: compo.Area,
            "Centro de Costo": compo.Costo,
            "Anexo de Referencia": compo.Referencia
        };
    });

    return newJson;
}


const convertToNumber = (value: string | number): number => {
    const num = parseFloat(value as string);
    return isNaN(num) ? 0 : num;
};

// Define la constante para la selección de filas
export const rowSelectCritera = (row: Datacompo): boolean => {
    const importeTotal = convertToNumber(row["Importe total"]);
    const igvIpm = convertToNumber(row["IGV Y/O IPM"]);
    const baseImponible = convertToNumber(row["Base imponible de la operación gravada"]);
    return importeTotal === (igvIpm + baseImponible);
};

// Define la constante para los estilos condicionales de las filas
export const conditionalRowStyles = [
    {
        when: (row: Datacompo) => {
            const importeTotal = convertToNumber(row["Importe total"]);
            const igvIpm = convertToNumber(row["IGV Y/O IPM"]);
            const baseImponible = convertToNumber(row["Base imponible de la operación gravada"]);
            return importeTotal !== (igvIpm + baseImponible);
        },
        style: {
            backgroundColor: 'rgb(220 38 38 / 0.15)',
        },
    }
   
];
export const rowDisabledCriteria = (row: Datacompo): boolean => {
    const importeTotal = convertToNumber(row["Importe total"]);
    const igvIpm = convertToNumber(row["IGV Y/O IPM"]);
    const baseImponible = convertToNumber(row["Base imponible de la operación gravada"]);
    return importeTotal !== (igvIpm + baseImponible);
};
