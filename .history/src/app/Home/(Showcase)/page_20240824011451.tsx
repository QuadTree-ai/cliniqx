"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card"; // Import WobbleCard from the right path

const Showcase = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full py-12">
      {/* First WobbleCard */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-r from-purple-500 to-pink-500 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            CliniQX Powers Your Health Journey
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            With CliniQX, you get the most reliable healthcare card for seamless transactions and health data management.
          </p>
        </div>
        <Image
          src="/healthcard-demo.webp"
          width={500}
          height={500}
          alt="healthcard demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* Second WobbleCard */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-r from-blue-500 to-cyan-500">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Manage your health like never before
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          CliniQX brings innovative tools for personalized healthcare management.
        </p>
      </WobbleCard>

      {/* Third WobbleCard */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-green-500 to-teal-500 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Sign up for the CliniQX healthcare card today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Experience the future of healthcare with CliniQX. Get your card now for streamlined health services.
          </p>
        </div>
        <Image
          src="/signup-demo.webp"
          width={500}
          height={500}
          alt="signup demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
};

export default Showcase;
