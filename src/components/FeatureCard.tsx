import React from 'react'

const FeatureCard = (props:{
    title:string;
    description:string;
    children?:React.ReactNode;
    className?:string;
}) => {
    const {title,description,children,className} = props
  return (
       <div className={`bg-neutral-900 border border-white/10 p-6 
        rounded-3xl max-w-full  w-full 
        ${className}
       `}>
            <div
            //  className="aspect-video"
             className=""
            >
                {children}
            </div>
            <div className="sm:text-center text-left">
                <h3 className="text-3xl font-medium mt-6 sm:mt-10 ">{title}</h3>
                <p className="text-white/50 mt-2">{description}</p>
            </div>
    </div>
  )
}

export default FeatureCard