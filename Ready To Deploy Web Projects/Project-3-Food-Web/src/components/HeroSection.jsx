import {HeroLogo} from '../constants/index'

import HomeImg from '../assets/img/home-image.png'
function HeroSection() {
  return (

    <div className="max-w-[2560px] bg-slate-500  p-4 top-0 m-auto  " >
    
        <div className='flex pt-8 flex-col md:flex-row  ' >

            {/* note md:w-1/2 */}
          <div className="flex flex-col  items-center justify-center md:w-1/2 " >
            <img src={HomeImg} className='   h-[380px] md:h-[500px] '  alt="" />
          </div>
          
        
            {/* note w-full md:w-1/2      in 2nd div */}

          <div className='p-4 pt-20 w-full md:w-1/2  ' >
            <h1 className=' text-white text-center font-bold text-3xl md:text-[40px] pb-1  ' > <span className='text-yellow-400'  > HAPPY </span> TUMMY WITH </h1>
            <h1 className='  text-white text-center pb-4 font-bold text-3xl md:text-[40px] ' >  TASTY <span className='text-yellow-500' > BURGERS </span>  </h1>  
            <p className='   text-center text-white text-[14px] '  >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
                . Quasi architecto distinctio alias nam cumque molestias quisquam quod ab inventore ipsum, sint
                 soluta nulla praesentium voluptatum officiis doloremque iste incidunt sequi?
            </p>


            <div className= 'pt-12 flex gap-5 items-center justify-center'>
                {HeroLogo.map((items, index) => (
                    <div key = {index} className=' flex justify-center flex-col items-center p-2' >
                        <p className='text-yellow-400'  > {items.img} </p>
                        <p className='text-white text-[14px] md:text-[18px] ' > {items.label}  </p>
                    </div>
                ))}
            </div>

                <div className=' pt-12 flex items-center justify-center ' >

                <button className='border via-orange-200 p-2 rounded-lg bg-yellow-400 px-5 text-black' >Learn More</button>
                </div>

          </div>



        
        </div>


    </div>
  )
}

export default HeroSection
