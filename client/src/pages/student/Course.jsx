// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import React from "react";
// import { Link } from "react-router-dom";

// const Course = ({ course }) => {
//   return (
//     <Link to={`/course-detail/${course._id}`} >
//       <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//         <div className="relative">
//           <img
//             src={course.courseThumbnail}
//             alt="course"
//             className="w-full h-36 object-cover rounded-t-lg"
//           />
//         </div>
//         <CardContent className="px-5 py-4 space-y-2">
//           <h1 className="hover:underline font-bold text-lg truncate">
//             {course.courseTitle}
//           </h1>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <Avatar className="h-9 w-9">
//                 <AvatarImage
//                   src={
//                     course.creator?.photoUrl || "https://github.com/shadcn.png"
//                   }
//                   alt="@shadcn"
//                 />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>
//               <h1 className="font-medium text-sm">{course.creator?.name}</h1>
//             </div>
//             <Badge
//               className={
//                 "bg-blue-600 text-white px-2 py-1 text-xs rounded-full"
//               }
//             >
//               {course.courseLevel}
//             </Badge>
//           </div>
//           <div className="text-lg font-bold">
//             <span>₹ {course.coursePrice}</span>
//           </div>
//         </CardContent>
//       </Card>
//     </Link>
//   );
// };

// export default Course;



import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <Link to={`/course-detail/${course._id}`}>
      <Card className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03] border border-gray-200">
        <div className="relative">
          <img
            src={course.courseThumbnail}
            alt="Course Thumbnail"
            className="w-full h-40 object-cover"
          />
        </div>

        <CardContent className="px-5 py-4 space-y-3">
          <h1 className="text-lg font-semibold text-gray-800 hover:underline truncate">
            {course.courseTitle}
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={course.creator?.photoUrl || "https://github.com/shadcn.png"}
                  alt={course.creator?.name || "creator"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium text-gray-600">
                {course.creator?.name}
              </p>
            </div>

            <Badge className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full capitalize">
              {course.courseLevel}
            </Badge>
          </div>

          <div className="text-base font-bold text-gray-900">
            ₹ {course.coursePrice}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;
