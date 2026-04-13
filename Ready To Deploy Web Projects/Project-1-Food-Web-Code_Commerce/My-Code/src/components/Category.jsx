// Dont use .js or after kuch error comes

import {categories} from '../Data/data'
const Category = () => {



    return (
    <div className=' max-w-[1640px] px-4 py-12 m-auto'>
        <h1 className='text-orange-500 font-bold text-center text-4xl '> Top Rated Menu Items </h1>

        {/* Rmrmmber 2 fir md 4  */}
        {/* Remember grid-cols */}

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 '>
                { categories.map((item , index)=>(
                    <div key = {index} className='border shadow-xl  bg-gray-100/90 flex justify-between items-center rounded-lg p-4'>
                        <h2 className='font-bold' >{item.name}</h2>
                        <img src={item.image} alt={item.name}
                            className='w-20'
                        />
                    </div>
                )) }
            </div>
    </div>
  )
}

export default Category
