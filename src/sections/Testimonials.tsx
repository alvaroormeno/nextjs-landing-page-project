

"use client";
import Image from "next/image";
import React, { use } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";


import human1 from "@/assets/avatar-1.png";
import human2 from "@/assets/avatar-2.png";
import human3 from "@/assets/avatar-3.png";
import human4 from "@/assets/avatar-4.png";
import human5 from "@/assets/avatar-5.png";
import human6 from "@/assets/avatar-6.png";
import human7 from "@/assets/avatar-7.png";
import human8 from "@/assets/avatar-8.png";
import human9 from "@/assets/avatar-9.png";

const testimonials = [
    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: human1.src,
        name: "Jamie Rivera",
        username: "@jamietechguru00",
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool. ",
        imageSrc: human2.src,
        name: "Josh Smith",
        username: "@jjsmith",
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        imageSrc: human3.src,
        name: "Morgan Lee",
        username: "@morganleewhiz",
    },
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        imageSrc: human4.src,
        name: "Casey Jordan",
        username: "@caseyj",
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: human5.src,
        name: "Taylor Kim",
        username: "@taylorkimm",
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: human6.src,
        name: "Riley Smith",
        username: "@rileysmith1",
    },
    {
        text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
        imageSrc: human7.src,
        name: "Jordan Patels",
        username: "@jpatelsdesign",
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        imageSrc: human8.src,
        name: "Sam Dawson",
        username: "@dawsontechtips",
    },
    {
        text: "Its user-friendly interface and robust features support our diverse needs.",
        imageSrc: human9.src,
        name: "Casey Harper",
        username: "@casey09",
    },
];

export const Testimonials = () => {

    const firstColumn = testimonials.slice(0, 3);
    const secondColumn = testimonials.slice(3, 6);
    const thirdColumn = testimonials.slice(6, 9);


    const TestimonialsColumn = (props: {
        className?: string;
        testimonials: typeof testimonials;
        duration?: number;
    }) => {
        return (
            <div className={props.className}>
                <motion.div
                    animate={{
                        translateY: "-50%",
                    }}
                    transition={{
                        duration: props.duration || 10,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                    className="flex flex-col gap-6 pb-6"
                >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {props.testimonials.map(({ text, imageSrc, name, username }) => (
                        <div className="testimonial-card" key={username}>
                            <div>{text}</div>
                            <div className="flex items-center gap-2 mt-5">
                            <Image
                                width={40}
                                height={40}
                                src={imageSrc}
                                alt={name}
                                className="h-10 w-10 rounded-full"
                            />
                            <div className="flex flex-col">
                                <div className="font-medium tracking-tight leading-5">{name}</div>
                                <div className="leading-5 tracking-tight">{username}</div>
                            </div>
                            </div>
                        </div>
                        ))}
                    </React.Fragment>
                    )),
                ]}
                </motion.div>
            </div>
            );
        };



    return (
        <section className="bg-white">
            <div className="container">
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag">Testimonials</div>
                    </div>

                    <h2 className="section-main-title mt-5">What our users say</h2>
                    <p className="section-description mt-5">
                        From intuitive design to powerful features, out app has become an essential tool for users around
                        the world.
                    </p>
                </div>


                <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>

            </div>
        </section>
    );
};
