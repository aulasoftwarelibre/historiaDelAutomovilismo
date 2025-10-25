import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={`justify-self-center justify-items-center w-full text-black ${styles.backgroundColor}`}>
      <section className="pl-[10%] lg:pl-[5%] pr-[5%] pb-8 pt-20 max-w-5xl">
        <h1 className="font-bold">About us</h1>
        <br></br>
        <h2 className="">
          <span className={styles.boldPurple}>ZimCore Tech Meet</span> is an{" "}
          <span className={styles.boldPurple}>annual event</span> where coders,
          developers, and web professionals meet casually to discuss and
          celebrate the most exciting developments in the tech industry.
        </h2>
        <br></br>

      </section>
      <section className="grid grid-cols-1 pl-[10%] lg:pl-[5%] pr-[5%] py-5 sm:grid-cols-2 gap-4 max-w-5xl justify-self-center">
        <div className="justify-self-center">
          <h1 className="font-bold">Socials</h1>
          <a href="https://www.instagram.com/crt_uco/">
            @crt_uco
          </a>
        </div>
        
      </section>
    </div>
  );
}

export default AboutUs;
