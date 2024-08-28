'use client';

import React, { useState } from 'react';
import { useLoginForm } from './LoginFormLogic';
import Logo from '../Logo';
import Background from '../Background';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form } from "@/components/ui/form"

const LoginForm = () => {
  const router = useRouter();

  const {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleSubmit,
  } = useLoginForm();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleCreateAccountClick = () => {
    router.push('/signup');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gold p-4 sm:p-6 md:p-8 lg:p-12">
      <Background />
      <Form 
        onSubmit={handleSubmit} 
        className="relative bg-white bg-opacity-80 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border border-gray-300"
      >
        <div className="flex justify-center mb-6">
          <Logo className="text-darkBlue" />
        </div>
        {error && <p className="font-poppins text-sm text-red-500 mb-4 text-center">{error}</p>}
        <div className="mb-4">
          <Label htmlFor="email" className="block text-sm font-medium text-darkBlue mb-2 font-poppins">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 bg-opacity-60 focus:outline-none focus:ring-gold focus:border-gold sm:text-sm transition duration-200 text-darkBlue placeholder-gray-500 font-poppins"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6 relative">
          <Label htmlFor="password" className="block text-sm font-medium text-darkBlue mb-2 font-poppins">Password</Label>
          <div className="relative w-full">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 bg-opacity-60 focus:outline-none focus:ring-gold focus:border-gold sm:text-sm transition duration-200 text-darkBlue placeholder-gray-500 font-poppins pr-12"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute inset-y-0 right-0 px-4 py-3 text-sm font-medium text-darkBlue hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition duration-200 font-poppins"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-darkBlue hover:bg-[#2e3546] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition duration-200 font-poppins"
        >
          Sign In
        </Button>
        <div className="mt-4 text-center">
          <Button
            type="button"
            onClick={handleCreateAccountClick}
            variant="link"
            className="text-sm text-darkBlue hover:underline font-poppins"
          >
            Create Account
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
