
"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// IMAGES
import productImage from "@/assets/tab-data-manager.png";
import calendarImage from "@/assets/calendar-timer.png";
import checklistImage from "@/assets/checklist.png";


export const MainBody = () => {

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


    return (
        <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
            <div className="container">
                <div className="max-w-[540px] mx-auto">
                {/* <div className="flex justify-center">
                    <div className="tag">Boost your time management</div>
                </div> */}

                <h2 className="section-main-title mt-5">
                Boost your time management
                </h2>
                <p className="section-description mt-5">
                    Easily transform your tasks into an organized, efficient schedule in minutes with this time management app
                </p>
                </div>

                <div className="relative">
                <Image src={productImage} alt="Product image" className="mt-10" />
                <motion.img
                    src={calendarImage.src}
                    alt="Pyramid image"
                    height={262}
                    width={262}
                    className="hidden md:block absolute -right-36 -top-32"
                    style={{
                    translateY: translateY,
                    }}
                />
                <motion.img
                    src={checklistImage.src}
                    alt="Tube image"
                    height={248}
                    width={208}
                    className="hidden md:block absolute bottom-24 -left-36"
                    style={{
                    translateY: translateY,
                    }}
                />
                </div>
            </div>
        </section>
    );
};
