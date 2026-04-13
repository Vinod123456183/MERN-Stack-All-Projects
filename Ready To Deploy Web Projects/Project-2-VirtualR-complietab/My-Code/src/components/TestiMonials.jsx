import {testimonials} from '../constants/index'

const TestiMonials = () => {
  return (
    <>

        <h1 className="p-1  text-center" > <span className="  bg-gradient-to-r from-orange-600 to-orange-800 text-2xl md:text-6xl bg-clip-text text-transparent" > What People Are Saying </span> </h1>
        
        <div className="flex flex-wrap mt-5 lg:mt-10">

            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 py-2">
                        <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                            <p>{testimonial.text}</p>
                            <div className="flex mt-8 items-start">
                                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonial.image} alt="Peoples"/>
                                <div>
                                    <h6>{testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">
                                        {testimonial.company}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default TestiMonials
