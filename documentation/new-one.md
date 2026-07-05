



1) mask-image 

    <div
     className="flex gap-24 overflow-hidden mt-12 
     [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] "
     >
        {logos.map((logo) => (
        <Image
            key={logo.name}
            src={logo.image}
            alt={logo.name}
            className="h-12 w-auto"
        />
        ))}
    </div>

    to add side little black 



    2) flex-none

    Its purpose is to prevent a flex item from growing or shrinking. It keeps the element at its natural (or specified) size.


    flex-none in Tailwind means:

flex: none;
/* equivalent to */
flex-grow: 0;
flex-shrink: 0;




3) 
div className="overflow-hidden>

<div classname="sticky top-0 >  // here sticky zero dont work due to overflow-hidden on the parent

4) creating space on top with fixed navbar

<div className="pb-[86px] md:pb-[98px] >



4) framer motion x and y 

           -Y (up)
             ↑
             |
-X (left) ← (0,0) → +X (right)
             |
             ↓
           +Y (down)




5) y: [0, -160, 0]


Original
    ↓
160px Down
    ↑
Original


