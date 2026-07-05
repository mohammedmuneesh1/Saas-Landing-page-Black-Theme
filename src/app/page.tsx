import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
export default function Home() {
    return (
    <div >
        <Navbar />
        <div className="overflow-hidden">
        <Hero/>
        </div>
        <LogoTicker/>
        <Introduction/>
        <Integrations/>
        <Features/>
        <Faqs/>
        <CallToAction/>
        <Footer/>
    </div>
);
}
