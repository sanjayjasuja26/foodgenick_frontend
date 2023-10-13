import Link from "next/link";

export default function Footer() {
  return (
    <>
      
        <footer className='bg-black py-6 md:py-5'>
          <div className='lg:max-w-xxxl md:max-w-xxxl mx-auto  pb-3 pt-3'>
            <p className='font-montserrate text-white md:text-base text-sm text-center pl-4 pr-4'>Copyright © 2023-24 <Link href='/' className="hover:text-yellow ease-in duration-300">Foodgienic Innovations Pvt Ltd.</Link> | All Rights Reserved</p>
          </div>
        </footer>
    </>
  )
}
