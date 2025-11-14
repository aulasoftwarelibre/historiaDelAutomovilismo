import React from "react";
import styles from "./Schedule.module.css";

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
    end: "",
    description: "Inauguración de la exposición con autoridades e invitados (A puerta cerrada)",
  },
];

const sabado8: Activity[] = [
  {
    id: 1,
    start: "10:00",
    end: "13:00",
    description: "Apertura de visita libre al público",
  },
  {
    id: 2,
    start: "17:00",
    end: "20:00",
    description: "Apertura de visita libre al público",
  },
];

const domingo9: Activity[] = [
  {
    id: 1,
    start: "10:00",
    end: "14:00",
    description: "Apertura de visita libre al público",
  },
];

const lunes10: Activity[] = [
  {
    id: 1,
    start: "10:00",
    end: "13:00",
    description: "Apertura de visitas guiadas",
  },
  {
    id: 2,
    start: "17:00",
    end: "21:00",
    description: "Apertura de visita libre al público",
  },
];

const Martes11: Activity[] = [
  {
    id: 1,
    start: "10:00",
    end: "13:00",
    description: "Apertura de visitas guiadas",
  },
  {
    id: 2,
    start: "17:00",
    end: "19:00",
    description: "Apertura de visita libre al público",
  },
  {
    id: 3,
    start: "19:00",
    end: "21:00",
    description: "Visita guiada a los asistentes a las Jornadas de Transferencia de Investigación a la Automoción",
  },
];

const Miercoles12: Activity[] = [
  {
    id: 1,
    start: "10:00",
    end: "13:00",
    description: "Apertura de visitas guiadas",
  },
  {
    id: 2,
    start: "17:00",
    end: "21:00",
    description: "Apertura de visita libre al público",
  },
];

const jueves13: Activity[] = [
  {
    id: 1,
    start: "10:00",
    end: "13:00",
    description: "Apertura de visitas guiadas",
  },
  {
    id: 2,
    start: "17:00",
    end: "21:00",
    description: "Apertura de visita libre al público",
  },
];


const viernes14: Activity[] = [
  {
    id: 1,
    start: "10:00",
    end: "13:00",
    description: "Apertura de visitas guiadas",
  },
  {
    id: 2,
    start: "17:00",
    end: "19:00",
    description: "Apertura de visita libre al público",
  },
  {
    id: 3,
    start: "19:00",
    end: "21:00",
    description: "Visita para las Jornadas Nacionales de Mujeres en el Mundo de la Competición, del Motor y la Formación Profesional",
  },
];

const sabado15: Activity[] = [
  {
    id: 1,
    start: "10:00",
    end: "12:30",
    description: "Exposicion cerrada al publico general",
  },
  {
    id: 2,
    start: "13:00",
    end: "",
    description: "Cierre de la exposición",
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
    day: "Lunes 10 de Noviembre",
    activities: lunes10,
  },
  {
    id: 5,
    day: "Martes 11 de Noviembre",
    activities: Martes11,
  },
  {
    id: 6,
    day: "Miercoles 12 de Noviembre",
    activities: Miercoles12,
  },
  {
    id: 7,
    day: "Jueves 13 de Noviembre",
    activities: jueves13,
  },
  {
    id: 8,
    day: "Viernes 14 de Noviembre",
    activities: viernes14,
  },
  {
    id: 9,
    day: "Sábado 15 de Noviembre",
    activities: sabado15,
  },
];

export const Schedule = () => {
  return (
    <div
      className="bg-repeat bg-cover bg-fixed"
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
              <div className="justify-self-center text-xs md:text-xl lg:text-2xl font-mono font-extrabold">
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
