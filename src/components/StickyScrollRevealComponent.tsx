"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolTeachers = [
    {
        title: "Lead Guitar Instructor",
        description:
            "John Doe has over 20 years of experience teaching guitar. He specializes in rock and blues and has performed in various bands. John focuses on technique and improvisation, helping students develop their unique sound.",
    },
    {
        title: "Piano and Keyboard Instructor",
        description:
            "Jane Smith is a classically trained pianist with a passion for jazz. With a Master’s degree in Music Education, she has taught students of all ages. Jane emphasizes music theory and creativity in her lessons.",
    },
    {
        title: "Vocal Coach",
        description:
            "Emily Johnson, a professional singer and voice coach, has been teaching for over a decade. She helps students improve their vocal techniques and performance skills, covering genres from classical to contemporary.",
    },
    {
        title: "Drum Instructor",
        description:
            "Michael Brown is a seasoned drummer with experience in both live performances and studio recordings. He teaches various styles, including rock, jazz, and funk. Michael focuses on rhythm, coordination, and musicality.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                  <Image
                    src="data:image/jpeg;base64,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"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                  />
                </div>)
    },
];

function StickyScrollRevealComponent() {
    return <div className="bg-gray-900 ">        
        <h1 className="text-center   text-3xl leading-8 font-extrabold tracking-tight text-white
            sm:text-4xl">Dedicated Team Member </h1>
        <StickyScroll content={musicSchoolTeachers}/>
    </div>;
}

export default StickyScrollRevealComponent;
