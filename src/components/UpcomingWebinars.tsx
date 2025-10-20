// 'use client'
// import Link from "next/link"
// import { HoverEffect } from "./ui/card-hover-effect";

// function UpcomingWebinars() {
//   const featuredWebinars = [
//     {
//       title: 'Nutrition Fundamentals for Fitness',
//       description:
//         'Learn the essential nutrition principles to fuel your workouts and achieve your fitness goals.',
//       slug: 'nutrition-fundamentals-fitness',
//       isFeatured: true,
//     },
//     {
//       title: 'HIIT Training: Maximize Results',
//       description:
//         'Master high-intensity interval training techniques from certified fitness coaches.',
//       slug: 'hiit-training-maximize-results',
//       isFeatured: true,
//     },
//     {
//       title: 'Strength Training for Beginners',
//       description:
//         'Build a solid foundation with proper form and technique in strength training.',
//       slug: 'strength-training-beginners',
//       isFeatured: true,
//     },
//     {
//       title: 'Yoga and Flexibility Mastery',
//       description:
//         'Improve flexibility, balance, and mental clarity through advanced yoga techniques.',
//       slug: 'yoga-flexibility-mastery',
//       isFeatured: true,
//     },
//     {
//       title: 'Recovery and Injury Prevention',
//       description:
//         'Learn proper recovery methods and techniques to prevent common fitness injuries.',
//       slug: 'recovery-injury-prevention',
//       isFeatured: true,
//     },
//     {
//       title: 'Building Your Fitness Lifestyle',
//       description:
//         'Develop sustainable habits and routines to maintain long-term fitness success.',
//       slug: 'building-fitness-lifestyle',
//       isFeatured: true,
//     },
//   ];

//   return (
//     <div className="p-12 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center">
//           <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Featured Webinars</h2>
//           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Transform Your Fitness Journey</p>
//         </div>
//         <div className="mt-10">
//           <HoverEffect
//             items={featuredWebinars.map(webinar => (
//               {
//                 title: webinar.title,
//                 description: webinar.description,
//                 link: '/'
//               }
//             ))}
//           />
//         </div>
//         <div className="mt-10 text-center">
//           <Link 
//             href={"/webinars"}
//             className="px-8 py-3 border-2 border-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:bg-blue-500/10 transition duration-300"
//           >
//             View All Webinars
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UpcomingWebinars

'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'Nutrition Fundamentals for Fitness',
      description:
        'Learn the essential nutrition principles to fuel your workouts and achieve your fitness goals.',
      slug: 'nutrition-fundamentals-fitness',
      isFeatured: true,
    },
    {
      title: 'HIIT Training: Maximize Results',
      description:
        'Master high-intensity interval training techniques from certified fitness coaches.',
      slug: 'hiit-training-maximize-results',
      isFeatured: true,
    },
    {
      title: 'Strength Training for Beginners',
      description:
        'Build a solid foundation with proper form and technique in strength training.',
      slug: 'strength-training-beginners',
      isFeatured: true,
    },
    {
      title: 'Yoga and Flexibility Mastery',
      description:
        'Improve flexibility, balance, and mental clarity through advanced yoga techniques.',
      slug: 'yoga-flexibility-mastery',
      isFeatured: true,
    },
    {
      title: 'Recovery and Injury Prevention',
      description:
        'Learn proper recovery methods and techniques to prevent common fitness injuries.',
      slug: 'recovery-injury-prevention',
      isFeatured: true,
    },
    {
      title: 'Building Your Fitness Lifestyle',
      description:
        'Develop sustainable habits and routines to maintain long-term fitness success.',
      slug: 'building-fitness-lifestyle',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Featured Webinars</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Transform Your Fitness Journey</p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map(webinar => (
              {
                title: webinar.title,
                description: webinar.description,
                link: `/webinars/${webinar.slug}`
              }
            ))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link 
            href={"/webinars"}
            className="px-8 py-3 border-2 border-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:bg-blue-500/10 transition duration-300"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars