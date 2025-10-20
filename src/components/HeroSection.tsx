// // import Link from "next/link"

// // function HeroSection() {
// //   return (
// //     <div className="h-auto md:h-[41rem] w-full rounded-md flex
// //     flex-col justify-center items-center relative overflow-hidden mx-auto
// //     py:9 md:py-0 " >
// //         <div className="p-4 relative z-10 w-full text-center">
// //              <h1>Master the art of Music</h1>
// //              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laudantium nesciunt autem qui! Modi aut debitis pariatur laudantium dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!
// //              </p>
// //              <div className="mt-5">
// //                 <Link href="/courses">Explore Courses</Link>
// //              </div>
// //         </div>
    
// //     </div>
// //   )
// // }

// // export default HeroSection


// import Link from "next/link"
// import { Spotlight } from "./ui/Spotlight"
// import { Spotlights } from "./ui/spotlight-new"
// import { Vortex } from "./ui/vortex"
// import { Button } from "./ui/moving-border";
// // import React, { useEffect, useRef } from "react";

// function HeroSection() {
//   return (
//     <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
//     <Spotlights />
      
//       <Spotlight
//         className="-top-40 left-0 md:-top-20 md:left-60"
//         fill="white"
//       />

//       {/* Content */}
//       <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        
//         {/* Heading */}
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight text-center whitespace-nowrap">
//           Master the Art of Fitness
//         </h1>
        

//         {/* Description */}
//         <p className="text-lg sm:text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto text-center">
             
//           Transform your body and mind with our comprehensive fitness courses. Learn from expert instructors and join thousands of students on their wellness journey today.
          
//         </p>
         
//         {/* CTA Link */}
//         <Link 
//           href="/courses"
//           className="text-lg font-semibold text-white hover:opacity-70 transition duration-300"
//         >
//           <Button  borderRadius="1.75rem"
//         className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"> Explore Courses </Button>  
          
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default HeroSection
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Spotlights } from "./ui/spotlight-new"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      <Spotlights />
      
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Logo */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                {/* Animated revolving light */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-100 animate-spin" 
                  style={{
                    animationDuration: '8s', 
                    background: 'conic-gradient(from 0deg, #3b82f6, #a855f7, #06b6d4, #3b82f6)',
                    boxShadow: '0 0 60px rgba(59, 130, 246, 0.5), 0 0 120px rgba(168, 85, 247, 0.3)'
                  }}
                />
                
                {/* Logo Box */}
                <div className="absolute inset-2 bg-gradient-to-br from-black to-gray-900 rounded-3xl flex items-center justify-center border border-gray-700 p-6 shadow-2xl">
                  <div className="flex flex-col items-center justify-center gap-4">
                    {/* Prism Icon */}
                    <div className="relative">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-300 rounded-2xl transform rotate-45 shadow-lg shadow-purple-500/50" />
                    </div>
                    
                    {/* Text */}
                    <div className="text-center">
                      <p className="text-white font-black text-2xl sm:text-3xl tracking-tighter">Prism</p>
                      <p className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text font-bold text-sm sm:text-base">FitHub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left order-1 lg:order-2 space-y-6 sm:space-y-8">
              
              {/* Brand Badge */}
              <div className="inline-block mx-auto lg:mx-0">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full px-4 py-2 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm text-white font-medium">PrismFitHub</span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                Refract Your
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-300 bg-clip-text text-transparent"> Potential</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your body and mind with PrismFitHub. Train in every spectrum—strength, yoga, cardio, nutrition. Learn from expert instructors and join thousands of students on their wellness journey.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
                <Link href="/courses" className="w-full sm:w-auto">
                  <Button 
                    borderRadius="1.75rem"
                    duration={3000}
                    borderClassName="bg-[radial-gradient(#ffffff_40%,transparent_60%)]"
                    className="px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold bg-black text-white border-white/40 hover:border-white/80 hover:bg-gray-900 transition-all duration-300 w-full sm:w-auto"
                  >
                    Explore Courses
                  </Button>
                </Link>
                <Link href="#community" className="w-full sm:w-auto">
                  <Button 
                    borderRadius="1.75rem"
                    duration={4000}
                    borderClassName="bg-[radial-gradient(#a855f7_40%,transparent_60%)]"
                    className="px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold bg-gradient-to-r from-purple-900/40 to-blue-900/40 text-white border-purple-500/60 hover:border-purple-400/80 hover:from-purple-900/60 hover:to-blue-900/60 transition-all duration-300 w-full sm:w-auto"
                  >
                    Join Community
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="pt-8 grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-blue-400">10+</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-purple-400">7</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Training Types</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-cyan-400">500+</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection