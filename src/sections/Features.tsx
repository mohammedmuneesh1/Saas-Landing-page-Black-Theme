"use client"


import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg"
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
className="group"
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
        <Avatar className=" -ml-6 border-transparent group-hover:border-green-500 transition ">
            <div className=" relative size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">

                <Image
             src={avatar4}
            alt="Avatar 1"
            className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
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
className="group "
>
<div 
    className="relative flex items-center justify-center">
        <p className="text-4xl font-extrabold text-white/20 
        group-hover:text-white/10 duration-500 transition 
        text-center leading-snug">
        We&apos;ve achieved
        <br/>
        <span
         className="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
         >
            <span className="">
            Incredible
            </span>
      <video
  src={"/assets/gif-incredible.mp4"}
  autoPlay
  loop
  muted
  playsInline
  className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl
   shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"
/>
</span>
            <br/>
        growth this year
        </p>
</div>

</FeatureCard>

    {/* CARD-3 */}

<FeatureCard
title="Keyboard Quick Actions"
description="Powerful commands to help you create design more quickly "
 className="w-full col-span-1 sm:col-span-2 lg:col-span-1 group"
>
<div
 className="max-sm:aspect-video flex  items-center justify-center gap-4  "
 >
    <Key className="max-w-28 group-hover:outline-lime-400 outline-transparent   outline transition-all duration-300 outline-2 outline-offset-4 group-hover:translate-y-1 delay-150 w-full " >Shift</Key> 
    {/*TRANSLATE-Y-1 MAKE IT LITTLE BIT DOWN */}
    <Key className="group-hover:outline-lime-400 outline-transparent   outline transition-all duration-300 outline-2 outline-offset-4 group-hover:translate-y-1 delay-150">Alt</Key>
    {/*TRANSLATE-Y-1 MAKE IT LITTLE BIT DOWN */}
    <Key className="group-hover:outline-lime-400 outline-transparent   outline transition-all duration-300 outline-2 outline-offset-4 group-hover:translate-y-1 delay-150">C</Key>
    {/*TRANSLATE-Y-1 MAKE IT LITTLE BIT DOWN */}
</div>
</FeatureCard>




</div>


{/*FEATURES START */}
<div className="mt-8 max-w-full lg:max-w-[60%] w-full mx-auto flex flex-wrap justify-center gap-2">
{
    features?.map((feature) => (
        <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl
         items-center gap-3 hover:scale-105 transition duration-500 group cursor-pointer">
            <span className="bg-lime-400 text-neutral-950 inline-flex items-center
             justify-center rounded-full size-4 text-xl group-hover:rotate-45 transtion duration-500 transition-all duration-500">&#10038;</span>
            <span className="font-medium">{feature}</span>
        </div>
    ))
}
</div>
{/*FEATURES END */}

    </div>
);
}
