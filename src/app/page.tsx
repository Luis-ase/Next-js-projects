import Image from 'next/image';
import Link from 'next/link';
import { ModelsCss } from './Css/css';
import User from "./Recursos/Img/MIchael_Luis_Condori_Paye_SInfondo.png";
import HTMLSVG from "./Recursos/Img/html-5.png";
import CSSSVG from "./Recursos/Img/css-3-min.png";
import jsSVG from "./Recursos/Img/js-min.png";


export default function HomePage() {
  const autor: String = `<a href="https://www.flaticon.es/iconos-gratis/html-5" title="html 5 iconos">Html 5 iconos creados por Freepik - Flaticon</a>`;
  const autor2: String = `<a href="https://www.flaticon.es/iconos-gratis/css" title="css iconos">Css iconos creados por Pixel perfect - Flaticon</a>`;
  const autor3: String = `<a href="https://www.flaticon.es/iconos-gratis/javascript" title="javascript iconos">Javascript iconos creados por Freepik - Flaticon</a>`;
  return (
    <div>
      <div className='p-4 w-full h-[20rem]  flex-col gap-4 flex items-center justify-center'>
        <p className='text-center p-2'>Hola me llamo Michael Luis estos son algunos proyectos de html-css-js que eh realizado mientras estudiaba y/o practicaba</p>
        <p className='text-center p-2'>Asi, este tambien es un proyecto de practica</p>
        <div className={`${ModelsCss.display} w-full h-42 `}>
          <div className={`m-1 w-[4rem] h-[4rem] `}>
           <Image
           className='w-full h-full'
            src={HTMLSVG}
            alt='html'
           />
           </div>
          <div className={`m-1 w-[4rem] h-[4rem] `}>
           <Image
           className='w-full h-full'
            src={CSSSVG}
            alt='css'
           />
           </div>
          <div className={`m-1 w-[4rem] h-[4rem] `}>
           <Image
           className='w-full h-full'
            src={jsSVG}
            alt='js'
           />
           </div>
        </div>
      </div>
      <div className='my-8 m-8 flex items-center justify-center flex-col gap-4'>
        <p>
          Proyectos:
        </p>
        <button className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            get Start
        </button>
      </div>
    </div>
  )
}
