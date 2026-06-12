"use client"


import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg"
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";



const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
    <div className="custom-layout py-24">
    <div className="flex justify-center"> 
    <Tag> Features</Tag>
    </div>

    <h2
    className="text-6xl font-medium text-center mt-6 "
    >Where power meets <span className="text-lime-400">Simplicity </span>
    </h2>


<div 
// className="mt-12 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8  "
 className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 lg:gap-8"
>
{/* CARD-1 */}
<FeatureCard
title="Real-time Collaboration"
description="Work together seamlessly with conflict-free team editing"
>
    <div 
    // className="max-sm:aspect-video  flex items-center justify-center"
    className="sm:aspect-video flex items-center justify-center"
    // className="aspect-video  flex items-center justify-center"
    >
        <Avatar className="z-40">
            <Image
             src={avatar1}
            alt="Avatar 1"
            className="rounded-full"
            />
        </Avatar>
        <Avatar
        className="-ml-6 border-indigo-500 z-30"
        >
            <Image
             src={avatar2}
            alt="Avatar 1"
            className="rounded-full"
            />
        </Avatar>
        <Avatar
        className="-ml-6 border-amber-500 z-20"
        >
            <Image
             src={avatar3}
            alt="Avatar 1"
            className="rounded-full"
            />
        </Avatar>
        <Avatar className=" -ml-6 border-transparent">
            <div className=" size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                {
                    Array.from({length:3})?.map((_,i)=>(
                        <span
                        key={i}
                        className="size-1.5 rounded-full bg-white inline-flex "
                        >

                        </span>
                    ))
                }
            </div>
        </Avatar>
    </div>
</FeatureCard>
    
 {/* CARD-2 */}
 <FeatureCard
title="Interactive Prototyping"
description="Engage your clients with prototypes that react to user actions"
>
<div 
    className=" flex items-center justify-center">
        <p className="text-4xl font-extrabold text-white/20 text-center leading-snug">
        We&apos;ve achieved
        <br/>
        <span
         className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
         >
            Incredible</span>
            <br/>
        growth this year
        </p>
</div>

</FeatureCard>

    {/* CARD-3 */}

<FeatureCard
title="Keyboard Quick Actions"
description="Powerful commands to help you create design more quickly "
 className="w-full col-span-1 sm:col-span-2 lg:col-span-1"
>
<div
 className="max-sm:aspect-video flex  items-center justify-center gap-2 "
 >
    <Key className="max-w-28 w-full" >Shift</Key>
    <Key>Alt</Key>
    <Key>C</Key>

</div>
</FeatureCard>




</div>


{/*FEATURES START */}
<div className="mt-8 max-w-full lg:max-w-[60%] w-full mx-auto flex flex-wrap justify-center gap-2">
{
    features?.map((feature) => (
        <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl items-center gap-3">
            <span className="bg-lime-400 text-neutral-950 inline-flex items-center justify-center rounded-full size-4 text-xl">&#10038;</span>
            <span className="font-medium">{feature}</span>
        </div>
    ))
}
</div>
{/*FEATURES END */}

    </div>
);
}
