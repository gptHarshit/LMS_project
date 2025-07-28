import { useNavigate } from "react-router-dom";
import { useGetCreatorCourseQuery } from "@/features/api/courseApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit } from "lucide-react";

const CourseTable = () => {
  const { data, isLoading } = useGetCreatorCourseQuery();
  const navigate = useNavigate();

  if (isLoading) return <h1 className="text-center mt-10 text-xl">Loading...</h1>;

  return (
    <div className="w-full overflow-x-auto px-4 sm:px-6 md:px-10 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Courses</h2>
        <Button
          onClick={() => navigate("/admin/course/create")}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all rounded-xl px-6 py-2 shadow-md"
        >
          + Create Course
        </Button>
      </div>

      <div className="rounded-xl shadow-md overflow-hidden">
        <Table>
          <TableCaption className="text-gray-500 mt-4">
            A list of your recent courses.
          </TableCaption>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-gray-700">Price</TableHead>
              <TableHead className="text-gray-700">Status</TableHead>
              <TableHead className="text-gray-700">Title</TableHead>
              <TableHead className="text-right text-gray-700">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.courses?.map((course, idx) => (
              <TableRow
                key={course._id}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition`}
              >
                <TableCell className="font-semibold text-gray-800">
                  ₹ {course?.coursePrice || "NA"}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${
                      course.isPublished
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    } rounded-md px-3 py-1 text-sm font-medium`}
                  >
                    {course.isPublished ? "Published" : "Draft"}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-800">{course.courseTitle}</TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => navigate(`/admin/course/${course._id}`)}
                    className="rounded-lg hover:bg-indigo-50 text-indigo-600 border-indigo-300"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CourseTable;

