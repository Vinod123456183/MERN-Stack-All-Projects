import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className=" pt-10 z-10 pb-7 p-4 m-auto  " >
        <h1 className=" pt-7 text-3xl md:text-6xl text-center" >VirtualR build tools <span className="text-orange-500" > for </span> </h1>
        {/* Note For Text Gradient */}
        <h1 className="text-center text-3xl md:text-6xl " > <span className=" bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent" > developer </span> </h1>
        <p className=" text-[10px] pt-3 p-4 md:text-[16px] text-center " >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non illo molestiae quae quam odit nam vitae, ad laborum accusantium culpa?</p>
        
        
        <div class=" pt-2  flex flex-col w-auto md:flex-row md:justify-center md:col-span-2 text-white font-semibold  ">

            <div className=" flex items-center justify-between flex-col text-sm font-normal p-1  md:flex-row gap-4 " >
              <button class=" md:w-auto rounded-md bg-gradient-to-r from-orange-500 to-orange-800  px-2 py-1 text-[12px] md:px-2 md:py-4 md:text-[15px] ">Sign for free</button>
              <button class=" md:w-auto rounded-md border border-white px-2 py-1 text-[12px] md:px-2 md:py-4 md:text-[15px] ">Documentation</button>
            </div>  
        
        </div>



      {/* to center divs beech me  */}

        <div className=" flex mt-5 justify-center z-10 top-0 m-auto max-w-[1640px] " >

          <div className="flex flex-col md:flex-row p-1  m-auto  " >
 
            <video
            autoPlay loop muted src={video1} className="rounded-lg  overflow-hidden justify-center items-center md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-1 my-4  " 
            type="video/mp4"
            > Your browser does not support the video tag.
            </video>
            
            <video
            autoPlay loop muted src={video2} className="rounded-lg  overflow-hidden justify-center items-center md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-1 my-4  " 
           type="video/mp4" >
            Your browser does not support the video tag.
            </video>

          </div>
        </div>

    </div>
  )
}

export default Hero
