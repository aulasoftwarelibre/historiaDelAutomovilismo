import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={`justify-self-center justify-items-center w-full text-black h-full bg-no-repeat bg-cover bg-center`}
          style={{
            backgroundImage: `linear-gradient(#7869601a, #786960), url("images/gradientefondo.jpeg")`, // <-- URL dinámica
          }}>
      <section className="pl-[10%] lg:pl-[5%] pr-[5%] pb-8 pt-20 max-w-5xl">
        <h1 className={styles.titleText}>About us</h1>
        <br></br>
        <h2 className={styles.text}>
          <span className={styles.boldPurple}>La Exposicion de la Historia del Automovilismo en Córdoba</span> es un{" "}
          evento destinado a dar a conocer la historia del automovilismo de la provincia
          durante las decadas de 1900 a 1980. Te esperamos en el <span className={styles.boldPurple}>Rectorado de la Universidad de Córdoba del 7 al 15 de noviembre.</span>
        </h2>
        <br></br>

      </section>
      <section className="grid grid-cols-1 pl-[10%] lg:pl-[5%] pr-[5%] py-5 sm:grid-cols-2 gap-4 max-w-5xl justify-self-center">
        <div className="justify-self-center">
          <h1 className={styles.text}>Socials</h1>
          <a href="https://www.instagram.com/crt_uco/">
            @crt_uco
          </a>
        </div>
        
      </section>
    </div>
  );
}

export default AboutUs;
