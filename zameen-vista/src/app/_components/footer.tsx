"use client";

import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-curtain-light border-t border-slate-200/50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* Portfolio Message */}
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Hey there! I am{" "}
              <a
                href="https://mirza-dev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#aa272e] hover:text-[#8a1f25] transition-colors duration-300"
              >
                <span className="inline-block hover:scale-110 transition-transform duration-300 underline decoration-[#aa272e] hover:decoration-[#aa272e] decoration-2 underline-offset-4">
                  AbdurRab
                </span>
              </a>
              , this is my portfolio project to earn your trust.
            </p>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-xl md:text-2xl">Crafted with</span>
            <Heart className="w-8 h-8 text-[#aa272e] fill-[#aa272e] animate-pulse" />
            <span className="text-xl md:text-2xl">and dedication</span>
          </div>


          {/* Divider */}
          <div className="w-full max-w-md h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

          {/* Copyright */}
          <div className="text-base text-slate-500">
            <p>© {new Date().getFullYear()} Zameen Vista. A portfolio project by AbdurRab.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}