import styles from "./Walkthrough.module.css";
import React from "react";
import Image from "next/image";

const Walkthrough = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centered}>
        <h1 className={styles.title}>Walkthrough rapido</h1>
        <Image
          src="/logo-cuadrado-simple.svg"
          alt="logo"
          width={200}
          height={200}
        />
      </div>

      <div className={styles.centered}>
        <h2 className={styles.subtitle}>Botones</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Primario
          </button>
          <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded border">
            Secundario
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 border-2 border-green-700 rounded-full">
            Éxito
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border-2 border-red-700 rounded-full">
            Peligro
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded shadow">
            Advertencia
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Invertido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough;
