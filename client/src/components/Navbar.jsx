// import React, { useEffect } from "react";
// import { Menu, School } from "lucide-react";
// import { Button } from "./ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import DarkMode from "@/DarkMode";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "./ui/sheet";
// import { Separator } from "@radix-ui/react-dropdown-menu";
// import { Link, useNavigate } from "react-router-dom";
// import { useLogoutUserMutation } from "@/features/api/authApi";
// import { toast } from "sonner";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     await logoutUser();
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success(data.message || "User Logout");
//       navigate("/login");
//     }
//   }, [isSuccess]);

//   return (
//     <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-30">
//       <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full px-4">
//         {/* Logo and Title */}
//         <div className="flex items-center gap-2">
//           <School size={30} />
//           <Link to="/" >
//             <h1 className="hidden md:block font-extrabold text-2xl">
//               E-Learning
//             </h1>
//           </Link>
//         </div>

//         {/* User dropdown or auth buttons */}
//         <div className="flex items-center gap-4">
//           {user ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Avatar>
//                   <AvatarImage
//                     src={user?.photoUrl || "https://github.com/shadcn.png"}
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent
//                 className="w-56 mt-2 bg-white dark:bg-[#0f172a] text-black dark:text-white shadow-lg rounded-md border border-gray-200 dark:border-gray-700 z-50"
//                 align="start"
//               >
//                 <DropdownMenuLabel className="px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
//                   My Account
//                 </DropdownMenuLabel>
//                 <DropdownMenuGroup>
//                   <DropdownMenuItem className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
//                     <Link to="my-learning">My Learning</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
//                     <Link to="profile">Edit Profile</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem
//                     onClick={logoutHandler}
//                     className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
//                   >
//                     Logout
//                   </DropdownMenuItem>
//                 </DropdownMenuGroup>
//                 {user.role === "instructor" && (
//                   <>
//                     <DropdownMenuSeparator className="my-1 border-t border-gray-200 dark:border-gray-700" />
//                     <DropdownMenuItem className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
//                      <Link to="/admin/dashboard" >Dashboard</Link>  
//                     </DropdownMenuItem>
//                   </>
//                 )}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <div className="flex items-center gap-2">
//               <Button variant="outline" onClick={() => navigate("/login")}>
//                 Login
//               </Button>
//               <Button onClick={() => navigate("/login")}>Signup</Button>
//             </div>
//           )}
//           <DarkMode />
//         </div>
//       </div>
//       {/* Mobile Device */}
//       <div className="flex md:hidden items-center justify-between px-4 h-full">
//         <h1 className="font-extrabold text-2xl">E-learning</h1>
//         <MobileNavbar user={user} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// // const MobileNavbar = () => {
// //   const role = "instructor";
// //   return (
// //     <Sheet>
// //       <SheetTrigger asChild>
// //         <Button
// //           size="icon"
// //           className="rounded-full hover:bg-gray-200"
// //           variant="outline"
// //         >
// //           <Menu />
// //         </Button>
// //       </SheetTrigger>
// //       <SheetContent className="bg-white text-black dark:bg-white dark:text-black flex flex-col">
// //         <SheetHeader className="flex flex-row items-center justify-between mt-2">
// //           <SheetTitle>E-Learning</SheetTitle>
// //           <DarkMode />
// //         </SheetHeader>

// //         <Separator className="mr-2" />

// //         <nav className="flex flex-col space-y-4">
// //           <spap>My Learning</spap>
// //           <span>Edit Profile</span>
// //           <p>Log out</p>
// //         </nav>

// //         {role === "instructor" && (
// //           <SheetFooter>
// //             <SheetClose asChild>
// //               <Button type="submit">Dashboard</Button>
// //             </SheetClose>
// //           </SheetFooter>
// //         )}
// //       </SheetContent>
// //     </Sheet>
// //   );
// // };




// const MobileNavbar = ({ user }) => {
//   const navigate = useNavigate();
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button
//           size="icon"
//           className="rounded-full hover:bg-gray-200"
//           variant="outline"
//         >
//           <Menu />
//         </Button>
//       </SheetTrigger>
//       <SheetContent className=" bg-white text-black  flex flex-col h-full p-6">
//         <div>
//           <SheetHeader className="flex flex-row items-center justify-between mt-2 mb-4">
//             <SheetTitle  className="text-xl font-extrabold">
//               <Link to="/">E-Learning</Link>
//             </SheetTitle>
//             <DarkMode />
//           </SheetHeader>
//           <Separator className="mr-2 mb-4" />
//           <nav className="flex flex-col space-y-4 text-base">
//             <Link to="/my-learning">My Learning</Link>
//             <Link to="/profile">Edit Profile</Link>
//             <p>Log out</p>
//           </nav>
//         </div>

//         {user?.role === "instructor" && (
//           <SheetFooter className=" mt-12">
//             <SheetClose asChild>
//               <Button
//                 type="submit"
//                 onClick={() => navigate("/admin/dashboard")}
//                 className= "bg-gray-900 text-white hover:bg-gray-700 w-full font-medium rounded-md "
//               >
//                 Dashboard
//               </Button>
//             </SheetClose>
//           </SheetFooter>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };



// import React, { useEffect } from "react";
// import { Menu, School } from "lucide-react";
// import { Button } from "./ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import DarkMode from "@/DarkMode";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "./ui/sheet";
// import { Separator } from "@/components/ui/separator";
// import { Link, useNavigate } from "react-router-dom";
// import { useLogoutUserMutation } from "@/features/api/authApi";
// import { toast } from "sonner";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     await logoutUser();
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success(data.message || "User Logout");
//       navigate("/login");
//     }
//   }, [isSuccess]);

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-[#0f172a]/70 border-b border-gray-200 dark:border-gray-800 shadow-md transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-1.5 rounded-full text-white">
//             <School size={20} />
//           </div>
//           <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
//             E-Learning
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-5">
//           {user ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Avatar className="cursor-pointer hover:ring-2 hover:ring-indigo-500 transition">
//                   <AvatarImage
//                     src={user?.photoUrl || "https://github.com/shadcn.png"}
//                     alt="User"
//                   />
//                   <AvatarFallback>
//                     {user?.name?.charAt(0)?.toUpperCase() || "U"}
//                   </AvatarFallback>
//                 </Avatar>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent align="end" className="w-60 rounded-xl shadow-lg bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700">
//                 <DropdownMenuLabel className="text-gray-500 dark:text-gray-300">Welcome, {user.name}</DropdownMenuLabel>
//                 <DropdownMenuGroup>
//                   <DropdownMenuItem asChild>
//                     <Link to="/my-learning" className="w-full">📘 My Learning</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <Link to="/profile" className="w-full">✏️ Edit Profile</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem onClick={logoutHandler}>
//                     🚪 Logout
//                   </DropdownMenuItem>
//                 </DropdownMenuGroup>
//                 {user?.role === "instructor" && (
//                   <>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem asChild>
//                       <Link to="/admin/dashboard" className="w-full">🧭 Instructor Dashboard</Link>
//                     </DropdownMenuItem>
//                   </>
//                 )}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <div className="flex items-center gap-2">
//               <Button
//                 variant="outline"
//                 onClick={() => navigate("/login")}
//                 className="hover:border-indigo-500"
//               >
//                 Login
//               </Button>
//               <Button
//                 onClick={() => navigate("/login")}
//                 className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
//               >
//                 Signup
//               </Button>
//             </div>
//           )}
//           <DarkMode />
//         </div>

//         {/* Mobile */}
//         <div className="md:hidden flex items-center gap-2">
//           <DarkMode />
//           <MobileNavbar user={user} logoutHandler={logoutHandler} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// const MobileNavbar = ({ user, logoutHandler }) => {
//   const navigate = useNavigate();

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button size="icon" variant="ghost" className="hover:bg-muted">
//           <Menu />
//         </Button>
//       </SheetTrigger>

//       <SheetContent side="right" className="bg-background text-foreground p-6 w-[280px] shadow-2xl">
//         <SheetHeader className="flex flex-row items-center justify-between mb-6">
//           <SheetTitle className="text-xl font-bold tracking-wide">
//             <Link to="/">E-Learning</Link>
//           </SheetTitle>
//         </SheetHeader>

//         <Separator className="mb-4" />

//         <nav className="flex flex-col space-y-5 text-base font-medium">
//           <Link to="/my-learning" className="hover:text-indigo-600 transition">📘 My Learning</Link>
//           <Link to="/profile" className="hover:text-indigo-600 transition">✏️ Edit Profile</Link>
//           {user && (
//             <button
//               onClick={logoutHandler}
//               className="text-left text-red-600 hover:underline"
//             >
//               🚪 Logout
//             </button>
//           )}
//         </nav>

//         {user?.role === "instructor" && (
//           <SheetFooter className="mt-auto pt-10">
//             <SheetClose asChild>
//               <Button
//                 onClick={() => navigate("/admin/dashboard")}
//                 className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90"
//               >
//                 🧭 Instructor Dashboard
//               </Button>
//             </SheetClose>
//           </SheetFooter>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };


// Navbar.jsx

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


  // const logoutHandler = async () => {
  //   await logoutUser();
  // };


  const logoutHandler = async () => {
  await logoutUser();            // ✅ backend logout
  dispatch(userLoggedOut());     // ✅ redux state clear
  localStorage.removeItem("token"); // ✅ optional but safe
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









// import { Menu, School } from "lucide-react";
// import { Button } from "./ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "./ui/sheet";
// import { Separator } from "@/components/ui/separator";
// import { Link, useNavigate } from "react-router-dom";
// import { useLogoutUserMutation } from "@/features/api/authApi";
// import { toast } from "sonner";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     await logoutUser();
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success(data.message || "User Logout");
//       navigate("/login");
//     }
//   }, [isSuccess]);

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-md transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-1.5 rounded-full text-white">
//             <School size={20} />
//           </div>
//           <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
//             E-Learning
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-5">
//           {user ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Avatar className="cursor-pointer hover:ring-2 hover:ring-indigo-500 transition">
//                   <AvatarImage
//                     src={user?.photoUrl || "https://github.com/shadcn.png"}
//                     alt="User"
//                   />
//                   <AvatarFallback>
//                     {user?.name?.charAt(0)?.toUpperCase() || "U"}
//                   </AvatarFallback>
//                 </Avatar>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent align="end" className="w-60 rounded-xl shadow-lg bg-white border border-gray-200">
//                 <DropdownMenuLabel className="text-gray-500">Welcome, {user.name}</DropdownMenuLabel>
//                 <DropdownMenuGroup>
//                   <DropdownMenuItem asChild>
//                     <Link to="/my-learning" className="w-full">📘 My Learning</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <Link to="/profile" className="w-full">✏️ Edit Profile</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem onClick={logoutHandler}>
//                     🚪 Logout
//                   </DropdownMenuItem>
//                 </DropdownMenuGroup>
//                 {user?.role === "instructor" && (
//                   <>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem asChild>
//                       <Link to="/admin/dashboard" className="w-full">🧭 Instructor Dashboard</Link>
//                     </DropdownMenuItem>
//                   </>
//                 )}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <div className="flex items-center gap-2">
//               <Button
//                 variant="outline"
//                 onClick={() => navigate("/login")}
//                 className="hover:border-indigo-500"
//               >
//                 Login
//               </Button>
//               <Button
//                 onClick={() => navigate("/login")}
//                 className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
//               >
//                 Signup
//               </Button>
//             </div>
//           )}
//         </div>

//         {/* Mobile */}
//         <div className="md:hidden flex items-center gap-2">
//           <MobileNavbar user={user} logoutHandler={logoutHandler} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// const MobileNavbar = ({ user, logoutHandler }) => {
//   const navigate = useNavigate();

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button size="icon" variant="ghost" className="hover:bg-muted">
//           <Menu />
//         </Button>
//       </SheetTrigger>

//       <SheetContent side="right" className="bg-white text-black p-6 w-[280px] shadow-2xl">
//         <SheetHeader className="flex flex-row items-center justify-between mb-6">
//           <SheetTitle className="text-xl font-bold tracking-wide">
//             <Link to="/">E-Learning</Link>
//           </SheetTitle>
//         </SheetHeader>

//         <Separator className="mb-4" />

//         <nav className="flex flex-col space-y-5 text-base font-medium">
//           <Link to="/my-learning" className="hover:text-indigo-600 transition">📘 My Learning</Link>
//           <Link to="/profile" className="hover:text-indigo-600 transition">✏️ Edit Profile</Link>
//           {user && (
//             <button
//               onClick={logoutHandler}
//               className="text-left text-red-600 hover:underline"
//             >
//               🚪 Logout
//             </button>
//           )}
//         </nav>

//         {user?.role === "instructor" && (
//           <SheetFooter className="mt-auto pt-10">
//             <SheetClose asChild>
//               <Button
//                 onClick={() => navigate("/admin/dashboard")}
//                 className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90"
//               >
//                 🧭 Instructor Dashboard
//               </Button>
//             </SheetClose>
//           </SheetFooter>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };




