'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Reviews = [
    {
      quote: "The lessons were fantastic! I improved my guitar skills significantly in just a few months.",
      name: "Alice Johnson",
      title: "Guitar Student"
    },
    {
      quote: "Jane is an amazing piano teacher. She made learning fun and easy.",
      name: "Bob Smith",
      title: "Piano Student"
    },
    {
      quote: "Emily helped me find my voice and gain confidence in my singing.",
      name: "Charlotte Brown",
      title: "Vocal Student"
    },
    {
      quote: "Michael's drum lessons are top-notch. He has a great way of breaking down complex rhythms.",
      name: "David Wilson",
      title: "Drum Student"
    },
    {
      quote: "The instructors here are very knowledgeable and patient. Highly recommend!",
      name: "Ella Davis",
      title: "Parent of Student"
    },
    {
      quote: "I learned so much about music theory and composition from my lessons.",
      name: "Frank Miller",
      title: "Music Theory Student"
    },
    {
      quote: "The personalized attention I received really helped me progress quickly.",
      name: "Grace Lee",
      title: "Violin Student"
    },
    {
      quote: "Great experience! The teachers are very professional and friendly.",
      name: "Henry Garcia",
      title: "Saxophone Student"
    },
    {
      quote: "My son loves his piano lessons. He looks forward to them every week.",
      name: "Isabella Martinez",
      title: "Parent of Student"
    },
    {
      quote: "The vocal coaching was superb. I gained a lot of confidence and improved my range.",
      name: "Jack Anderson",
      title: "Vocal Student"
    }
  ];
  
const ReviewCardComponent = () => {
    return (
        <div className=" h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8
            z-10">Here our Harmony : Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                
        items={Reviews}
        direction="right"
        speed="normal"
      />
                </div>
            </div>
        </div>
    );
}

export default ReviewCardComponent;
