"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Personalized Workouts",
    description: "Get customized workout plans tailored to your fitness level and goals. Our intelligent system adapts to your progress and adjusts routines accordingly. Track your performance and receive real-time guidance to maximize your results and stay motivated throughout your fitness journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] text-white">
        Personalized Workouts
      </div>
    ),
  },
  {
    title: "Real-time Progress Tracking",
    description: "Monitor your fitness progress with live updates and detailed analytics. See your improvements in real-time, track calories burned, distance covered, and weight changes. Stay motivated with visual progress charts and achieve your fitness milestones faster with our comprehensive tracking system.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white relative">
        <img src="/fitness-tracking.webp" width={300} height={300} className="h-full w-full object-cover" alt="fitness tracking demo" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <span className="text-2xl font-bold">Real-time Progress Tracking</span>
        </div>
      </div>
    ),
  },
  {
    title: "Nutrition & Meal Plans",
    description: "Access customized meal plans and nutritional guidance to complement your fitness routine. Track your daily intake, get personalized recommendations based on your goals, and maintain a balanced diet. Our nutritionists provide evidence-based meal plans designed to fuel your workouts and support your fitness objectives.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--emerald-500))] text-white">
        Nutrition & Meal Plans
      </div>
    ),
  },
  {
    title: "Community & Challenges",
    description: "Join our thriving fitness community and participate in exciting challenges with other members. Share your achievements, get inspired by others' progress, and stay accountable through group challenges. Build lasting connections with like-minded fitness enthusiasts and push yourself to new heights together.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        Community & Challenges
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <StickyScroll content={content} />
  );
}

export default WhyChooseUs;