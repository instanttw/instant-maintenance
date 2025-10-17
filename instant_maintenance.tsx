import React, { useState, useEffect } from 'react';
import { AlertCircle, Wrench, RefreshCw, Clock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function MaintenancePage() {
  const [dots, setDots] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 200);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl shadow-blue-500/30 animate-pulse">
            <Wrench className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Instant
          </h1>
        </div>

        {/* Main message card */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <RefreshCw className="w-16 h-16 text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            We're Making Things Better
          </h2>
          
          <p className="text-slate-300 text-lg text-center mb-8">
            Our team is performing scheduled maintenance to enhance your experience. 
            We'll be back online shortly{dots}
          </p>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-200 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Info alert */}
          <Alert className="bg-slate-700/50 border-slate-600 mb-6">
            <Clock className="h-5 w-5 text-blue-400" />
            <AlertDescription className="text-slate-300 ml-2">
              <span className="font-semibold text-white">Status:</span> We will be back soon
            </AlertDescription>
          </Alert>

          {/* Additional info */}
          <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
            <div className="flex-1 bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
              <AlertCircle className="w-6 h-6 text-yellow-400 mb-2 mx-auto sm:mx-0" />
              <p className="text-sm text-slate-400">
                Need urgent support? Contact us at{' '}
                <a href="mailto:support@instant.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  support@instant.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>Thank you for your patience and understanding</p>
          <p className="mt-2">© 2025 Instant. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}