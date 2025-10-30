"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function BackgroundRippleDemo() {
  return (
    <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-8 md:min-h-[500px]">
      <BackgroundRippleEffect />
      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Interactive Background
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Click anywhere to see the ripple effect. Perfect for hero sections and call-to-action areas.
        </p>
      </div>
    </div>
  );
}
