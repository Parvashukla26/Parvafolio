import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
function Herosection() {
  return (
    <div className="h-auto  md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20  "
        fill="white"
      />
      
      <div className="p-4 w-full text-center relative z-10">
        <h1 className="text-4xl md:text-7xl font-bold">
          Master The Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Discover the joy of music with Harmony Hub, your go-to platform for
          music education. Whether you're a beginner or an advanced musician, we
          offer a variety of courses to help you master your favorite instrument
          or enhance your musical knowledge.
        </p>
        <div className="pt-4">
          <Link href={"/courses"}>
          <Button borderRadius="1.75rem"
          className="bg-white dark:bg-black text-black dark:text-white
           border-neutral-200 dark:border-slate-800"> Explore More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
