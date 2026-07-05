"use client"

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {

    const words = text.split('')

const scrollTarget = useRef<HTMLDivElement | null>(null)
;
const {scrollYProgress} = useScroll({
    target:scrollTarget,
    offset:['start start', 'end end'],
});


const [currentWord,setCurrentWord] = useState(0);
const wordIndex = useTransform(scrollYProgress, [0,1],[0,words.length]);

useEffect(()=>{
    wordIndex.on('change',(latest)=> {
        setCurrentWord(latest);
})
},[]);





// useMotionValueEvent(scrollYProgress,"change",(latest)=>{
//     console.log('latest scrollTarget', latest)
// })
    

    //----------------NOTE START ⚠️⚠️⚠️----------------
//1)     <div className="sticky top-0">  
//2) <div className="h-[150vh] bg-green-400 "/> TO MAKE STICKY STAY THERE TO MAKE SCROLL ,
//  WHEN STICKY GIVEN IT NEED 15OVH HEIGHT AS IT ONLY STAY STICKY UNTIL ITS CONTENT IS FINISEDH.
//  ONCE THE CONTENET FINSISHED, IT WILL START SCROLLING NORAMLLY ACCORDING TO THE PAGE 
//3)  <div className="h-[150vh] bg-green-400 "/>  ONLY STICKY DIV STAY THERE, THEREFORE THIS ONE GO BELOW THE STICKY DIV, AND IT WILL SCROLL NORMALLY.




       return (
    <section className=" relative custom-layout py-24 ">
         <div ref={scrollTarget}>  {/*when here it reach top-0 it will trigger (start start is given ) */}

        <div className="sticky top-20 lg:top-28 xl:top-36">  
        <div className="flex justify-center">
        <Tag>Introducing Layers</Tag>
        </div>

        <div className="text-4xl md:text-6xl lg:text-7xl 2xl:text-[80px] 2xl:leading-relaxed text-center font-medium mt-10">
            <span>
            Your creative process derseves better.
            </span>
            <span className="">
            {/* {text} */}
            {words?.map((val,index:number)=>(
                <span key={`${val}-${index}`}
                className={twMerge( "transition duration-500 text-white/15" ,index  < currentWord && 'text-white'  )}
                >{`${val}`}</span>
            ))}
            </span>
            <span className="text-lime-400 block">
            That&apos;s why we built Layers.
            </span>
        </div>
        </div>

        <div 

        className="h-[150vh]"
        
        /> 
         </div>
        
    </section>
    );
}


    // <section className="custom-layout py-24 ">
    //     <div className="sticky top-20 lg:top-28">  
    //     <div className="flex justify-center">
    //     <Tag>Introducing Layers</Tag>
    //     </div>

    //     <div className="text-4xl md:text-6xl lg:text-7xl 2xl:text-[80px] text-center font-medium mt-10">
    //         <span>
    //         Your creative process derseves better.
    //         </span>
    //         <span className="">
    //         {/* {text} */}
    //         {words?.map((val,index:number)=>(
    //             <span key={`${val}-${index}`}
    //             className={twMerge( "transition duration-500 text-white/15" ,index  < currentWord && 'text-white'  )}
    //             >{`${val}`}</span>
    //         ))}
    //         </span>
    //         <span className="text-lime-400 block">
    //         That&apos;s why we built Layers.
    //         </span>
    //     </div>
    //     </div>
    //     <div 
    //     ref={scrollTarget}
    //     className="h-[150vh]  "
        
    //     /> {/*  */}
    //     {/* <div className="h-[150vh] bg-green-400 "/>
    //      {/* CHECK GREEN BG BY UNCOMMENTING YOU FIND IT PASING BELOW THE STICY DIV */}
    // </section>






//        return (
//     <section className=" relative custom-layout py-24 ">
//          <div ref={scrollTarget}>

//         <div className="sticky top-20 lg:top-28">  
//         <div className="flex justify-center">
//         <Tag>Introducing Layers</Tag>
//         </div>

//         <div className="text-4xl md:text-6xl lg:text-7xl 2xl:text-[80px] text-center font-medium mt-10">
//             <span>
//             Your creative process derseves better.
//             </span>
//             <span className="">
//             {/* {text} */}
//             {words?.map((val,index:number)=>(
//                 <span key={`${val}-${index}`}
//                 className={twMerge( "transition duration-500 text-white/15" ,index  < currentWord && 'text-white'  )}
//                 >{`${val}`}</span>
//             ))}
//             </span>
//             <span className="text-lime-400 block">
//             That&apos;s why we built Layers.
//             </span>
//         </div>
//         </div>

//         <div 

//         className="h-[150vh] bg-green-400 "
        
//         /> 
//          </div>
        
//     </section>
//     );
// }