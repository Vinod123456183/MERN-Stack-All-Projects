import {checklistItems} from '../constants/index'
// image import krte wqt {}mhi aega sirf index k item k liye aata h

import code from '../assets/code.jpg'

import{CheckCircle , CheckCircle2 } from 'lucide-react'

const WorkFlow = () => {
  return (

    <>
      
        <h1 className=" text-2xl md:text-5xl text-center" > Accelerate your <span className=" bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent" > coding workflow </span> </h1>
        
        
        <div className="pt-10 z-10 pb-7 p-4 m-auto " >

          
          
          <div className="flex flex-wrap justify-center">
            
            
            
            
            <div className="p-2 w-full lg:w-1/2">
              <img src={code} alt="Coding" />
            </div>
            


            
            <div className="pt-12 w-full lg:w-1/2">
              
              {checklistItems.map((item, index) => (
                
                <div key={index} className="flex mb-12">
                  
                
                  <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                     <CheckCircle2 /> 
                  </div>

                
                  <div>
                    <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                    <p className="text-md text-neutral-500">{item.description}</p>
                  </div>


                </div>
                
              ))}

            </div>


          </div>


        </div>
    </>

  )
}

export default WorkFlow
