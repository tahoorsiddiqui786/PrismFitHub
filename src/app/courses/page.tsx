'use client'
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/fitness_course.json"

export default function CoursesPage() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (courseId: number) => {
    setImageErrors(prev => ({ ...prev, [courseId]: true }));
  };

  // Gradient presets for fallback
  const gradients = [
    "from-blue-600 to-blue-900",
    "from-purple-600 to-purple-900",
    "from-green-600 to-green-900",
    "from-pink-600 to-pink-900",
    "from-indigo-600 to-indigo-900",
    "from-cyan-600 to-cyan-900",
    "from-teal-600 to-teal-900",
    "from-violet-600 to-violet-900",
    "from-rose-600 to-rose-900",
    "from-amber-600 to-amber-900",
  ];

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Fitness Courses
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            Choose from ({courseData.courses.length}) comprehensive training programs
          </p>
          <p className="text-gray-500 text-sm">
            Designed by certified trainers to help you achieve your fitness goals
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {courseData.courses.map((course) => (
            <CardContainer key={course.id} className="inter-var h-full">
              <CardBody className="bg-gradient-to-br from-gray-900 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.2] border border-gray-800 w-full sm:w-[28rem] h-full rounded-xl p-6">
                
                {/* Course Image with Fallback */}
                <CardItem translateZ="100" className="w-full mb-4">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden group-hover/card:shadow-xl transition-shadow">
                    {!imageErrors[course.id] ? (
                      <Image
                        src={course.image}
                        height="300"
                        width="400"
                        className="h-64 w-full object-cover rounded-lg"
                        alt={course.title}
                        onError={() => handleImageError(course.id)}
                      />
                    ) : (
                      <div className={`h-64 w-full bg-gradient-to-br ${gradients[course.id % gradients.length]} flex items-center justify-center rounded-lg`}>
                        <div className="text-center px-4">
                          <p className="text-white font-bold text-lg">{course.title}</p>
                          <p className="text-white/70 text-sm mt-2">Fitness Course</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardItem>

                {/* Course Title */}
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white"
                >
                  {course.title}
                </CardItem>

                {/* Instructor */}
                <CardItem
                  translateZ="40"
                  className="text-sm text-blue-400 mt-1"
                >
                  by {course.instructor}
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-400 text-sm mt-3 leading-relaxed"
                >
                  {course.description}
                </CardItem>

                {/* Price */}
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white mt-6"
                >
                  ${course.price}
                </CardItem>

                {/* Featured Badge */}
                {course.isFeatured && (
                  <CardItem
                    translateZ="40"
                    className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    Featured
                  </CardItem>
                )}

                {/* Footer - Buttons */}
                <div className="flex justify-between items-center gap-4 mt-8">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={`/courses/${course.slug}`}
                    className="px-6 py-2 rounded-lg border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 transition text-sm font-medium"
                  >
                    Learn More
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition"
                  >
                    Enroll Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}