import Link from "next/link";
import { useRouter } from "next/router";

export default function ProyectosPage() {
    return (
        <div className="flex gap-8 flex-col justify-between items-center ">
            <h2 className="text-center text-3xl my-8 ">Proyectos</h2>
            {/* relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 */}
            {/* border bg-gray-900 ring-4 outline-none  border-gray-900   ring-gray-800
                
                font-medium  text-lg px-5 py-2.5 text-center mr-2 mb-2
                 h-20 my-8 rounded-2xl */}
            <button className="
            border bg-gray-900 ring-4 outline-none  border-gray-900   ring-gray-800
            text-white 
              font-medium  text-lg px-5 py-2.5 text-center mr-2 mb-2
            h-20 my-8 rounded-2xl">
                <p>Proyectos html-css-js</p>
            </button>
            <button className="
                border bg-gray-900 ring-4 outline-none  border-gray-900   ring-gray-800
                text-white 
                  font-medium  text-lg px-5 py-2.5 text-center mr-2 mb-2
                 h-20 my-8 rounded-2xl">
                <p>Proyectos html-css</p>
            </button>

        </div>
    )
}