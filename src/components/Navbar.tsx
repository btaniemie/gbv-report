"use client"

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full border-b border-white/5 bg-purple-500 backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-9 w-9 rounded-xl flex items-center justify-center">
                    <img src='/logo.svg'/>
                </div>
                <span className="text-lg font-semibold text-white hover:text-purple-900 transition-colors">
                  GBV Guardian
                </span>
              </Link>
            </div>
    
            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/submit-report"
                className="text-sm text-white hover:text-purple-900 transition-colors"
              >
                Submit your report
              </Link>
    
              <Link
                href="/track-report"
                className="text-sm text-white hover:text-purple-900 transition-colors"
              >
                Track your report
              </Link>
    
              <Link
                href="/resources"
                className="text-sm text-white hover:text-purple-900 transition-colors"
              >
                Learn more about GBV
              </Link>
            </div>        
          </div>
        </div>
      </div>
      )
}