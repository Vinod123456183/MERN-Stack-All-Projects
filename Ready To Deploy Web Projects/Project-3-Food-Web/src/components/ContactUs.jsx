import { FaTelegramPlane } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="max-w-[2560px] m-auto " >

        <div className= " bg-yellow-400 p-16  px-5 flex flex-col md:flex-row justify-between items-center " >

            
            <div className="flex flex-col p-4 pb-4 "  > 
                <h1 className=" text-start text-black text-3xl pb-4  font-bold text-1xl md:text-5xl " > GET EXCLUSIVE UPDATE  </h1>    
                <p className="text-start text-white " > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, expedita? </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center " >
                <form className="items-center   pt-4 " action="">
                <input  type="email" placeholder="Enter your email" className="border  border-black  rounded-lg p-2 mb-4 items-center " required />
                </form>   
                    <button className="  flex gap-3 items-center border  border-black  justify-center rounded-lg m-4 px-5 py-2 bg-black/50  text-white hover:bg-yellow-400 hover:text-black hover:-translate-y-3 duration-500 " >
                    <FaTelegramPlane size={20} className="text-blue-600 justify-center items-center "  />Subscribe</button>
            </div>


        </div>
        
    </div>
  )
}

export default ContactUs
