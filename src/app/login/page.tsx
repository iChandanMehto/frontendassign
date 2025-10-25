"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function LoginCard() {
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",

  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onLogin    = async ()=>{
    try {
      setLoading(true);
     const response =  await axios.post("/api/users/login", user);
     console.log("Login success", response.data);
     toast.success("Login success");
     router.push("/profile");
     
        } catch (error:any) {
      console.log("Login failed", error.message)
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }

useEffect(() => {
if(user.email.length > 0 && user.password.length  > 0){
  setButtonDisabled(false);

}else{
  setButtonDisabled(true);
}
}, [user])




  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (


    <div className="min-h-screen flex items-center justify-center w-full bg-white relative  p-6">
  {/*  Diagonal Cross Top Left Fade Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
      backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
    }}
  />
      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-100 rounded-full opacity-60 blur-3xl"></div>

        <div className="relative z-10">
          {/* <div className="flex justify-center mb-8">
            <Link href="/">
              <Image
                src="/assets/images/svgFol/ADVISSY.svg"
                alt="Advissy Logo"
                width={137}
                height={38}
                className="h-15 w-auto"
              />
            </Link>
          </div> */}

          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back</h1>
            <p className="text-neutral-600 text-2xl mb-8">
          {loading ? "Processing":"Login"}
            </p>
          </div>

  

          {/* success / error messages */}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-lg text-sm">
              {success}
            </div>
          )}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* login form */}
          <form className="space-y-6">
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
                  className="pl-10"
                  disabled={loading}
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
                  className="pl-10"
                  disabled={loading}
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-neutral-300 text-black focus:ring-neutral-500"
                />
                <Label htmlFor="remember-me" className="ml-2">
                  Remember me
                </Label>
              </div>
              <div className="text-sm">
                <Link
                  href="/auth/forgot-password"
                  className="font-medium text-neutral-600 hover:text-neutral-900"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full flex items-center justify-center group"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <span className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></span>
                  Signing in...
                </span>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-neutral-600">
            Don’t have an account?{" "}
            <Link
              href={`/api/users/signup`}
              className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>

   
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <LoginCard />
    </Suspense>
  );
}
