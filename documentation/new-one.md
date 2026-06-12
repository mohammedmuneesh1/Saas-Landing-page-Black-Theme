



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