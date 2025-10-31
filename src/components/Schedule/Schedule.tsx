import React from "react";
import styles from "./Schedule.module.css";
import Image from "next/image";

interface Day {
  id: number;
  day: string;
  activities: Activity[];
}

interface Activity {
  id: number;
  start: string;
  end: string;
  description: string;
}

const viernes7: Activity[] = [
  {
    id: 1,
    start: "19:30",
    end: "20:30",
    description: "Inicio del evento en la diputación de Córdoba",
  },
  {
    id: 2,
    start: "20:30",
    end: "00:00",
    description: "Copa de vino español con autoridades e invitados",
  },
];

const sabado8: Activity[] = [
  {
    id: 1,
    start: "10:30",
    end: "11:30",
    description: "La historia de la automoción cordobesa",
  },
  {
    id: 2,
    start: "11:30",
    end: "13:00",
    description: "Visitas guiadas",
  },
  {
    id: 3,
    start: "14:00",
    end: "18:00",
    description: "Pausas de comida",
  },
  {
    id: 4,
    start: "18:00",
    end: "20:00",
    description: "Visitas guiadas",
  },
];

const domingo9: Activity[] = [
  {
    id: 1,
    start: "10:30",
    end: "11:30",
    description: "CERRADO",
  },
];

const lunes10: Activity[] = [
  {
    id: 1,
    start: "10:30",
    end: "19:00",
    description: "Exposición con entrada libre para el público general",
  },
];

const jueves13: Activity[] = [
  {
    id: 1,
    start: "10:00",
    end: "10:30",
    description: "Bienvenida",
  },
  {
    id: 2,
    start: "10:30",
    end: "11:30",
    description: "Mesa redonda: El futuro del Mercado Laboral para la empresa ",
  },
  {
    id: 3,
    start: "11:30",
    end: "12:00",
    description: "Coffee break",
  },
  {
    id: 4,
    start: "12:00",
    end: "13:00",
    description: "La investigación de la automoción en el siglo XXI",
  },
  {
    id: 5,
    start: "12:00",
    end: "13:00",
    description: "-Por definir-",
  },
];

const viernes14: Activity[] = [
  {
    id: 1,
    start: "10:00",
    end: "10:30",
    description: "Bienvenida",
  },
  {
    id: 2,
    start: "10:30",
    end: "11:30",
    description: "Mesa redonda: El futuro del Mercado Laboral para la empresa ",
  },
  {
    id: 3,
    start: "11:30",
    end: "12:00",
    description: "Coffee break",
  },
  {
    id: 4,
    start: "12:00",
    end: "13:00",
    description: "Visitas guiadas",
  },
  {
    id: 5,
    start: "13:00",
    end: "14:00",
    description: "-Por definir-",
  },
];

const sabado15: Activity[] = [
  {
    id: 1,
    start: "10:30",
    end: "11:30",
    description: "Cristina Gutierréz",
  },
  {
    id: 2,
    start: "11:30",
    end: "13:00",
    description: "Visitas guiadas",
  },
  {
    id: 3,
    start: "14:00",
    end: "15:00",
    description: "Clausura",
  },
];

const days_list: Day[] = [
  {
    id: 1,
    day: "Viernes 7 de Noviembre",
    activities: viernes7,
  },
  {
    id: 2,
    day: "Sabado 8 de Noviembre",
    activities: sabado8,
  },
  {
    id: 3,
    day: "Domingo 9 de Noviembre",
    activities: domingo9,
  },
  {
    id: 4,
    day: "Lunes 10 a miércoles 12 de Noviembre",
    activities: lunes10,
  },
  {
    id: 5,
    day: "Jueves 13 de Noviembre",
    activities: jueves13,
  },
  {
    id: 6,
    day: "Viernes 14 de Noviembre",
    activities: viernes14,
  },
  {
    id: 7,
    day: "Sábado 15 de Noviembre",
    activities: sabado15,
  },
];

export const Schedule = () => {
  return (
    <div
      className="h-full w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url("images/gradientefondo.jpeg")`, // <-- URL dinámica
      }}
    >
      <div className="grid grid-cols-1 items-start text-black justify-items-center ">
        <div className={styles.title}>
          <p className={styles.titleText}>CALENDARIO</p>
        </div>
        <div className="w-8/9 pb-10">
          {days_list.map((day) => (
            <div key={day.id} className="mb-5">
              <div className="justify-self-center text-xs md:text-xl lg:text-2xl font-mono">
                {day.day}
              </div>
              {day.activities.map((activity) => (
                <div key={activity.id} className={styles.centered}>
                  <div className="border-1 border-black font-mono tracking-widest pt-5 pb-5 lg:pl-12 lg:pr-12 md:pl-8 md:pr-8 pl-5 pr-5 mt-5 mb-5 flex flex-col justify-between bg-transparent md:text-lg lg:text-2xl">
                    <p className="mb-3">{activity.start}</p>
                    <p className="">{activity.end}</p>
                  </div>
                  <div className="border-1 border-black w-[100%] grid font-mono items-center text-center text-wrap mt-5 mb-5 bg-transparent px-5">
                    <div className="font-mono grid items-center">
                      <p
                        className={`align-middle items-center ${styles.EventText}`}
                      >
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
