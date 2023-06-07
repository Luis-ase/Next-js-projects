export function Footer(){
    return(
        <>
        
<footer className=" bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex justify-center">
            {/* controlador de cajas */}
          <div className="flex justify-between items-center">
            {/* cajas */}
              <div className="mx-4 sm:mx-8 md:mx-16">
                  <h2 className="mb-6 text-center  font-semibold text-gray-200 uppercase ">Recursos utilizados</h2>
                    <div className="flex justify-around items-center text-gray-400">
                        <p className="mx-1">
                          <a href="/recursos" className="hover:underline">Recursos</a>
                        </p>
                    </div>
              </div>

              <div className="mx-4 sm:mx-8 md:mx-16">
                  <h2 className="mb-6 text-center  font-semibold text-gray-200 uppercase ">Redes</h2>
                    <div className="flex justify-around items-center text-gray-400">
                        <p className="mx-1">
                          <a href="https://github.com/Luis-ase" className="hover:underline ">Github</a>
                        </p>
                        <p className="mx-1">
                          <a href="https://www.linkedin.com/in/michael-condori-2a0394251/" className="hover:underline">Linkdln</a>
                        </p>
                    </div>
              </div>
              
          </div>
      </div>
    </div>
</footer>

        </>
    )
}