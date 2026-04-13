import { FC } from "../constants/index"
import { MdOutlineKeyboardDoubleArrowRight  } from "react-icons/md";

const FoodCard = () => {
  return (

    <div className="p-4 gap-5 flex flex-col m-auto  md:flex-row max-w-[2560px] " >{
          FC.map((items , index)=>(
            
            <div className="  shadow-2xl gap-1 w-full  "  >
              <div className=" flex flex-col hover:transform hover:-translate-y-4  transition  duration-400 " >
                <img className="h-[150px] w-auto  opacity-110  p-2  object-cover  " src={items.img} alt={items.label} />
                <h1 className="absolute font-bold text-center text-2xl text-white p-4" > {items.label} </h1>
                <p className=" text-center pt-2 pb-1 font-semibold"> {items.text} </p>
                <h2 className="text-center font-light "> {items.shop} </h2>
                <div className="flex justify-end p-2 pr-5 " >
                  <MdOutlineKeyboardDoubleArrowRight size={19}  />
                </div>
              </div>
            </div>
          ))}
      </div>





        
  )
}

export default FoodCard
