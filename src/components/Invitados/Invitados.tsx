import React from "react";
import "./Invitados.css";

type Guest = {
  name: string;
  role: string;
  img: string;
};

const guests: Guest[] = [
  {
    name: "Harper Gilbert",
    role: "Chief Executive Officer, Heiman Software Labs",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rocco Holden",
    role: "Founder and Chairman, Berou Solutions Inc.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Crystal Buckner",
    role: "Chief Financial Officer, ZimCore Hubs",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Adri García",
    role: "Founder and Chairman, Berou Solutions Inc.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Alicia M",
    role: "Computer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David",
    role: "Engineer",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const Invitados: React.FC = () => {
  return (
    <div className="guests">
      <div className="title">
        <p className="titleText">INVITADOS</p>
      </div>
      <div className="guests-grid">
        {guests.map((guest, index) => (
          <div key={index} className="guest-card">
            <img src={guest.img} alt={guest.name} />
            <div className="guest-info">
              <div className="guest-name">{guest.name}</div>
              <div className="guest-role">{guest.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invitados;
