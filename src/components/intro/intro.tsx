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
        className="md:mt-[-10vw] lg:mt-[-8vw] mt-[-10%] mb-[10%] order-3 md:order-3"
      >
        <div id="primer-texto" className="grid grid-cols-6 px-10 pt-10 pb-2">
          <div className="col-span-1 flex flex-col items-center justify-center -mt-2">
            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20251114%2F20251125&location=Palacio%20de%20la%20Merced%2C%20Diputaci%C3%B3n%20de%20C%C3%B3rdoba&text=D%C3%A9cada%20en%20marcha%3A%20Aula%20del%20Motor%20y%20Mujer%20en%20la%20Pole">
              <div className="w-6 h-6 rotate-(-90) border-t-4 border-r-4 text-[#787ff6]"></div>
              <div
                className="w-6 h-1 mt-[-13] rotate-135"
                style={{ backgroundColor: "#787ff6" }}
              ></div>
            </a>
          </div>
          <div className="col-span-5 pl-4">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20251114%2F20251125&location=Palacio%20de%20la%20Merced%2C%20Diputaci%C3%B3n%20de%20C%C3%B3rdoba&text=D%C3%A9cada%20en%20marcha%3A%20Aula%20del%20Motor%20y%20Mujer%20en%20la%20Pole"
              className={`font-normal not-italic text-[#787ff6] ${styles.dateText}`}
            >
              NOVIEMBRE 14-24
            </a>
          </div>
        </div>

        <div id="segundo-texto" className="grid grid-cols-6 px-10 pt-2 pb-10">
          <div className="col-span-1 flex flex-col items-center justify-center -mt-2">
            <a href="https://www.google.com/maps/dir//Pl.+de+Col%C3%B3n,+15,+Centro,+14001+C%C3%B3rdoba/@37.8899337,-4.8623677,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd6cdf653a12b631:0x1eb7a0e55142d991!2m2!1d-4.7797457!2d37.8900325?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D">
              <div className="w-6 h-6 rotate-(-90) border-t-4 border-r-4 text-[#787ff6]"></div>
              <div
                className="w-6 h-1 mt-[-13] rotate-135"
                style={{ backgroundColor: "#787ff6" }}
              ></div>
            </a>
          </div>
          <div className="col-span-5 pl-4">
            <a
              href="https://www.google.com/maps/dir//Pl.+de+Col%C3%B3n,+15,+Centro,+14001+C%C3%B3rdoba/@37.8899337,-4.8623677,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd6cdf653a12b631:0x1eb7a0e55142d991!2m2!1d-4.7797457!2d37.8900325?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
              className={`font-normal not-italic text-[#787ff6] ${styles.locationText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              PALACIO DE LA MERCED
              <br />
              DIPUTACIÓN DE CÓRDOBA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funcion;
