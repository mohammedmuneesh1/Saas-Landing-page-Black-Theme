"use client"
import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
    <section className="custom-layout mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8">

            {/*LOGO + IMAGE SECTION START */}
            <div className="flex items-center gap-4">
                <Image
    src={logoImage}
    alt="Logo"
    width={300}
    height={80}
    className="h-auto w-auto"
/>
            </div>
            {/*LOGO + IMAGE SECTION START */}

            {/*FOOTER LINKS START */}
            <div className="flex gap-4">
                {footerLinks.map((link,index:number) => (
                <a
                    key={`footer-link-${index}`}
                    href={link.href}
                    className="text-white/50 hover:text-white"
                >
                    {link.label}
                </a>
                ))}
            </div>
            {/*FOOTER LINKS END */}

        </div>

    </section>
);
}
