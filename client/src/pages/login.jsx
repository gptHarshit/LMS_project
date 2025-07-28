// import { AppWindowIcon, CodeIcon, Loader2 } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useEffect, useState } from "react";
// import {
//   useLoginUserMutation,
//   useRegisterUserMutation,
// } from "@/features/api/authApi";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [signupInput, setSignupInput] = useState({
//     name: " ",
//     email: " ",
//     password: "",
//   });
//   const [loginInput, setLoginInput] = useState({ email: " ", password: "" });

//   const [
//     registerUser,
//     {
//       data: registerData,
//       error: registerError,
//       isLoading: registerIsLoading,
//       isSuccess: registerIsSuccess,
//     },
//   ] = useRegisterUserMutation();

//   const [
//     loginUser,
//     {
//       data: loginData,
//       error: loginError,
//       isLoading: loginIsLoading,
//       isSuccess: loginIsSuccess,
//     },
//   ] = useLoginUserMutation();
  
//   const navigate = useNavigate();

//   const changeInputHandler = (e, type) => {
//     const { name, value } = e.target;
//     if (type === "signup") {
//       setSignupInput({ ...signupInput, [name]: value });
//     } else {
//       setLoginInput({ ...loginInput, [name]: value });
//     }
//   };

//   const handleRigistration = async (type) => {
//     const inputData = type === "signup" ? signupInput : loginInput;
//     const action = type === "signup" ? registerUser : loginUser;
//     await action(inputData);
//   };

//   useEffect(() => {
//     if(registerIsSuccess && registerData){
//       toast.success(registerData.message || "Signup Successfully")
//     }
//     if(registerError){
//       toast.error(registerError.data.message || "Signup Failed")
//     }
//     if(loginIsSuccess && loginData){
//       toast.success(loginData.message || "Login Successfully")
//       navigate("/");
//     }
//     if(loginError){
//       toast.error(loginError.data.message || "Login Failed")
//     }
//   }, [
//     loginIsLoading,
//     registerIsLoading,
//     loginData,
//     registerData,
//     loginError,
//     registerError,
//   ]);

//   return (
//     <div className="flex items-start justify-center min-h-screen w-full py-20 mt-10 bg-gray-50">
//       <div className="flex w-full max-w-sm flex-col gap-6">
//         <Tabs defaultValue="signup" className="w-full">
//           <TabsList className="grid w-full grid-cols-2">
//             <TabsTrigger value="signup">Signup</TabsTrigger>
//             <TabsTrigger value="login">Login</TabsTrigger>
//           </TabsList>

//           {/* Signup Content */}
//           <TabsContent value="signup" className="transition-all duration-300">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Signup</CardTitle>
//                 <CardDescription>
//                   Create a new account and click Signup when you are done!
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-6">
//                 <div className="grid gap-3">
//                   <Label htmlFor="signup-name">Name</Label>
//                   <Input
//                     id="signup-name"
//                     type="text"
//                     name="name"
//                     value={signupInput.name}
//                     onChange={(e) => changeInputHandler(e, "signup")}
//                     placeholder="Email"
//                     required="true"
//                   />
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="signup-email">Email</Label>
//                   <Input
//                     id="signup-email"
//                     type="email"
//                     name="email"
//                     value={signupInput.email}
//                     onChange={(e) => changeInputHandler(e, "signup")}
//                     placeholder="Email"
//                     required="true"
//                   />
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="signup-password">Password</Label>
//                   <Input
//                     id="signup-password"
//                     onChange={(e) => changeInputHandler(e, "signup")}
//                     name="password"
//                     value={signupInput.password}
//                     type="password"
//                     placeholder="Password"
//                     required="true"
//                   />
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button
//                   disabled={registerIsLoading}
//                   onClick={() => handleRigistration("signup")}
//                 >
//                   {registerIsLoading ? (
//                     <>
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       Please wait
//                     </>
//                   ) : (
//                     "Signup"
//                   )}
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           {/* Login Content */}
//           <TabsContent value="login" className="transition-all duration-300">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Login</CardTitle>
//                 <CardDescription>
//                   If you are already registered, just Login!
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-6">
//                 <div className="grid gap-3">
//                   <Label htmlFor="login-email">Email</Label>
//                   <Input
//                     id="login-email"
//                     type="email"
//                     name="email"
//                     value={loginInput.email}
//                     placeholder="Email"
//                     onChange={(e) => changeInputHandler(e, "login")}
//                     required="true"
//                   />
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="login-password">Password</Label>
//                   <Input
//                     id="login-password"
//                     type="password"
//                     name="password"
//                     value={loginInput.password}
//                     placeholder="Password"
//                     onChange={(e) => changeInputHandler(e, "login")}
//                     required="true"
//                   />
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button
//                   disabled={loginIsLoading}
//                   onClick={() => handleRigistration("login")}
//                 >
//                   {loginIsLoading ? (
//                     <>
//                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                       Please wait
//                     </>
//                   ) : (
//                     "Login"
//                   )}
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };
// export default Login;


import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();
  const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess }] = useLoginUserMutation();

  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRigistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup Successfully");
    }
    if (registerError) {
      toast.error(registerError.data.message || "Signup Failed");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login Successfully");
      navigate("/");
    }
    if (loginError) {
      toast.error(loginError.data.message || "Login Failed");
    }
  }, [loginIsLoading, registerIsLoading, loginData, registerData, loginError, registerError]);

  return (
    <div className="min-h-screen w-full flex items-start justify-center bg-gradient-to-br from-[#dfe9f3] to-[#ffffff] px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="backdrop-blur-xl bg-white/70 border border-gray-200 shadow-2xl rounded-3xl overflow-hidden px-6 py-8">
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-xl mb-6 bg-white border shadow-sm">
              <TabsTrigger
                value="signup"
                className="data-[state=active]:bg-gradient-to-tr data-[state=active]:from-indigo-500 data-[state=active]:to-blue-400 data-[state=active]:text-white rounded-xl transition-all duration-300"
              >
                Signup
              </TabsTrigger>
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-gradient-to-tr data-[state=active]:from-indigo-500 data-[state=active]:to-blue-400 data-[state=active]:text-white rounded-xl transition-all duration-300"
              >
                Login
              </TabsTrigger>
            </TabsList>

            <div className="transition-all duration-300 space-y-0">
              {/* Signup */}
              <TabsContent value="signup" className="animate-fade-in">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-gray-800">
                      Create Account
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      Begin your journey with us.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="signup-name">Name</Label>
                      <Input
                        id="signup-name"
                        name="name"
                        value={signupInput.name}
                        onChange={(e) => changeInputHandler(e, "signup")}
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        name="email"
                        value={signupInput.email}
                        onChange={(e) => changeInputHandler(e, "signup")}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        name="password"
                        value={signupInput.password}
                        onChange={(e) => changeInputHandler(e, "signup")}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                      disabled={registerIsLoading}
                      onClick={() => handleRigistration("signup")}
                    >
                      {registerIsLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Please wait
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Login */}
              <TabsContent value="login" className="animate-fade-in">
                <Card className="border-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-gray-800">
                      Welcome Back
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      Login to continue learning.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        name="email"
                        value={loginInput.email}
                        onChange={(e) => changeInputHandler(e, "login")}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        name="password"
                        value={loginInput.password}
                        onChange={(e) => changeInputHandler(e, "login")}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                      disabled={loginIsLoading}
                      onClick={() => handleRigistration("login")}
                    >
                      {loginIsLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Please wait
                        </>
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;



