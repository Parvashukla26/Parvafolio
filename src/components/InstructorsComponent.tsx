'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
import Image from 'next/image';
function InstructorsComponent() {
    
    const instructors = [
        {
          id: 1,
          name: "John Doe",
          designation: "Guitar Instructor",
          image : "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",}
       , {
          id: 2,
          name: "Jane Smith",
          designation: "Piano Instructor",
          image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with actual image link from Unsplash
        },
        // {
        //   id: 3,
        //   name: "Emily Johnson",
        //   designation: "Violin Instructor",
        //   image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo", // replace with actual image link from Unsplash
        // },
        {
          id: 4,
          name: "Michael Brown",
          designation: "Drum Instructor",
          image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with actual image link from Unsplash
        },
        // {
        //   id: 5,
        //   name: "Sarah Davis",
        //   designation: "Vocal Coach",
        //   image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        // },
    ]
      
  return (
    <div className="relative h-[40rem] overlow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-5xl  mx-auto flex flex-col justify-center items-center h-full">
        <h2 className="text-2xl ms:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our instructors</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Professionals who will guide your Musical journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default InstructorsComponent;
