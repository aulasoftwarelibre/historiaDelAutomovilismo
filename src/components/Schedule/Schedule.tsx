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
  title: string;
  description: string;
  img: string;
}

const viernes14: Activity[] = [
  {
    id: 1,
    start: "9:00",
    end: "10:00",
    title: "APERTURA",
    description: "Inicio del evento en la diputación de córdoba",
    img: "/images/digref.webp",
  },
  {
    id: 2,
    start: "20:00",
    end: "21:00",
    title: "CIERRE",
    description: "Cierre del evento",
    img: "/images/digref2.jpg",
  },
];

const days_list: Day[] = [
  {
    id: 1,
    day: "Viernes 14 de Noviembre",
    activities: viernes14,
  },
  {
    id: 2,
    day: "Sabado 15 de Noviembre",
    activities: viernes14,
  },
];

export const Schedule = () => {
  return (
    <div className="h-full w-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url("images/gradientefondo.jpeg")`, // <-- URL dinámica
          }}>
      <div className="grid grid-cols-1 items-start text-black justify-items-center ">
          <div className={styles.title}> 
            <p className={styles.titleText}>
                CALENDARIO
            </p>
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
                  <div className="border-1 border-black w-[100%]  items-center text-center text-wrap mt-5 mb-5 bg-transparent pb-5">
                    <p className={`${styles.EventTextTitle}`}>
                      {activity.title}
                    </p>
                    <div className=" grid grid-cols-2 items-center">
                      <p className={`${styles.EventText}`}>
                        {activity.description}
                      </p>
                      <div className="relative w-[60%] md:w-[45%] lg:w-[35%] aspect-square justify-self-center ">
                        <Image
                          src={activity.img}
                          alt={activity.img}
                          fill
                          className="justify-self-center"
                        />
                      </div>
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
