import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
export default function Hero() {
    return (
    <section
     className="custom-layout 
     py-24  relative"
     >


        
      <div className="  absolute -left-32 top-16 opacity-80 hidden md:block">
        <Image
          src={designExample1Image}
          alt="Design example 1"
          className="max-w-[350px] 2xl:max-w-[500px] h-auto"
          priority
        />
      </div>
  <div
   className="absolute -right-36 top-16
    opacity-80 hidden md:block"
   >
        <Image
          src={designExample2Image}
          alt="Design example 2"
          className="max-w-[350px] 2xl:max-w-[500px] h-auto"
          priority
        />
    </div>



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
