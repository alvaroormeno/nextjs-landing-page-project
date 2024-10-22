

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
        text: "As a busy designer juggling multiple projects, this time management app quickly became my go-to solution.",
        imageSrc: human1.src,
        name: "Alex Carter",
        username: "@alexcarterpro",
    },
    {
        text: "Our team's efficiency has soared ever since we started using this app to organize our schedules.",
        imageSrc: human2.src,
        name: "Chris Adams",
        username: "@chrisadams",
    },
    {
        text: "This app has revolutionized how I plan my days and meet deadlines with ease.",
        imageSrc: human3.src,
        name: "Taylor Morgan",
        username: "@taylormorgan",
    },
    {
        text: "I was impressed at how seamlessly this app fit into our team's workflow, making time management effortless.",
        imageSrc: human4.src,
        name: "Jordan Bennett",
        username: "@jordanbennett",
    },
    {
        text: "Planning events has never been more organized. This app helps me stay on top of every detail, so nothing falls through the cracks.",
        imageSrc: human5.src,
        name: "Drew Collins",
        username: "@drewcollins",
    },
    {
        text: "The flexibility and integration options of this app are unmatched, making it essential for managing my time effectively.",
        imageSrc: human6.src,
        name: "Morgan Blake",
        username: "@morganblake",
    },
    {
        text: "Using this app has streamlined our team’s project planning and improved communication throughout.",
        imageSrc: human7.src,
        name: "Avery Parker",
        username: "@averyparker",
    },
    {
        text: "With this app, we easily assign tasks, track progress, and manage our time—all in one place.",
        imageSrc: human8.src,
        name: "Charlie Nguyen",
        username: "@charlienguyen",
    },
    {
        text: "Its intuitive interface and powerful features perfectly support our diverse time management needs.",
        imageSrc: human9.src,
        name: "Riley Brooks",
        username: "@rileybrooks",
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
        <section className="py-24 bg-white">
            <div className="container">
                <div className="section-heading">
                    {/* <div className="flex justify-center">
                        <div className="tag">Testimonials</div>
                    </div> */}

                    <h2 className="section-main-title mt-5">Feedback from our community</h2>
                    <p className="section-description mt-5">
                        With its intuitive design and powerful features, our time management app has become an indispensable tool for users worldwide.
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
