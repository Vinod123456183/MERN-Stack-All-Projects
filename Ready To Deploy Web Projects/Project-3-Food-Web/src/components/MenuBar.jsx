import { MenuType, PRICE , MenuItems } from '../constants';

function MenuBar() {
  return (


    <div className="max-w-[2560px] m-auto">
      <div className="m-auto p-4 pl-3">
        <h1 className="font-bold text-[20px] md:text-[28px] text-center pt-3 m-auto pb-4">
          OUR BEST MENU
        </h1>
        <p className="p-1 m-auto text-center md:text-[18px]">
          Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum
          dolor sit deserunt commodi fugit aspernatur natus iste?
        </p>
        <p className="pt-3 pb-5 p-1 m-auto text-center md:text-[18px]">
          Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum
          dolor sit deserunt commodi fugit aspernatur natus iste?
        </p>

        <div className="flex flex-col md:flex-row md:justify-between gap-6 pt-4 p-2 items-center">
          <div className="flex justify-center gap-3 auto md:gap-[30px] sm:flex-row auto items-center flex-col">
            {MenuType.map((items, idx) => (
              <div className="items-center mr-3 p-1 border-[2px] border-black px-3 rounded-lg hover:bg-yellow-200 hover:-translate-y-1 hover:pl-4 duration-400">
                {items.name}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 auto md:gap-[30px] sm:flex-row auto items-center flex-col">
            {PRICE.map((items, idx) => (
              <div className="items-center mr-3 p-1 border-black border-[2px] px-3 rounded-lg hover:bg-yellow-200 hover:-translate-y-1 hover:pr-4 duration-400">
                {items.name}
              </div>
            ))}
          </div>
        </div>
      </div>





        {/* Menu Items */}

        <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4   p-5  items-center gap-8 '>
        {MenuItems.map((items, index) => (
          <div className=' p-4 shadow-2xl hover:-translate-y-3 bg-gray-200/20 duration-300 object-cover flex flex-col items-center rounded-2xl'>
            <img className=' opacity-90 h-[170px] p-2 rounded-xl  ' src={items.img} alt={items.name}  />
            <h1 className='items-center p-1 ' ><span className='text-[14px] text-black font-bold md:text-[17px] lg:text-[22px] ' >{items.name}</span></h1>
            <h1 className='items-center p-1' ><p>{items.about}</p></h1>
            <p className=' text-orange-500 pt-2 ' >{items.cost}</p>
          </div>
        ))}
      </div>









    </div>


  );
}

export default MenuBar;