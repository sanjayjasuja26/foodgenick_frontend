
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import restaurant from '../../../public/assets/images/restaurant.svg'
import user from '../../../public/assets/images/user.svg'
import dots3 from '../../../public/assets/images/dots3.png'
import leave1 from '../../../public/assets/images/leave1.svg'
import leave2 from '../../../public/assets/images/leave2.svg'
import UserSignup from '@/components/forms/userSignup';
import RestaurantSignup from '@/components/forms/restaurantSignup';



const Index = () => {
  const [isOpen, setOpen] = useState(false);
  const userToggleForm = () => setOpen(!isOpen);
  const RestaurantToggleForm = () => setOpen(false);
  const conditionRestaurant = isOpen ? 'before:hidden' : '';
  const conditionUser = isOpen ? '' : 'before:hidden';
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col">
      <h2 className="text-login font-poppins xl:text-6xl lg:text-5xl md:text-4xl font-bold text-dark lg:mb-20 md:mb-10 text-center z-10 relative lg:before:content-[attr(before)] before:absolute before:bg-signup xl:before:h-52 xl:before:w-96 lg:before:h-52 md:before:h-20 lg:before:w-56 md:before:w-56 before:w-64 before:h-12 md:before:w-72 before:bg-10% before:bg-no-repeat xl:before:-top-14 before:-top-4 lg:before:-top-6 md:before:-top-3 before:-left-2.5 before:right-0 before:left-0 before:mx-auto before:-z-10 text-4xl mb-8"><span className="text-yellow">Sign</span>up</h2>
      <section className='lg:pt-24 xl:pb-20	lg:pb-0 relative md:pt-16	pt-12	mb-12 md:mb-0'>
          <div className='lg:max-w-xxxl md:max-w-xxxl mx-auto md:pl-7 pl-2.5 md:pr-7 pr-2.5'>
            <div className='flex justify-center	flex-wrap'>
              <div className='mx-2.5 w-full mb-3.5 sm:mb-0 sm:w-auto'>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "linear",
                    stiffness: 560,
                    delay: 0,
                  }}
                >
                  <h4 onClick={userToggleForm} className={`lg:w-72 md:w-56 text-center lg:py-6	md:py-3.5	font-poppins lg:text-lg md:text-sm	text-dark hover:text-orange-300 font-semibold bg-white border border-black rounded-md	cursor-pointer relative before:content-[attr(before)] before:absolute before:border-t-15 before:border-x-10 before:border-t-black hover:border-orange-300 before:border-x-transparent	before:left-10	before:-bottom-4 	py-2.5 px-3.5 text-sm ${conditionUser}`}>Signup as User <Image alt="Sign Up"
                    src={user}
                    className='lg:w-6	inline-block ml-1 md:w-4	w-4'
                  />
                  </h4>
                </motion.div>
              </div>
              <div className='mx-2.5 w-full mb-3.5 sm:mb-0 sm:w-auto'>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "linear",
                    stiffness: 560,
                    delay: 0,
                  }}
                >
                  <h4 onClick={RestaurantToggleForm} className={`lg:w-72 md:w-56 text-center lg:py-6	md:py-3.5	font-poppins lg:text-lg md:text-sm	text-dark hover:text-orange-300 font-semibold bg-white border border-black rounded-md	cursor-pointer relative before:content-[attr(before)] before:absolute before:border-t-15 before:border-x-10 before:border-t-black	hover:border-orange-300 before:border-x-transparent	before:left-10 before:-bottom-4 py-2.5 px-3.5 text-sm ${conditionRestaurant}`}>Signup as Restaurant <Image alt="Restaurant"
                    src={restaurant}
                    className='lg:w-6	inline-block	ml-1 md:w-4 w-4'
                  />
                  </h4>
                </motion.div>
              </div>
            </div>
            <div className='py-7 xl:max-w-5xl xl:mx-auto bg-grey lg:p-8 rounded-lg	drop-shadow-sm border-t-2	border-black mt-4 md:py-9	relative z-10'>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "linear",
                  stiffness: 560,
                  delay: 0.5,
                }}
              >
                {isOpen ? (
                  <UserSignup />
                ) : (
                  <RestaurantSignup />
                )}
              </motion.div>
            </div>
            <div className='absolute lg:-top-20 left-1/4 md:top-10 -z-10 hidden md:block'>
              <Image alt="Dots"
                src={dots3}
              />
            </div>
          </div>
          <div className='lg:flex md:hidden	absolute left-0 right-0 items-center	justify-between	mx-auto	xl:max-w-xxl bottom-0 lg:max-w-none -z-10 hidden'>
            <div className=''>
              <Image
                alt="leave1"
                src={leave1}
              />
            </div>
            <div className=''>
              <Image
                alt="leave2"
                src={leave2}
              />
            </div>
          </div>
        </section>
    </div>
    </div>
  )
}

export default Index
