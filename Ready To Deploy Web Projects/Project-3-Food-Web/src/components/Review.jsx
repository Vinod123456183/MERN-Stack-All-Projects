import React from 'react';
import { ReviewSection } from '../constants/index';

export function Review() {
  return (
    <div className="max-w-[2560px] m-auto p-4">
      
      <h1 className='text-yellow-300 text-center   text-[26px] md:text-4xl font-serif font-bold ' > <span> CUSTOMER REVIEW </span> </h1>
      <p className='text-center text-[12px] md:text-[14px] ' > 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum modi doloremque voluptatem nulla, dolor temporibus provident veritatis magni expedita dolore quisquam, aliquam consectetur? Error fuga ullam perspiciatis voluptates delectus.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-3 px-5 p-4 gap-4  ">
        {ReviewSection.map((items, index) => (
          <div key={index} className="bg-card p-5 rounded-lg bg-gray-200/60 hover:-translate-y-4 duration-500 shadow-2xl text-foreground">
            <p className="text-muted text-center "> {items.about} </p>
            <div className="flex items-center mt-4  ">
              <img className="w-10 h-10 rounded-full" src="https://placehold.co/40x40" alt="John Doe" />
              <div className="ml-3">
                <h4 className="font-semibold text-center "> {items.name} </h4>
                <p className="text-muted-foreground text-center "> {items.job} </p>
              </div>
              <span className="text-accent ml-auto text-right md:text-6xl text-orange-400 text-3xl ">"</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
 