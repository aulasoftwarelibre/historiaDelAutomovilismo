import Image from "next/image";

export const Funcion = () => {
  return (
    <div className="md:text-3xl lg:text-7xl text-xl font-semibold not-italic text-black no-underline bg-white md:grid grid-cols-3">

      <div id="titulo" className="md:justify-self-start justify-self-center align-middle p-[10%] md:col-span-2">
        <p>
          Década en marcha:<br />Aula del Motor y<br />Mujer en la Pole
        </p>
        <div className="grid grid-flow-col">
            <div className="lg:w-32 md:w-22 w-16 mt-10 h-1" style={{ backgroundColor: "#787ff6" }}></div>
            <div className="lg:w-32 md:w-22 w-16 mt-10 h-1" style={{ backgroundColor: "#787ff6" }}></div>
        </div>
      </div>

      <div id="logo" className="mb-[100] justify-self-center max-w-50 md:p-20 md:max-w-1000">
        <Image
          src="/images/Logo NOV 500x500_page-0001.jpg"
          alt="logo decada en marcha"
          //MODIFICAR EL WIDTH/HEIGHT
          width={450}
          height={450}
          className="justify-self-start"
        />
      </div>

      <div id="textitos" className="pl-[10%] md:mt-[-10vw] lg:mt-[-8vw] mt-[-10%] mb-[10%]">

          <div id="primer-texto" className="grid grid-cols-6 p-10">
            <div className="col-span-1">
              <div className="w-6 h-6 rotate-(-90) border-t-4 border-r-4 text-[#787ff6]"></div>
              <div className="w-6 h-1 mt-[-13] rotate-135" style={{ backgroundColor: "#787ff6" }}></div>
            </div>
            <div className="lg:text-3xl md:text-lg text-s font-normal not-italic text-[#787ff6] col-span-5 pl-4">
              NOVIEMBRE 14-24
            </div>
          </div>

          <div id="segundo-texto" className="grid grid-cols-6 p-10">
            <div className="col-span-1">
              <div className="w-6 h-6 rotate-(-90) border-t-4 border-r-4 text-[#787ff6]"></div>
              <div className="w-6 h-1 mt-[-13] rotate-135" style={{ backgroundColor: "#787ff6" }}></div>
            </div>
            <div className="lg:text-3xl md:text-xl text-s font-normal not-italic text-[#787ff6] col-span-5 pl-4">
              PALACIO DE LA MERCED<br />DIPUTACIÓN DE CÓRDOBA
            </div>
          </div>
        </div>
    </div>
  );
};

export default Funcion;
