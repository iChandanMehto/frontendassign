"use client";

import {
  ArrowRight,
  Eye, EyeOff, Lock, Mail,

} from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React ,{useEffect}from "react";
import Link from "next/link";
import { Suspense } from "react";
import { CircleUserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import GlassUserIcon from "@/components/ui/GlassUserIcon";
import toast from "react-hot-toast";
import axios from "axios";




// Inner component
function SignUpCard() {
const router = useRouter();
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = React.useState({
    email:"",
    password:"",
    username:"",

  })

  const [laoding , setLoading]  = React.useState(false);


  const [buttonDisabled, setButtonDisabled] = React.useState(false);

useEffect(() => {
if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
  setButtonDisabled(false);

}else{
  setButtonDisabled(true);
}
}, [user])

 

  const onSignUp = async ()=>{
    try {
      setLoading(true);
const response = await axios.post("/api/users/signup", user);
     console.log("Signup successfully", response.data);
router.push("/login");
    } catch (error:any) {
      console.log("SignUp failed", error.message)
      toast.error(error.message)
    }finally{
      setLoading(false);
    }

  }                                                                                                             
  return (

<div className="min-h-screen flex items-center justify-center  w-full bg-black relative p-6">
  {/*  Diagonal Cross Top Left Fade Grid Background */}
  <div
   className="absolute inset-0 z-0"
   style={{
     background: `
       radial-gradient(ellipse 140% 50% at 15% 60%, rgba(124, 58, 237, 0.11), transparent 48%),
       radial-gradient(ellipse 90% 80% at 85% 25%, rgba(245, 101, 101, 0.09), transparent 58%),
       radial-gradient(ellipse 120% 65% at 40% 90%, rgba(34, 197, 94, 0.13), transparent 52%),
       radial-gradient(ellipse 100% 45% at 70% 5%, rgba(251, 191, 36, 0.07), transparent 42%),
       radial-gradient(ellipse 80% 75% at 90% 80%, rgba(168, 85, 247, 0.10), transparent 55%),
       #000000`,
   }}
 />
    <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 w-60 h-60 bg-pink-100 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute left-1/4 bottom-1/3 w-40 h-40 bg-indigo-100 rounded-full opacity-40 blur-2xl"></div>

        {/* Abstract shapes */}
        <div className="absolute top-40 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 -left-10 w-40 h-40 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-xl"></div>

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/">
<GlassUserIcon size={50} />
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center my-6">
            <h1 className="text-3xl font-bold tracking-tight my-6 py-6">
{laoding  ? "Processing" : "Welcome"}
            </h1>
          </div>

          {/* Dummy form (UI only) */}
          <form className="space-y-6 max-h-[50vh] md:max-h-[60vh] overflow-y-auto px-4   custom-scrollbar">
            <div className="space-y-2">
               <Label htmlFor="Username"> User Name</Label>
            <Input
              type="text"
              id="username"
              value={user.username}
              onChange={(e)=>{
                setUser({...user, username:e.target.value})
              }}
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md bg-[#F9FAFB] px-4  py-2  focus:outline-none"
            />

                    </div>

            <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              value={user.email}
                                  onChange={(e)=>{
                setUser({...user, email:e.target.value})
              }}
                              required
                              className="pl-10 bg-[#F9FAFB]"
                              
                            />
                            <Mail className="absolute left-3 top-2 h-5 w-5 text-neutral-400" />
                          </div>
                        </div>
            

            <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <div className="relative">
                            <Input
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              value={user.password}
                             onChange={(e)=>{
                setUser({...user, password:e.target.value})
              }}
                              required
                              className="pl-10 bg-[#F9FAFB]"
                            />
                            <Lock className="absolute left-3 top-2 h-5 w-5 text-neutral-400" />
                            <button
                              type="button"
                              onClick={handleTogglePassword}
                              className="absolute right-3 top-2 text-neutral-400 hover:text-neutral-600"
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                              ) : (
                                <Eye className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </div>

            <button
              type="button"
              onClick={onSignUp}
              className="w-full flex items-center justify-center group bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-neutral-900 transition-colors"
            >
        {buttonDisabled  ?  "Sign Up"  : " Create Account "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Footer text */}
          <p className="mt-8 text-center text-sm text-neutral-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
</div>

  
  );
}

// Main component with Suspense boundary
export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <SignUpCard />
    </Suspense>
  );
}