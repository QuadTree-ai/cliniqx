import React, { useReducer } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialState = {
  phoneNumber: "",
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setPhoneNumber':
      return { ...state, phoneNumber: action.payload };
    case 'setError':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

const LoginModal = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = () => {
    console.log("Login with OTP sent to:", state.phoneNumber);
    // Additional logic for handling OTP
  };

  const handleEmailLogin = () => {
    router.push("/pharmacy/login/email");
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google initiated");
    // Integration with Google Auth API
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <Card className="bg-white p-8 rounded-lg max-w-md w-full space-y-6 shadow-lg">
        <CardHeader>
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          <p className="text-sm text-gray-500">Access your account</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              label="Phone Number"
              type="text"
              placeholder="+91 Phone"
              value={state.phoneNumber}
              onChange={e => dispatch({ type: 'setPhoneNumber', payload: e.target.value })}
              fullWidth
            />
            <Button onClick={handleLogin} fullWidth variant="primary">
              Send One Time Password
            </Button>
            <p className="text-center my-6 text-gray-400">— or —</p>
            <Button onClick={handleEmailLogin} fullWidth variant="secondary">
              Continue with Email
            </Button>
            <Button onClick={handleGoogleLogin} fullWidth variant="danger">
              Sign in with Google
            </Button>
          </div>
        </CardContent>
        <p className="text-sm text-center">
          New to cliniqx-invent? 
          <Link href="/pharmacy/signup">
            <a className="text-blue-500 underline hover:text-blue-600">Create account</a>
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginModal;
