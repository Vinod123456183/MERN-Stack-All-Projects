import {useState} from 'react'
import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'



// State Hook For Feature

const Navbar = () => {
// First Is Value And Second Is Function default value is false
    const [nav , setNav] = useState(false)

    
    return (

    <>
    {/* isme max wodth 1640 di h usse upar nahi aaegi width 
        flex property , flex , auto property , space between , items center
    */}
        <div className='max-w-[1640px] mx-auto flex  justify-between items-center p-4'>

            {/* LeftSide  */}
            <div className=' flex items-center'>

            {/* Onclick function */}
                <div onClick={()=>setNav(!nav)} className=' cursor-pointer' >
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text:4xl px-2'> Best <span className='font-semibold'> Eats </span> </h1>
                <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-2 text-[16px]'>
                    <p className = 'bg-black rounded-full p-2 text-white'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>


            {/* Search Input */}
            <div className='bg-gray-200 rounded-full flex w-[200px] items-center px-2 sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25}/>
                <input className='bg-transparent  p-2 focus:outline-none w-full' type="text" placeholder='Search Food' />
            </div>




            {/* Cart Button */}
            <div className=''>
                <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                    <BsFillCartFill size={20} className='mr-2'/>
                    Cart
                </button>
            </div>




            {/* Mobile Menu */}


        {/* USe State Hook Ternary Operator */}

            {/* Overlay */}


            {nav ? <div className='bg-black/90 fixed w-full h-screen z-10 top-0 left-0'> </div> : ''}
 
                {/* Side Drawer */}
                {/* If Nav is True */}
                {/* Dono me Ek Hi Chiz Paste Kri h Bs left-[-100%] if not */}
                <div className={nav  ? 'fixed top-0 left-0  w-[300px] h-screen bg-white z-10 duration-300 '   :   'fixed top-0 left-[-100%]  w-[300px] h-screen bg-white/90 z-10 duration-500 '}>
                    <AiOutlineClose
                    // Dobara Jb Press krenge tb
                    onClick={()=>setNav(!nav)}
                    size={30} className = 'absolute right-4 top-4 cursor-pointer'/>

                    <h2 className='text-2xl p-4'>Best <span className='font-bold '>Eats </span> </h2>
                    <nav>
                        <ul className='flex flex-col p-4 text-gray-400'>
                            <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                            <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                            <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                            <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                            <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                            <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                            <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                        </ul>
                    </nav>
                </div>
            

        </div>
    </>
  )
}

export default Navbar
