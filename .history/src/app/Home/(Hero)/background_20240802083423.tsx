// src/app/Home/(Hero)/background.tsx

import React from "react";

export function GridBackgroundDemo() {
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-black relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-radial from-transparent to-black opacity-20"></div>
            <div className="absolute inset-0 bg-grid-custom-pattern"></div> {/* Background grid pattern */}
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Transforming Healthcare
            </p>
        </div>
    );
}
