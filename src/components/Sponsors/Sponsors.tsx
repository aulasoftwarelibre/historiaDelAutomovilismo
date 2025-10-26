import React from "react";
import styles from "./Sponsors.module.css";
import Image from "next/image";

//Falta agegrar la fuente, debería de ser la fuente REALTIME
//Tambien alomejors falta hacer que cuando el movil se haga mas pequeño las imagenes tambien

interface Sponsor {
  id: number;
  text: string;
  img: string;
}

const sponsors: Sponsor[] = [
  { id: 1, text: /*aqui no va nombre hay que quitarselo*/"UCO", img: "/images/UCO.png" },
  { id: 2, text: "Aula del Motor", img: "/images/AulaMotor.png" },
  { id: 3, text: "Aula de software libre", img: "/images/logo-cuadrado-simple.svg" },
  {
    id: 4,
    text: "Eventos sancristobal",
    img: "/images/logo-sancristobal.png",
  },
  {
    id: 5,
    text: "placeholder",
    img: "/images/8743a10b2b1958f8541af429ecf7e03e.jpg",
  },
  {
    id: 6,
    text: "placeholder2",
    img: "/images/ab6761610000e5ebcce32307d0f312e8faf01bae.jpeg",
  },

];

const SponsorList = () => {
  return (
    <div className={styles.centered2}>
      {sponsors.map((sponsor) => (
        <div key={sponsor.id} className="pt-12 pb-8">
          <Image
            src={sponsor.img}
            alt={sponsor.text}
            width={150}
            height={150}
            style={{ paddingBottom: "10px" }}
          />
          <p className="text-center font-bold text-xs md:text-s lg:text-lg text-black">
            {sponsor.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export const Sponsors = () => {
  return (
    <div  className="h-full w-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url("images/gradientefondo.jpeg")`, // <-- URL dinámica
          }}>
      <div className="w-1/1 h-3/4 p-[3%]">
        <div className={styles.centered}>
          <div className={styles.title}>
            <p className={styles.titleText}>
              PATROCINADORES Y COLABORADORES
            </p>
          </div>
            <SponsorList />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
