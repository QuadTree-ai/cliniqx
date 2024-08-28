import React from "react";

export function GridBackgroundDemo() {
    return (
        <div className="h-[50rem] w-full relative flex items-center justify-center">
            {/* Ensure the grid is visible */}
            <div className="absolute inset-0 bg-grid-custom-pattern opacity-75"></div>
            {/* Radial gradient to test layering */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-20"></div>
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Backgrounds
            </p>
        </div>
    );
}
