import Intro from "@/components/intro/intro";
import Invitados from "@/components/Invitados/Invitados";
import Calendario from "@/components/Schedule/Schedule";
import Patrocinadores from "@/components/Sponsors/Sponsors";
import SobreNosotros from "@/components/AboutUs/AboutUs";

export default function Home() {
  return (
    <main>
      <Intro />
      <Invitados />
      <Calendario />
      <Patrocinadores />
      <SobreNosotros />
    </main>
  );
}
