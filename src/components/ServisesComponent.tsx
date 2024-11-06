'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function ServisesComponent() {
    const services = [
        {
          title: "Private Lessons",
          description: "One-on-one lessons tailored to your musical interests and skill level. Choose from a variety of instruments.",
          link: "/private-lessons",
          isFeature: true,
        },
        {
          title: "Group Classes",
          description: "Join our fun group classes to learn music in a collaborative environment. Perfect for beginners!",
          link: "/group-classes",
          isFeature: true,
        },
        {
          title: "Music Theory",
          description: "Dive deep into the world of music theory to enhance your understanding of music composition and performance.",
          link: "/music-theory",
          isFeature: false,
        },
        {
          title: "Summer Camps",
          description: "Enroll in our exciting summer camps to explore music through games, performances, and creative projects.",
          link: "/summer-camps",
          isFeature: true,
        },
        {
          title: "Online Courses",
          description: "Access our comprehensive online courses from the comfort of your home, designed for all skill levels.",
          link: "/online-courses",
          isFeature: false,
        },
        {
          title: "Performance Opportunities",
          description: "Showcase your talent through various performance opportunities throughout the year, including recitals and competitions.",
          link: "/performances",
          isFeature: true,
        },
      ];
      
      
  return (
    <div className="py-12 bg-gray-900">
    <div>
      <div className="text-center">
        <h2 className="text-base text-[#BE3455] font-semibold tracking-wide uppercase">
          Our Serives
        </h2>
        <p
          className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white
          sm:text-4xl"
        >
         Unlock Your Potential
        </p>
      </div>
    </div>
    <div className="mt-10">
    <HoverEffect items={services.map( service =>(
        {
            title : service.title,
            description : service.description,
            link : service.link
        }
    ))} />
    </div>
    <div className="mt-20 text-center">
      <Link
        href={"/courses"}
        className="inline-block px-6 py-3 bg-[#BE3455] text-white font-semibold rounded-lg shadow-md hover:bg-[#a22e48] transition duration-300 ease-in-out transform hover:scale-105"
      >
        View All Sevices
      </Link>
    </div>
  </div>
  )
}

export default ServisesComponent
