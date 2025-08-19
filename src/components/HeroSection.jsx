import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-white to-purple-100 dark:from-black dark:to-[#1F020B] px-4 sm:px-6 lg:px-12 py-2 sm:py-16 ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-42 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center lg:w-180 lg:text-left order-2 lg:order-1">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              FIND MOVIES
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent leading-tight">
              TV SHOWS AND MORE
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mx-auto max-w-md lg:mx-0 leading-relaxed">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center space-x-3 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-300 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-200 cursor-pointer text-sm sm:text-base">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded-full flex items-center justify-center">
                <Play className="w-2 h-2 sm:w-3 sm:h-3 text-white fill-white" />
              </div>
              <span>Watch Tutorial</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="h-full flex justify-center items-center order-1 lg:order-2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          <div className="relative w-40 sm:w-48 sm:mt-40 sm:mr-50 md:w-60 lg:w-72 lg: mt--100 flex justify-center items-center">
            {/* Main Spider-Man Image */}
            <img
              src="/Vector.png"
              alt="Spider-Man"
              className="w-full h-auto object-cover rounded-lg shadow-lg z-30 relative"
            />

            {/* Play Button Overlay */}
            <button className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 cursor-pointer bg-white rounded-full flex items-center justify-center shadow-lg z-40 hover:scale-105 transition-transform m-auto">
              <Play className="w-4 h-4 sm:w-6 sm:h-6 text-gray-300" />
            </button>
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src="/Group.png"
              alt="Guardians of the Galaxy"
              className="w-40 sm:w-48 md:w-60 lg:w-72 h-auto object-cover rounded-lg shadow-lg z-20 opacity-80 transform translate-y-4 sm:translate-y-6 lg:translate-y-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
