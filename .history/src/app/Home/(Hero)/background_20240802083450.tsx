import React from "react";

export function GridBackgroundDemo() {
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div style={{ 
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, transparent 20%, black 100%)',
                opacity: 0.2
            }}></div>
            <div className="absolute inset-0 bg-grid-custom-pattern"></div> {/* Background grid pattern */}
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Transforming Healthcare
            </p>
        </div>
    );
}
