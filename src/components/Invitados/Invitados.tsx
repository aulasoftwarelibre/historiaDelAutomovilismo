import React from "react";
import "./Invitados.css";



const Invitados: React.FC = () => {
  return (
    <div className="guests">
      <div className="title">
        <p className="titleText">¡APUNTATE!</p>
      </div>
      <div className="h-[40%] bg-black w-200 bg-repeat bg-cover bg-left title2"
          style={{
            backgroundImage: `url("images/gradientefondo.jpeg")`, // <-- URL dinámica
          }}>
        
        <div className=" grid grid-cols-2">
          <div className="self-center">
            <p className="text-[#786960] font-bold font-mono lg:text-xl text-xs lg-pb-20 pb-10">¡PULSA AQUÍ!</p>
            <a href="https://entradas.tickety.es/events/exposicion-historia-del-automovilismo-de-la-provincia-de-cordoba-1900-1980">
              <img className="w-100 animate-bounce justify-self-center self-center shadow-2xl " src="https://d2il8hfach02z9.cloudfront.net/uploads/saas_provider/logo_cfe_header/fb1e33540b64b7756bb20403d300d755514b9eb8/LOGO_WEB_PNG_BLANCO.png?v=1745250076" alt="logo empresa" />
            </a>
          </div>
          <a className="w-full p-2" href="https://entradas.tickety.es/events/exposicion-historia-del-automovilismo-de-la-provincia-de-cordoba-1900-1980">
            <img className="w-40 justify-self-center border-8" src="images/event.png" alt="imagen evento"/>
          </a>
        </div>
        

      </div>

    </div>
  );
};

export default Invitados;
