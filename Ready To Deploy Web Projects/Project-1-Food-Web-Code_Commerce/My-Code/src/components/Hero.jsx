const Hero = () => {
  return (

    <div className='max-w-[1640px] mx-auto p-4'> 
    {/* Note To use Absolute and relative */}
    {/* note Dono me height , width , max-h same h */}

      <div className='max-h-[500px] relative' >
        <div className = 'absolute w-full h-full text-gray-200 max-h-[500px] bg-black/70 flex flex-col justify-center' >
          <h1 className = 'px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' >The <span className = 'text-orange-500'> Best </span> </h1>
          <h1 className = 'px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' >    <span className = 'text-orange-500'>Food </span> Delivered </h1>
        </div>
        {/* Here max-h for responsive */}
        <img className = 'max-h-[500px] w-full object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
      </div>

    </div>
  )
}

export default Hero
