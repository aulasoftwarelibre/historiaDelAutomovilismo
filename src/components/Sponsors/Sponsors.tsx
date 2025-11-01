import React from "react";
import styles from "./Sponsors.module.css";
import Image from "next/image";

//Falta agegrar la fuente, debería de ser la fuente REALTIME
//Tambien alomejors falta hacer que cuando el movil se haga mas pequeño las imagenes tambien

interface Sponsor {
  id: number;
  img: string;
}

const sponsors: Sponsor[] = [
  { id: 1, img: "/images/UCO.png" },
  { id: 2, img: "/images/AulaMotor.png" },
  { id: 3, img: "/images/logo-cuadrado-simple.svg" },
  { id: 4, img: "/images/logotipo-EPSC.png"},
];

const SponsorList = () => {
  return (
    <div className={`${styles.centered2}`}>
      {sponsors.map((sponsor) => (
        <div key={sponsor.id} className="pt-12 pb-8">
          <Image
            src={sponsor.img}
            alt="sponsor logo"
            width={170}
            height={150}
            style={{ paddingBottom: "10px" }}
          />
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
            <p className={`lg:text-2xl text-[10px] text-wrap ${styles.titleText}`}>
              COLABORADORES
            </p>
          </div>
            <SponsorList />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
