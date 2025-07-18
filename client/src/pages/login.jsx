import { AppWindowIcon, CodeIcon } from "lucide-react";

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
import { useState } from "react";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: " ",
    email: " ",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: " ", password: "" });

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRigistration = (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    console.log(inputData);
  }

  return (
    <div className="flex items-start justify-center min-h-screen w-full py-20 bg-gray-50">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          {/* Signup Content */}
          <TabsContent value="signup" className="transition-all duration-300">
            <Card>
              <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>
                  Create a new account and click Signup when you are done!
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="signup-name">Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    name="name"
                    value={signupInput.name}
                    onChange={(e) => changeInputHandler(e,"signup")}
                    placeholder="Email"
                    required="true"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    name="email"
                    value={signupInput.email}
                    onChange={(e) => changeInputHandler(e,"signup")}
                    placeholder="Email"
                    required="true"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    onChange={(e) => changeInputHandler(e,"signup")}
                    name="password"
                    value={signupInput.password}
                    type="password"
                    placeholder="Password"
                    required="true"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => {handleRigistration("signup")}}  className="w-full">Sign-up</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Login Content */}
          <TabsContent value="login" className="transition-all duration-300">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  If you are already registered, just Login!
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    name="email"
                    value={loginInput.email}
                    placeholder="Email"
                    onChange={(e) => changeInputHandler(e,"login")}
                   required="true"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    name="password"
                    value={loginInput.password}
                    placeholder="Password"
                    onChange={(e) => changeInputHandler(e,"login")}
                    required="true"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => {handleRigistration("login")}} className="w-full">Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Login;
