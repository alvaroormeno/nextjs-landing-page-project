
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoCarousel } from '@/sections/LogoCarousel';
import { MainBody } from '@/sections/MainBody';
import { Pricing } from '@/sections/Pricing';
import { Testimonials } from '@/sections/Testimonials';
import { SignUp } from '@/sections/SignUp';
import { Footer } from '@/sections/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <LogoCarousel />
            <MainBody />
            <Pricing />
            <Testimonials />
            <SignUp />
            <Footer />
        </>
    )
}
