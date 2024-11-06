"use client";
import courseData from "@/data/music_cources.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instruction: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (courses: Courses) => courses.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-[#BE3455] font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white
            sm:text-4xl"
          >
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Courses) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col   rounded-[22px] bg-[#262e46] dark:bg-zinx-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6  flex flex-col items-center text-centerflex-grow">
                  <p className="text-lg sm:text-xl font-extrabold text-blue-950 mt-4 mb-2 dark:text-neutral-400">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  <Link
                    href={`/course/${course.slug}`}
                    className="mt-5 inline-block px-4 py-2 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-[be3455] transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="inline-block px-6 py-3 bg-[#BE3455] text-white font-semibold rounded-lg shadow-md hover:bg-[#a22e48] transition duration-300 ease-in-out transform hover:scale-105"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
