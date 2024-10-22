
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

// IMAGES
import ArrowIcon from "@/assets/arrow-right.svg";
import calendarImage from "@/assets/calendar-home.png";
import chartImage from "@/assets/chart-home.png";
import hardwareImage from "@/assets/hardware-home.png";





export const Hero = () => {

    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section
            ref={heroRef}
            className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip"
            style={{ background: "radial-gradient(ellipse 200% 100% at bottom left, #25013e, #EAEEFE 100%)" }}
        >

            <div className="container">

                <div className="md:flex items-center">

                <div className="md:w-[478px]">
                    <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
                        Version 3.8 is here
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                        Your Time Efficiency hub
                    </h1>
                    <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                        Achieve more with an app designed to track your progress, fuel your efforts, and celebrate your successes—your ultimate Time Efficiency hub.
                    </p>
                    <div className="flex gap-1 items-center mt-[30px]">
                        <button className="btn btn-blue">Try for free</button>
                        <button className="btn btn-text-blue flex gap-1">
                            <span>Learn more</span>
                            {/* <ArrowIcon classname="h-2 w-2" /> */}
                        </button>
                    </div>
                </div>


                <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                    <motion.img
                        src={calendarImage.src}
                        alt="Cog"
                        className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                        animate={{
                            translateY: [-30, 30],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 3,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.img
                        src={chartImage.src}
                        width={220}
                        height={220}
                        alt="Cylinder image"
                        className="hidden md:block -top-8 -left-32 md:absolute"
                        style={{
                            translateY: translateY,
                        }}
                    />
                    <motion.img
                        src={hardwareImage.src}
                        width={220}
                        alt="Noodle image"
                        className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]"
                        style={{
                            rotate: 30,
                            translateY: translateY,
                        }}
                    />
                </div>


                
                </div>

            </div>

        </section>
    );
};
