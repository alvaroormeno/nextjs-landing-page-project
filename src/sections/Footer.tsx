import Image from "next/image";

// IMAGES
import logo from "@/assets/clock-logo.png";
import SocialX from "@/assets/x-twtitter.svg";
import SocialInsta from "@/assets/instagram.svg";
import SocialLinkedin from "@/assets/linkedin.svg";
import SocialPin from "@/assets/pinterest.svg";
import SocialYoutube from "@/assets/youtube.svg";



export const Footer = () => {
    return (
        <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
            <div className="container">
                <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
                    <Image src={logo} alt="logo" height={40} className="relative" />
                </div>
                <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
                    <a href="">About</a>
                    <a href="">Pricing</a>
                    <a href="">Testimonials</a>
                    <a href="">Versions</a>
                    <a href="">Help</a>
                </nav>

                <div className="flex justify-center gap-6 mt-6">
                <SocialInsta />
                    <SocialX />
                    <SocialLinkedin />
                    <SocialYoutube />
                    <SocialPin />
                </div>
                <p className="mt-6">&copy; 2024 MGMT APP, Inc.</p>
            </div>
        </footer>
    );
};
