"use client"
import Tag from "@/components/Tag";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    return (
     <div className="custom-layout py-24">
    <div className="flex justify-center "> 
        <Tag> FAQs</Tag>    
    </div>

    <h2 className="text-6xl font-medium mt-6 text-center">Questions? We&apos;ve got <span className="text-lime-400">Answers</span></h2>
    <div className="mt-12 flex flex-col gap-6 ">
        {
            faqs.map((faq,index:number) => (  
                <div key={faq?.question}
                onClick={()=>setSelectedIndex(selectedIndex === index ? null : index)}
                className=" gap-4 p-6 2xl:p-8 border border-white/10
                 bg-neutral-900 rounded-2xl
                  cursor-pointer hover:bg-black-400 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-medium ">{faq?.question}</h3>
                        <div
                         className={`size-8 rounded-full bg-neutral-800 inline-flex items-center justify-center ${selectedIndex === index ? "rotate-45" : ""}`}>
                        <BiPlus className={`text-lime-400 text-xl `} />
                        </div>
                    </div>
                    <div className={twMerge("mt-6", selectedIndex === index ? "block" : "hidden")}>
                   <p  className={"mt-6"}>{faq?.answer}</p>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
    );
}
