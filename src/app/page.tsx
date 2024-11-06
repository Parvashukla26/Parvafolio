import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import InstructorsComponent from "@/components/InstructorsComponent";
import ReviewCardComponent from "@/components/ReviewCardComponent";
import ServisesComponent from "@/components/ServisesComponent";
import StickyScrollRevealComponent from "@/components/StickyScrollRevealComponent";


export default function Home() {
  return (
<>
<main className="min-h-screen dark:bg-black   dark:bg-dot-white/[0.2]  antialiased bg-grid-white/[0.02]">

<Herosection/>
<FeaturedCourses />
<StickyScrollRevealComponent/>
<ReviewCardComponent/>
<ServisesComponent/>
<InstructorsComponent/>
<Footer/>
</main>
</>
   
  );
}
