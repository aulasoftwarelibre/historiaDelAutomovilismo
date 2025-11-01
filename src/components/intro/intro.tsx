import Image from "next/image";
import styles from "./intro.module.css";

export const Funcion = () => {
  return (
  <div  className="w-full bg-repeat bg-cover bg-left"
          style={{
            backgroundImage: `url("images/gradientefondo.jpeg")`, // <-- URL dinámica
          }}>
    <div className="w-full bg-repeat bg-cover bg-center "
          style={{
            backgroundImage: `url("images/patroncoches.webp")`, // <-- URL dinámica
          }}>
      <div className="not-italic text-black no-underline md:grid grid-cols-2 lg:bg-gradient-to-r to-transparent from-[#ffffff] bg-gradient-to-t md:bg-gradient-to-r md:bg-transparent bg-[#ffffff7e]">
        <div
          id="logo"
          className="px-[5%] pt-[5%] md:pt-[13%] flex justify-center order-2 md:order-2"
        >
          <Image
            src="/images/coche.webp"
            alt="logo decada en marcha"
            width={880}
            height={780}
          />
        </div>
        <div
          id="titulo"
          className={`px-[8%] md:px-[5%] pt-[2%] pb-[13%] md:py-[13%] text-justify md:col-span-1 order-1 md:order-1 w-[99%] ${styles.textContainer} `}
        >
          <p className="text-black leading-tight text-justify w-[99%]">
            <span className="font-[625] text-justify">Historia del automovilismo</span>
            <br />
            <span className="font-[550] text-justify">de la provincia de Córdoba</span>
          </p>
          <div className="grid grid-flow-col">
            <div
              className="lg:w-52 md:w-22 w-16 mt-4 h-1"
              style={{ backgroundColor: "#786960" }}
            ></div>
            <div
              className="lg:w-52 md:w-22 w-16 mt-4 h-1 justify-self-end"
              style={{ backgroundColor: "#786960" }}
            ></div>
          </div>
        </div>

        <div
          id="textitos"
          className="md:mt-[-10vw] lg:mt-[-15vw] mt-[-10%] order-3 md:order-3"
        >
          <div id="primer-texto" className="grid grid-cols-6 px-10 pt-10 pb-2">
            <div className="col-span-1 flex flex-col items-center justify-center -mt-2">
              <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20251107%2F20251116&location=Rectorado%20de%20la%20Universidad%20de%20C%C3%B3rdoba&text=Exposici%C3%B3n%20Historia%20del%20Automovilismo">
                <div className="w-6 h-6 rotate-(-90) border-t-4 border-r-4 text-[#786960]"></div>
                <div
                  className="w-6 h-1 mt-[-13] rotate-135"
                  style={{ backgroundColor: "#786960" }}
                ></div>
              </a>
            </div>
            <div className="col-span-5 pl-4">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20251107%2F20251116&location=Rectorado%20de%20la%20Universidad%20de%20C%C3%B3rdoba&text=Exposici%C3%B3n%20Historia%20del%20Automovilismo"
                className={`font-normal not-italic text-[#786960] ${styles.dateText}`}
              >
                NOVIEMBRE 7-15
              </a>
            </div>
          </div>

          <div id="segundo-texto" className="grid grid-cols-6 px-10 pt-2 pb-10">
            <div className="col-span-1 flex flex-col items-center justify-center -mt-2">
              <a href="https://www.google.com/maps/place/Rectorado+de+la+Universidad+de+C%C3%B3rdoba/@37.8846901,-4.7910831,17z/data=!3m2!4b1!5s0xd6cdf60f2a11821:0x7ec3f61c3aafa62!4m6!3m5!1s0xd6cdf60e271dc79:0xde994cae3981bc29!8m2!3d37.8846901!4d-4.7885028!16s%2Fg%2F11xl66t4v?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D">
                <div className="w-6 h-6 rotate-(-90) border-t-4 border-r-4 text-[#786960]"></div>
                <div
                  className="w-6 h-1 mt-[-13] rotate-135"
                  style={{ backgroundColor: "#786960" }}
                ></div>
              </a>
            </div>
            <div className="col-span-5 pl-4">
              <a
                href="https://www.google.com/maps/place/Rectorado+de+la+Universidad+de+C%C3%B3rdoba/@37.8846901,-4.7910831,17z/data=!3m2!4b1!5s0xd6cdf60f2a11821:0x7ec3f61c3aafa62!4m6!3m5!1s0xd6cdf60e271dc79:0xde994cae3981bc29!8m2!3d37.8846901!4d-4.7885028!16s%2Fg%2F11xl66t4v?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                className={`font-normal not-italic text-[#786960] ${styles.locationText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                RECTORADO DE LA 
                <br></br>
                UNIV. DE CÓRDOBA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
 );
};  

export default Funcion;
