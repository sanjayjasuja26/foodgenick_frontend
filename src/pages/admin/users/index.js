import React, { useState } from 'react'
export default function Users() {
  const [isOpen, setOpen] = useState(false);
  const hideSidebar = isOpen ? ' xl:w-3/2 lg:w-3/4 md:w-3/5' : ' xl:w-full lg:w-full md:w-full';

const cardData=[
  {
    "id": "User 1",
    "dis": "Lorem ipsum dolor",
  },
  {
    "id": "User 2",
    "dis": "Lorem ipsum dolor",
  },
  {
    "id": "User 3",
    "dis": "Lorem ipsum dolor",
  },
  {
    "id": "User 3",
    "dis": "Lorem ipsum dolor",
  },
  
]
  return (
    <>
    
            <div className={`content-area bg-white shadow-light mt-4 rounded-xl p-8 ${hideSidebar}`}>
              <div className='title-section mb-5'>
                <h3 className='text-2xl  font-bold'>Users</h3>
              </div>
                {cardData && cardData.map((ele,index)=>{
                  return(
                    <div key={index} className='card1 border w-full mb-5 rounded-lg p-7 flex xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap items-center xl:justify-between  lg:justify-between md:justify-between md:flex md:text-start sm:justify-between justify-center sm:flex sm:text-left grid text-center'>
                    <div className='left xl:mb-0 lg:mb-4 lg:order-1 md:order-1 sm:order-1 order-2	lg:w-5/6 md:w-5/6 sm:w-4/5 w-full flex items-center'>
                    <span className='border h-20 w-20 border-gray-700 inline-block rounded-full group-hover:border-inherit'></span>
                    <div className="ml-4">
                      <h5 className='text-2xl font-bold tracking-normal mb-0'>{ele.id}</h5>
                      <h3 className='text-18 md:text-18 sm:text-16 font-medium tracking-normal'>{ele.dis}</h3>
                    </div>
                    </div>
                    <div className='right lg:order-2 md:order-2 sm:order-2 order-1 lg:w-1/6 md:w-1/6 sm:w-1/5 w-full flex justify-end'>
                    <button className="flex justify-center items-center text-sm font-semibold border border-black rounded-full ease-in duration-500 bg-blackLight text-white	p-2 hover:bg-yellow hover:text-white hover:border-yellow w-24"> <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_308_693)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.63526 3.28563L12.7172 6.37214L3.96469 15.144C3.84913 15.2598 3.6924 15.3249 3.52898 15.325L0.842487 15.5C0.672332 15.5001 0.499993 15.3275 0.5 15.157L0.702237 12.4941C0.702244 12.3304 0.76717 12.1733 0.882732 12.0575L9.63526 3.28563Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6644 2.25695L12.2053 0.713154C12.489 0.428949 12.9489 0.428949 13.2326 0.713154L15.2872 2.77155C15.5709 3.05575 15.5709 3.51654 15.2872 3.80075L13.7463 5.34454L10.6644 2.25695Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_308_693">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>Edit
                      </button>
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Button</button> */}
                    </div>
                  </div>
                  )
                })}
            </div>

    </>
  )
}


Users.getLayout = function getLayout(page) {
  return (
    <>
     {page}
    </>
  )
}