// import { useState } from "react"
import { features } from "../constants"

const Features = () => {
    
  return (

    <>
      
    <div className=' max-w-[1640px] mx-auto p-4 py-12 ' >
      <h1 className="text-center" > <span className="font-normal   text-orange-600 " > Features </span>  </h1>
      <h1 className=" text-center pt-9 pb-8 text-3xl md:text-6xl " >Easily build  <span className=" text-3xl md:text-6xl bg-gradient-to-r from-orange-600 to-orange-800 bg-transparent bg-clip-text text-transparent " > your code </span></h1>
    </div>






    {/* Difficulties   ImpCodeeeeeeeeeeeeee  */}

    <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>






    </>
  )
}

export default Features
