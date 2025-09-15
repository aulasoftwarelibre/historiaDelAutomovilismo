import React from "react";
import styles from "./Schedule.module.css"
import Image from "next/image";

interface Day{
    id: number,
    day: string,
    activities: Activity[],
}

interface Activity{
    id: number,
    start: string,
    end: string,
    title: string,
    description: string,
    img: string
}

const viernes14: Activity[] = [
    {id: 1, start: "9:00", end: "10:00",title: "APERTURA", description: "Inicio del evento en la diputación de córdoba", img: "/images/digref.webp"},
    {id: 2, start: "20:00", end: "21:00",title: "CIERRE", description: "Cierre del evento", img: "/images/digref2.jpg"}
]

const days_list: Day[] = [
    {
        id: 1,
        day: "Viernes 14 de Noviembre",
        activities: viernes14
    },
    {
        id:2,
        day: "Sabado 15 de Noviembre",
        activities: viernes14
    }
]

export const Schedule = () => {
    return (
        <div className="grid grid-cols-1 items-start bg-[rgb(120,127,246)] text-white justify-items-center">
            
            <p className="text-center text-lg md:text-2xl lg:text-4xl p-[1%] mt-10 mb-10 w-4/9 border-1 border-white font-mono tracking-widest">CALENDARIO</p>
            <div className="w-8/9 pb-10">

                {days_list.map((day) => (
                    <div key={day.id} className="mb-5">
                        <div className="justify-self-center lg:text-3xl md:text-xl">
                            {day.day}
                        </div>
                        {day.activities.map((activity) => (
                            <div key={activity.id} className={styles.centered}>
                                <div className="border-1 border-white font-mono tracking-widest pt-5 pb-5 lg:pl-12 lg:pr-12 md:pl-8 md:pr-8 pl-5 pr-5 mt-5 mb-5 flex flex-col justify-between bg-gradient-to-b from-[rgb(120,127,246)] to-[rgba(41,46,138,0.25)] md:text-lg lg:text-2xl">

                                    <p className="mb-3">{activity.start}</p>
                                    <p className="">{activity.end}</p>

                                </div>
                                <div className="border-1 border-white w-[100%]  items-center text-center text-wrap mt-5 mb-5 bg-gradient-to-b from-[rgb(120,127,246)] to-[rgba(41,46,138,0.25)] pb-5">

                                    <p className="lg:text-4xl md:text-2xl text-lg p-2 pt-5 justify-self-center font-mono tracking-widest">{activity.title}</p>
                                    <div className=" grid grid-cols-2 items-center">

                                        <p className="p-3 text-xs md:text-lg lg:text-2xl text-gray-300">{activity.description}</p>
                                        <div className="relative w-[60%] md:w-[45%] lg:w-[35%] aspect-square justify-self-center">
                                            <Image src={activity.img} alt={activity.img} fill className="justify-self-center"/>
                                        </div>

                                    </div>  

                                </div>

                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
} 