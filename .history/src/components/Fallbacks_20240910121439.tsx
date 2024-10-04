import React from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

export const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center h-screen">
    <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
    <span className="ml-2 text-lg font-semibold text-gray-700">Loading...</span>
  </div>
);

interface ErrorFallbackProps {
  error: Error;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => (
  <div className="flex flex-col items-center justify-center h-screen">
    <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
    <h2 className="text-xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h2>
    <p className="text-gray-600 mb-4">{error.message}</p>
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      onClick={() => window.location.reload()}
    >
      Refresh Page
    </button>
  </div>
);
