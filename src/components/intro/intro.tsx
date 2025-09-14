import Image from "next/image";

export const Funcion = () => {
    return (
      <div className="text-7xl ml-40 mt-35 font-semibold not-italic text-black no-underline">
        Década en marcha:
        <br />
        Aula del Motor y
        <br />
        Mujer en la Pole
        <Image src="/images/Logo NOV 500x500_page-0001.jpg" alt="error no se encontro" width={450} height={450} className="mt-[-210px] ml-200"/>
        <div className="text-3xl ml-15 mt-[-110px] font-normal not-italic text-[#787ff6]">
            NOVIEMBRE 14-24
        </div>
        <div className="text-3xl ml-15 mt-10 font-normal not-italic text-[#787ff6]">
        PALACIO DE LA MERCED
        <br />
        DIPUTACIÓN DE CÓRDOBA
        </div>
        <div className="ml-2 mt-[-140px] w-6 h-6 rotate-(-90) border-t-4 border-r-4 text-[#787ff6]">
        <div className="ml-(-1) mt-[73px] w-6 h-6 rotate-(-90) border-t-4 border-r-4 text-[#787ff6]"></div>
        <div className="w-6 h-1 mt-[-90px] rotate-135" style={{ backgroundColor: '#787ff6' }}></div>
        <div className="w-6 h-1 mt-[72.2px] rotate-135" style={{ backgroundColor: '#787ff6' }}></div>
        </div>
        
        
        
        <div className="ml-2 mt-[-100px] w-32 h-1" style={{ backgroundColor: '#787ff6' }}></div>
        <div className="ml-80 mt-[-4px] w-32 h-1" style={{ backgroundColor: '#787ff6' }}></div>
        
        
      </div>
      
    );
  }

 