import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, Pencil } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  useLoadUserQuery,
  useUpdateUserMutation,
} from "@/features/api/authApi";
import { toast } from "sonner";
import Course from "./Course";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const [name, setName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const { data, isLoading, refetch } = useLoadUserQuery();

  const [
    updateUser,
    {
      data: updateUserData,
      isLoading: updateUserIsLoading,
      isError,
      error,
      isSuccess,
    },
  ] = useUpdateUserMutation();

  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success(data.message || "Profile Updated");
    }
    if (isError) {
      toast.error(error.message || "Failed to Update Profile");
    }
  }, [error, updateUserData, isSuccess, isError]);

  useEffect(() => {
    refetch();
  }, []);

  const onChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) setProfilePhoto(file);
  };

  const updateUserHandler = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("profilePhoto", profilePhoto);
    await updateUser(formData);
  };

  if (isLoading)
    return <h1 className="text-center text-xl">Loading Profile...</h1>;

  const user = data?.user;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        My Profile
      </h1>

      <div className="bg-white shadow-md  rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 transition-all">
        <Avatar className="h-28 w-28">
          <AvatarImage
            src={user?.photoUrl || "https://github.com/shadcn.png"}
            alt="@shadcn"
          />
          <AvatarFallback></AvatarFallback>
        </Avatar>

        <div className="space-y-3 text-center md:text-left">
          <p className="text-lg font-semibold text-gray-800 ">{user?.name}</p>
          <p className="text-sm text-gray-500 ">{user?.email}</p>
          <p className="text-sm font-medium text-gray-600">
            Role: <span className="uppercase">{user?.role}</span>
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white text-black ">
              <DialogHeader>
                <DialogTitle>Edit Your Profile</DialogTitle>
                <DialogDescription>Update your info below</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter new name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Photo</Label>
                  <Input
                    onChange={onChangeHandler}
                    type="file"
                    accept="image/*"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  onClick={updateUserHandler}
                  disabled={updateUserIsLoading}
                >
                  {updateUserIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {user?.enrolledCourses.length === 0 ? (
            <p className="text-gray-600">
              You haven't enrolled in any course yet.
            </p>
          ) : (
            user?.enrolledCourses.map((course) => (
              <Course course={course} key={course._id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
