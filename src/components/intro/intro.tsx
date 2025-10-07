import Image from "next/image";
import styles from "./intro.module.css";

export const Funcion = () => {
  return (
    <div className="not-italic text-black no-underline bg-white md:grid grid-cols-2">
      <div
        id="logo"
        className="px-[5%] pt-[5%] md:pt-[13%] flex justify-center order-2 md:order-2"
      >
        <Image
          src="/images/Logo NOV 500x500_page-0001.jpg"
          alt="logo decada en marcha"
          width={500}
          height={500}
        />
      </div>
      <div
        id="titulo"
        className={`px-[8%] md:px-[10%] pt-[2%] pb-[13%] md:py-[13%] md:col-span-1 order-1 md:order-1 ${styles.textContainer}`}
      >
        <p className="text-black leading-tight">
          <span className="font-[625]">Década en marcha:</span>
          <br />
          <span className="font-[550]">Aula del Motor y</span>
          <br />
          <span className="font-[550]">Mujer en la Pole</span>
        </p>
        <div className="grid grid-flow-col">
          <div
            className="lg:w-32 md:w-22 w-16 mt-4 h-1"
            style={{ backgroundColor: "#787ff6" }}
          ></div>
          <div
            className="lg:w-32 md:w-22 w-16 mt-4 h-1"
            style={{ backgroundColor: "#787ff6" }}
          ></div>
        </div>
      </div>

      <div
        id="textitos"
        className="pl-[10%] md:mt-[-10vw] lg:mt-[-8vw] mt-[-10%] mb-[10%] order-3 md:order-3"
      >
        <div id="primer-texto" className="grid grid-cols-6 p-10">
          <div className="col-span-1">
            <div className="w-6 h-6 rotate-(-90) border-t-4 border-r-4 text-[#787ff6]"></div>
            <div
              className="w-6 h-1 mt-[-13] rotate-135"
              style={{ backgroundColor: "#787ff6" }}
            ></div>
          </div>
          <div className="lg:text-3xl md:text-lg text-s font-normal not-italic text-[#787ff6] col-span-5 pl-4">
            NOVIEMBRE 14-24
          </div>
        </div>

        <div id="segundo-texto" className="grid grid-cols-6 p-10">
          <div className="col-span-1">
            <div className="w-6 h-6 rotate-(-90) border-t-4 border-r-4 text-[#787ff6]"></div>
            <div
              className="w-6 h-1 mt-[-13] rotate-135"
              style={{ backgroundColor: "#787ff6" }}
            ></div>
          </div>
          <div className="lg:text-3xl md:text-xl text-s font-normal not-italic text-[#787ff6] col-span-5 pl-4">
            PALACIO DE LA MERCED
            <br />
            DIPUTACIÓN DE CÓRDOBA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funcion;
