export default function CallToAction() {
    return (
        <section className="py-24">

<div className="overflow-x-clip p-4 flex"> {/*this flex helped text to go take full width */}
    <div className="flex flex-none gap-16 text-7xl md:text-8xl  2xl:text-9xl font-medium">
    {
                Array.from({ length: 10 })?.map((_, i) => (  
                    <div key={i} className="flex items-center gap-12">
                        <span className="text-lime-400 text-7xl">&#10038;</span>
                        <span className="">Try it for free</span>
                    </div>
                ))
            }
    </div>


    </div>            
        </section>
);
}
