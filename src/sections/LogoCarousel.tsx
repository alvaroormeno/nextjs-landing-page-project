"use client";
import ocofLogo from "@/assets/ocof-logo.webp";
import carboniteLogo from "@/assets/carbonite-logo.png";
import stripeLogo from "@/assets/stripe-logo.webp";
import kinaxisLogo from "@/assets/Kinaxis_Logo_Single_Mono.png";
import nikeLogo from "@/assets/nike-logo.webp";
import disneyLogo from "@/assets/Disney_400.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoCarousel = () => {
    return (
        <div className="py-8 md:py-12 bg-white">
            <div className="container">
                <div
                    className="flex overflow-hidden"
                    style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
                >
                <motion.div
                    className="flex gap-14 flex-none pr-14"
                    animate={{
                        translateX: "-50%",
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    <Image src={ocofLogo} alt="Acme logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>
                    <Image src={carboniteLogo} alt="quantam logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>
                    <Image src={stripeLogo} alt="Echo logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>
                    <Image src={kinaxisLogo} alt="celestial logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>
                    <Image src={nikeLogo} alt="Pulse logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>
                    <Image src={disneyLogo} alt="Apex logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>

                    <Image src={ocofLogo} alt="Acme logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>
                    <Image src={carboniteLogo} alt="quantam logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>
                    <Image src={stripeLogo} alt="Echo logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>
                    <Image src={kinaxisLogo} alt="celestial logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>
                    <Image src={nikeLogo} alt="Pulse logo" className="logo-ticker-image" style={{height: '80px', width: 'auto'}}/>
                    <Image src={disneyLogo} alt="Apex logo" className="logo-ticker-image" style={{height: '80px',  width: 'auto'}} />
                </motion.div>
                </div>
            </div>
        </div>
    );
};
