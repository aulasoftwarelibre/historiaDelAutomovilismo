import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.backgroundColor}>
      <section className="px-16 pb-8 pt-20 max-w-5xl">
        <h1 className="font-bold">About us</h1>
        <br></br>
        <h2 className="">
          <span className={styles.boldPurple}>ZimCore Tech Meet</span> is an{" "}
          <span className={styles.boldPurple}>annual event</span> where coders,
          developers, and web professionals meet casually to discuss and
          celebrate the most exciting developments in the tech industry.
        </h2>
        <br></br>
        <button
          className="border border-b-white mt-5 py-5 px-20 sm:px-46 md:px-66 lg:px-76 xl:px-82 shadow-md
               hover:shadow-xl transition-shadow duration-300"
        >
          STAY UPDATED
        </button>
      </section>
      <section className="grid grid-cols-1 px-16 py-5 sm:grid-cols-2 gap-4 max-w-5xl">
        <div>
          <h1 className="font-bold">Socials</h1>
          <a href="https://www.youtube.com/watch?v=ehpgMsgnbIE">
            @reallygreatsite
          </a>
        </div>
        <div>
          <h1 className="font-bold">Our newsletter</h1>
          <a
            className="underline"
            href="https://www.youtube.com/watch?v=4SbTaGiQXxA"
          >
            Sign up here!
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
