// import { Button } from "@/components/ui/button";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const [searchQuery,setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const searchHandler = (e) => {
//     e.preventDefault();
//     if(searchQuery.trim() !== ""){
//     navigate(`/course/search?query=${searchQuery}`)
//   }
//   setSearchQuery(""); 
// }
//   return (
//     <div className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-white text-4xl font-bold mb-4">
//           {" "}
//           Find the Best Courses for You{" "}
//         </h1>
//         <p className="text-gray-200 dark:text-gray-400 mb-8">
//           Discover , learn and Upskills with our wide Range of Course
//         </p>

//         <form onSubmit={searchHandler} className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="flex-grow border-none focus-visible:ring-0 px-6 py-3  text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 h-12"
//             placeholder="Search Course"
//           />
//           <Button type="submit" className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800 h-12" >Search</Button>
//         </form>
//         <Button onClick={()=>navigate(`/course/search?query`)}  className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200">Explore Courses</Button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;




// import { Button } from "@/components/ui/button";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Sparkles } from "lucide-react";

// const HeroSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const searchHandler = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim() !== "") {
//       navigate(`/course/search?query=${searchQuery}`);
//     }
//     setSearchQuery("");
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-28 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Floating Icon */}
//         <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md mx-auto mb-4">
//           <Sparkles size={30} className="text-white" />
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
//           Find the Perfect Course for Your Growth
//         </h1>

//         {/* Subheading */}
//         <p className="text-lg sm:text-xl text-white/90 dark:text-gray-300 mb-10">
//           Upskill yourself with top-quality content, live lessons, and expert educators.
//         </p>

//         {/* Search Box */}
//         <form
//           onSubmit={searchHandler}
//           className="flex flex-col sm:flex-row items-center justify-center bg-white dark:bg-gray-900 rounded-full shadow-xl overflow-hidden max-w-2xl mx-auto mb-6"
//         >
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-white bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
//             placeholder="Search for a course..."
//           />
//           <Button
//             type="submit"
//             className="h-full w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-none sm:rounded-r-full px-6 py-3 hover:opacity-90 transition"
//           >
//             Search
//           </Button>
//         </form>

//         {/* Explore Button */}
//         <Button
//           onClick={() => navigate(`/course/search?query`)}
//           className="bg-white text-indigo-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-semibold px-6 py-3 rounded-full shadow-md transition"
//         >
//           Explore All Courses
//         </Button>
//       </div>

//       {/* Background Gradient Layer */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-white/0 dark:from-white/10 z-[-1]" />
//     </section>
//   );
// };

// export default HeroSection;



// import { Button } from "@/components/ui/button";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Sparkles } from "lucide-react";

// const HeroSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const searchHandler = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim() !== "") {
//       navigate(`/course/search?query=${searchQuery}`);
//     }
//     setSearchQuery("");
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-28 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Floating Icon */}
//         <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md mx-auto mb-4 animate-bounce">
//           <Sparkles size={30} className="text-white" />
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
//           Find the Perfect Course for Your Growth
//         </h1>

//         {/* Subheading */}
//         <p className="text-lg sm:text-xl text-white/90 dark:text-gray-300 mb-10">
//           Upskill yourself with top-quality content, live lessons, and expert educators.
//         </p>

//         {/* Search Box */}
//         <form
//           onSubmit={searchHandler}
//           className="flex flex-col sm:flex-row items-stretch justify-center bg-white dark:bg-gray-900 rounded-full shadow-xl overflow-hidden max-w-2xl mx-auto mb-6"
//         >
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-white bg-transparent placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base"
//             placeholder="Search for a course..."
//           />
//           <Button
//             type="submit"
//             className="sm:rounded-r-full sm:rounded-none rounded-b-full sm:rounded-b-none px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-full w-full sm:w-auto text-sm sm:text-base"
//           >
//             Search
//           </Button>
//         </form>

//         {/* Explore Button */}
//         <Button
//           onClick={() => navigate(`/course/search?query`)}
//           className="bg-white text-indigo-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-semibold px-6 py-3 rounded-full shadow-md transition text-sm sm:text-base"
//         >
//           Explore All Courses
//         </Button>
//       </div>

//       {/* Background Gradient Layer */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-white/0 dark:from-white/10 z-[-1]" />
//     </section>
//   );
// };

// export default HeroSection;



// HeroSection.jsx

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md mx-auto mb-4 animate-bounce">
          <Sparkles size={30} className="text-white" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Find the Perfect Course for Your Growth
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-10">
          Upskill yourself with top-quality content, live lessons, and expert educators.
        </p>

        <form
          onSubmit={searchHandler}
          className="flex flex-col sm:flex-row items-stretch justify-center bg-white rounded-full shadow-xl overflow-hidden max-w-2xl mx-auto mb-6"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 bg-transparent placeholder-gray-500 text-sm sm:text-base"
            placeholder="Search for a course..."
          />
          <Button
            type="submit"
            className="sm:rounded-r-full sm:rounded-none rounded-b-full sm:rounded-b-none px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-full w-full sm:w-auto text-sm sm:text-base"
          >
            Search
          </Button>
        </form>

        <Button
          onClick={() => navigate(`/course/search?query`)}
          className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full shadow-md transition text-sm sm:text-base"
        >
          Explore All Courses
        </Button>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-white/0 z-[-1]" />
    </section>
  );
};

export default HeroSection;





