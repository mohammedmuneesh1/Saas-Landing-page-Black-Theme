"use client"
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import {motion, useAnimate} from "framer-motion";
import Pointer from "@/components/Pointer";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";
export default function Hero() {

  const [leftDesignScope,leftDesignAnimate] = useAnimate();
  const [leftPointerScope,leftPointerAnimate] = useAnimate();
  const [rightDesignScope,rightDesignAnimate] = useAnimate();
  const [rightPointerScope,rightPointerAnimate] = useAnimate();








  //---------------------- ⚠️⚠️ NOTES START: ⚠️⚠️----------------------
// The syntax for useAnimate is:



// [
//   element,
//   keyframes,
//   options
// ]

// useEffect(() => {
//   leftDesignAnimate([
//     [
//       leftDesignScope.current,
//       {
//         opacity: [0, 1],
//         scale: [0.8, 1],
//       },
//       {
//         duration: 0.5,
//       },
//     ],
//   ]);
// }, []);

//---------------------- ⚠️⚠️ NOTES START: ⚠️⚠️----------------------



// useEffect(() => {

//   leftDesignAnimate([
//     [
//       leftDesignScope.current,
//       {
//         opacity: [0, 1],
//         x: [-100, 0],
//         y: [100, 0],
//       },
//       {
//         duration: 0.6,
//       },
//     ],
//   ]);
// }, []);



// },

//  []);


useEffect(()=>{

leftDesignAnimate([
    [
      leftDesignScope.current,
      {
        opacity: [0, 1],
        x: [-100, 0],
        y: [100, 0],
      },
      {
        duration: 0.6,
      },
    ],
  ]);

  leftPointerAnimate([
    [
      leftPointerScope.current,
      {
        opacity: [0, 1],
        x: [-200, 0],
        y: [-50,80,0]
      },
      {
        duration: 1,
        delay: 0.4, // Delay the animation by 0.4 seconds
        ease: [0.22, 1, 0.36, 1]
      },
    ],
  ]);

  rightDesignAnimate([
    [
      rightDesignScope.current,
      {
        opacity: [0, 1],
        x: [100, 0],
        y: [100, 0],
      },
      {
        duration: 1,
        delay:1,
        
      },
    ],
  ]);

  // rightPointerAnimate([
  //   [
  //     rightPointerScope.current,
  //     {
  //       opacity: [0, 1],
  //       x: [275, 0],
  //       y: [0,200,0]
  //     },
  //     {
  //       duration: 1,
  //       delay:1,
  //       // ease: [0.22, 1, 0.36, 1]
  //       ease:"easeIn"

  //     },
  //   ],
  // ]);

  rightPointerAnimate([
    [
      rightPointerScope.current,
      {opacity:1},
      {
        duration:0.5,
        delay:1.5
      },
    ],
    [
      rightPointerScope.current,
      {x:170, y:0},
      {duration:0.5}
    ],
    [
      rightPointerScope.current,
      {x:0, 
      y:[0,20,0]
      },
      {duration:0.5}
    ],
  ])

    // [
    //   rightPointerScope.current,
    //   {x:0,y:[0,20,0]},
    //   {duration:0.5,}
    // ]


},[]);
  






    return (
    <section
     className="custom-layout 
     py-24  relative"
     style={{
      cursor: `url(${cursorYouImage.src}) 0 0, auto`,
     }}
     >

{/*LEFT SIDE IMAGE  START  */}
      <motion.div
      ref={leftDesignScope}
      // initial={{opacity:0 , y:100,x:-100}} // when useEffect trigger, it will show opacity 1 
      initial={{opacity:0,}} // when useEffect trigger, it will show opacity 1
        drag
        dragSnapToOrigin
      className="  absolute -left-32 top-16 opacity-80 hidden md:block z-40">
        <Image
          src={designExample1Image}
          alt="Design example 1"
          className="max-w-[350px] 2xl:max-w-[500px] h-auto"
          draggable="false"
          priority
          />
      </motion.div>
 {/*LEFT SIDE IMAGE END */}
 <motion.div 
 ref={leftPointerScope}
 initial={{opacity:0}}
 className="absolute -left-50 top-16 hidden lg:block z-40" >
  <Pointer 
  name="Andrea"
  color="#2563EB"
  />
 </motion.div>

          
  <motion.div
   ref={rightDesignScope}
   initial={{opacity:0}}
   drag
   dragSnapToOrigin
   className="absolute -right-36 top-16 z-40
    opacity-80 hidden md:block"
   >
        <Image
          src={designExample2Image}
          alt="Design example 2"
          className="max-w-[350px] 2xl:max-w-[500px] h-auto"
          priority
          draggable={"false"}
        />
    </motion.div>

     <motion.div 
 ref={rightPointerScope}
       
 initial={{opacity:0}}
 className="absolute right-[300px] top-72 hidden lg:block z-40">
  <Pointer 
      name="Muneesh"
    color="#10B981"
  />
 </motion.div>




        <div className="flex flex-col gap-4 items-center max-w-full w-full  relative overflow-hidden">





  <div
  className="inline-flex items-center justify-center
  py-1 px-4 rounded-full font-light
  bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500
  text-white  shadow-lg shadow-purple-500/30"
>
  $7.5M Seed Round Raised
</div>
            <h1
             className="text-6xl md:text-7xl lg:text-8xl
              font-medium text-center mt-6"
             >Impactful design, <br /> created effortlessy</h1>
            <p className="text-center text-xl  text-white/50 mt-8 max-w-2xl ">
                Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitiave interface 
                 that keeps you in your creative flow.
            </p>
            <form
             className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg w-full  "
             >
           <input
            type="email"
             placeholder="Enter your email" 
             className="md:flex-1 bg-transparent px-4
              py-2 focus:outline-none placeholder:text-white/50 w-full"
             />
             <Button 
             type="submit"
             variant="primary"
             className="whitespace-nowrap"
             size="sm"
            >
            Sign Up
            </Button>
            </form>


        </div>

        
    </section>
    );
}
