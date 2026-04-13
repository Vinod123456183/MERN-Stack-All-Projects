import React , {useState} from 'react'
import { data } from '../Data/data';

const Food = () => {

    // By default We Passing Data
    const [food , setFood] = useState(data);

    // Filtering Different Types by Pizza , Burger , etc
    // Watch on normal function and map me how Arrow function is working 

    const filterTypes = (category) => {
        setFood(
            data.filter((item)=>{
                    return item.category === category
                }
            )
        )
    }


    // Const Filter By Price
    const filterPrice = (price) =>{
        setFood(
            data.filter((item)=>{
                return item.price === price
            }) 
        )
    } 

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>

        <h1 className='font-bold text-orange-600 text-3xl lg:text-3px p-4 text-center '> Top Rated Menu Items </h1>
      
        <div className='p-4 flex flex-col lg:flex-row justify-between'>
            
            <div>
                <p className='font-bold text-gray-700'>Filter Types</p>
                {/* wrap se Responsive  , button k beech gap property nahi aati instead use margin*/}
                    <div className=' flex flex-wrap justify-between '>
                        <button onClick={()=>setFood(data)} className='m-1 border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white ' >All</button>
                        <button onClick={()=>filterTypes('burger')} className='m-1 border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white ' >Burger</button>
                        <button onClick={()=>filterTypes('pizza')} className='m-1 border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white ' >Pizza</button>
                        <button onClick={()=>filterTypes('salad')} className='m-1 border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white ' >Salad</button>
                        <button onClick={()=>filterTypes('chicken')} className='m-1 border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white ' >Chicken</button>
                    </div>
            </div>




            {/* Filter Price */}
            <div >
                <p className='text-gray-700 font-bold' >Filter Price</p>
                <di className = 'flex flex-wrap justify-between 'v>
                    <button onClick={()=>filterPrice('$')} className='m-1 border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white' >$</button>
                    <button onClick={()=>filterPrice('$$')} className='m-1 border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white' >$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='m-1 border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white' >$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className='m-1 border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white' >$$$$</button>
                </di>
            </div>

        </div>


    {/* Agar Card Banana H to outer ,  Div k andar img , img k andar div , andar p */}

            {/* Mappping Values  */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-5' > 

            {food.map((item,index)=>(
                <div key={index} className='border shadow-xl rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between  px-2 py-4'>
                        <p className='font-bold' >{item.name}</p>
                        <p> <span className='bg-orange-500 text-white rounded-full p-1 ' > {item.price} </span> </p>
                    </div>
                </div>
            ))}
        </div>



    </div>
  )
}

export default Food
