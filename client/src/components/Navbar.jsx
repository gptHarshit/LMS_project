import React, { useEffect } from "react";
import { Menu, School } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { userLoggedOut } from "@/features/authSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const logoutHandler = async () => {
  await logoutUser();          
  dispatch(userLoggedOut());  
  localStorage.removeItem("token"); 
};

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || "User Logout");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-1.5 rounded-full text-white">
            <School size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
            E-Learning
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer hover:ring-2 hover:ring-indigo-500 transition">
                  <AvatarImage
                    src={user?.photoUrl || "https://github.com/shadcn.png"}
                    alt="User"
                  />
                  <AvatarFallback>
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-60 rounded-xl shadow-lg bg-white border border-gray-200"
              >
                <DropdownMenuLabel className="text-gray-500">
                  Welcome, {user.name}
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to="/my-learning" className="w-full">
                      📘 My Learning
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="w-full">
                      ✏️ Edit Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>
                    🚪 Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {user?.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/admin/dashboard" className="w-full">
                        🧭 Instructor Dashboard
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => navigate("/login")}
                className="hover:border-indigo-500"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              >
                Signup
              </Button>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <MobileNavbar user={user} logoutHandler={logoutHandler} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = ({ user, logoutHandler }) => {
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="hover:bg-muted">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-white text-gray-900 p-6 w-[280px] shadow-2xl">
        <SheetHeader className="flex flex-row items-center justify-between mb-6">
          <SheetTitle className="text-xl font-bold tracking-wide">
            <Link to="/">E-Learning</Link>
          </SheetTitle>
        </SheetHeader>

        <Separator className="mb-4" />

        <nav className="flex flex-col space-y-5 text-base font-medium">
          <Link to="/my-learning" className="hover:text-indigo-600 transition">
            📘 My Learning
          </Link>
          <Link to="/profile" className="hover:text-indigo-600 transition">
            ✏️ Edit Profile
          </Link>
          {user && (
            <button
              onClick={logoutHandler}
              className="text-left text-red-600 hover:underline"
            >
              🚪 Logout
            </button>
          )}
        </nav>

        {user?.role === "instructor" && (
          <SheetFooter className="mt-auto pt-10">
            <SheetClose asChild>
              <Button
                onClick={() => navigate("/admin/dashboard")}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90"
              >
                🧭 Instructor Dashboard
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};











