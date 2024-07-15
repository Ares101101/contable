interface HeaderProps {
    layout: boolean[];
    Cambio: (i: number) => void;
}

const NavBar = [
    "Ventas",
    "Compras",
    "Hoja de Trabajo",
    "Pagos"
]

const Header: React.FC<HeaderProps> =(layout, Cambio)=>{
    return(
        <header className="  bg-zinc-800 h-7 text-white/80 text-sm">
            <ul className=" px-2  flex items-center w-full text-center h-full">
                {NavBar.map((l, i)=>(
                    <li 
                        key={i} 
                        onClick={()=>{ layout.Cambio(i)}}
                        className={" select-none rounded-md hover:bg-white/15 px-2 cursor-pointer" +`${layout.layout[i]?" text-sky-400":""}`}
                    >
                        {l}
                    </li>
                ))}
            </ul>
      </header>
    )
}
export default Header