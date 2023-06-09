import Link from "next/link";


export default function ProyectosPage(){
    return(
        <>
        <h2>Proyectos</h2>
        <Link href={"/proyectos/html-css-js"}>Proyectos html-css-js</Link>
        <Link href={"/proyectos/html-css"}>Proyectos html-css</Link>
        </>
    )
}