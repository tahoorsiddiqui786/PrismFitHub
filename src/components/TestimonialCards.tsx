'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// import { cn } from "@/lib/utils";  
import { cn } from "@/utils/cn";

const fitnessAcademyTestimonials = [
  {
    quote:
      'Joining the fitness academy completely transformed my health journey. The trainers are incredibly knowledgeable and personalized my workouts perfectly. I\'ve never felt stronger!',
    name: 'Alex Johnson',
    title: 'Strength Training Student',
  },
  {
    quote:
      'The community support here is amazing. I\'ve gained confidence and achieved my weight loss goals faster than I ever thought possible. The nutritional guidance was invaluable.',
    name: 'Samantha Lee',
    title: 'Weight Loss Program Student',
  },
  {
    quote:
      'As someone with zero fitness experience, I was nervous starting out. The coaches were patient and supportive, helping me build a solid foundation. Highly recommend!',
    name: 'Michael Chen',
    title: 'Beginner Fitness Student',
  },
  {
    quote:
      'The HIIT training courses pushed my limits in the best way possible. I\'ve transformed my body and my mindset. This academy truly changed my life.',
    name: 'Emily Taylor',
    title: 'HIIT Training Student',
  },
  {
    quote:
      'The yoga and flexibility courses helped me recover from injuries and find inner peace. Combined with strength training, I\'ve never felt more balanced and healthy.',
    name: 'Chris Morales',
    title: 'Yoga & Flexibility Student',
  },
];

function FitnessAcademyTestimonials() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      
      {/* Radial Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white px-4">
          Hear from Our Success Stories: Transformations in Motion
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={fitnessAcademyTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitnessAcademyTestimonials;