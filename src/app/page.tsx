
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoCarousel } from '@/sections/LogoCarousel';
import { MainBody } from '@/sections/MainBody';
import { Pricing } from '@/sections/Pricing';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <LogoCarousel />
            <MainBody />
            <Pricing />
        </>
    )
}
