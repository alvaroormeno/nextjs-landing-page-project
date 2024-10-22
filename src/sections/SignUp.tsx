
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// IMAGES
import ArrowRight from "@/assets/arrow-right.svg";
import megaphoneImage from "@/assets/megaphone.png";
import chartDisplayImage from "@/assets/chart-display.png";


export const SignUp = () => {

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


    return (
        <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
            <div className="container">
                <div className="section-heading relative">
                    <h2 className="section-main-title">Sign up today for free!</h2>
                    <p className="section-description mt-5 px-5">
                        
                        Embrace the satisfaction of achieving your goals with an app designed to organize your time, track your progress, and keep you motivated.
                    </p>

                    <motion.img
                        src={megaphoneImage.src}
                        alt="Megaphone image"
                        width={260}
                        className="absolute -left-[290px] -top-[137px]"
                        style={{
                            translateY,
                        }}
                    />
                    <motion.img
                        src={chartDisplayImage.src}
                        alt="Chart image"
                        width={260}
                        className="absolute -right-[300px] -top-[-40px]"
                        style={{
                            translateY,
                        }}
                    />
                </div>

                <div className="flex gap-2 mt-10 justify-center">
                    <button className="btn btn-primary">Try for free</button>
                    <button className="btn btn-text gap-1">
                        <span>Learn more</span>
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};
