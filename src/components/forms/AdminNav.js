import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
const AdminNav = () => {

  const router = useRouter()
  return (
   <>
        <div className='sidebar xl:w-1/4 lg:w-2/5 md:w-1/2 min-h-sm sm:w-full w-full relative'> 
          <div className='md:fixed bg-white shadow-light mt-4 rounded-xl p-4 md:h-70 xl:w-350px md:w-30% lg:w-3/12 w-full h-screen	'>
            <ul>
              <li className='group font-montserrate text-sm font-semibold p-4 rounded-xl active:bg-blackLight hover:bg-blackLight text-darkgrey hover:text-white active:text-white'>
                <Link href='/admin/dashboard'  className='flex items-center text-16'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect className='group-hover:stroke-white'x="4" y="4" width="6" height="7" rx="1" stroke="#3B3B3B" stroke-width="2" stroke-linejoin="round"/>
                  <rect className='group-hover:stroke-white group-active:stroke-white' x="4" y="15" width="6" height="5" rx="1" stroke="#3B3B3B" stroke-width="2" stroke-linejoin="round"/>
                  <rect className='group-hover:stroke-white group-active:stroke-white'x="14" y="4" width="6" height="5" rx="1" stroke="#3B3B3B" stroke-width="2" stroke-linejoin="round"/>
                  <rect className='group-hover:stroke-white group-active:stroke-white'x="14" y="13" width="6" height="7" rx="1" stroke="#3B3B3B" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <span className='ml-2'> Dashboard</span>
                </Link>
              </li>
              <li className='group font-montserrate text-sm font-semibold p-4 rounded-xl active:bg-blackLight hover:bg-blackLight text-darkgrey hover:text-white active:text-white'>
                <Link href='/admin/pages'   className='flex items-center text-16'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='group-hover:stroke-white group-active:stroke-white' d="M16 8V8C16.93 8 17.395 8 17.7765 8.10222C18.8117 8.37962 19.6204 9.18827 19.8978 10.2235C20 10.605 20 11.07 20 12V18C20 19.1046 19.1046 20 18 20V20C16.8954 20 16 19.1046 16 18V7.2C16 6.07989 16 5.51984 15.782 5.09202C15.5903 4.71569 15.2843 4.40973 14.908 4.21799C14.4802 4 13.9201 4 12.8 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H18" stroke="#3B3B3B" stroke-width="2"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M12 8H8V12H12V8Z" stroke="#3B3B3B" stroke-width="2" stroke-linejoin="round"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M8 16H12" stroke="#3B3B3B" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <span className='ml-2'> Pages</span>
                </Link>
              </li>
              {/* <li className='group font-montserrate text-sm font-semibold  p-4 ro unded-xl active:bg-blackLight hover:bg-blackLight text-darkgrey hover:text-white active:text-white'>
                <Link href='/admin/services'  className='flex items-center text-16'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='group-hover:stroke-white group-active:stroke-white' d="M16 8V8C16.93 8 17.395 8 17.7765 8.10222C18.8117 8.37962 19.6204 9.18827 19.8978 10.2235C20 10.605 20 11.07 20 12V18C20 19.1046 19.1046 20 18 20V20C16.8954 20 16 19.1046 16 18V7.2C16 6.07989 16 5.51984 15.782 5.09202C15.5903 4.71569 15.2843 4.40973 14.908 4.21799C14.4802 4 13.9201 4 12.8 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H18" stroke="#3B3B3B" stroke-width="2"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M12 8H8V12H12V8Z" stroke="#3B3B3B" stroke-width="2" stroke-linejoin="round"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M8 16H12" stroke="#3B3B3B" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <span className='ml-2'>Services</span>
                </Link>
              </li> */}
              {/* <li className='group font-montserrate text-sm font-semibold  p-4 rounded-xl active:bg-blackLight hover:bg-blackLight text-darkgrey hover:text-white active:text-white'>
                <Link href='/admin/price'  className='flex items-center text-16'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='group-hover:stroke-white group-active:stroke-white' d="M16 8V8C16.93 8 17.395 8 17.7765 8.10222C18.8117 8.37962 19.6204 9.18827 19.8978 10.2235C20 10.605 20 11.07 20 12V18C20 19.1046 19.1046 20 18 20V20C16.8954 20 16 19.1046 16 18V7.2C16 6.07989 16 5.51984 15.782 5.09202C15.5903 4.71569 15.2843 4.40973 14.908 4.21799C14.4802 4 13.9201 4 12.8 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H18" stroke="#3B3B3B" stroke-width="2"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M12 8H8V12H12V8Z" stroke="#3B3B3B" stroke-width="2" stroke-linejoin="round"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M8 16H12" stroke="#3B3B3B" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <span className='ml-2'>Pricing</span>
                </Link>
              </li> */}
              {/* <li className='group font-montserrate text-sm font-semibold  p-4 rounded-xl active:bg-blackLight hover:bg-blackLight text-darkgrey hover:text-white active:text-white'>
                <Link href='/admin/users'  className='flex items-center text-16'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='group-hover:stroke-white group-active:stroke-white' d="M16 8V8C16.93 8 17.395 8 17.7765 8.10222C18.8117 8.37962 19.6204 9.18827 19.8978 10.2235C20 10.605 20 11.07 20 12V18C20 19.1046 19.1046 20 18 20V20C16.8954 20 16 19.1046 16 18V7.2C16 6.07989 16 5.51984 15.782 5.09202C15.5903 4.71569 15.2843 4.40973 14.908 4.21799C14.4802 4 13.9201 4 12.8 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H18" stroke="#3B3B3B" stroke-width="2"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M12 8H8V12H12V8Z" stroke="#3B3B3B" stroke-width="2" stroke-linejoin="round"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M8 16H12" stroke="#3B3B3B" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <span className='ml-2'>User</span>
                </Link>
              </li> */}
              {/* <li className='group font-montserrate text-sm font-semibold  p-4 rounded-xl active:bg-blackLight hover:bg-blackLight text-darkgrey hover:text-white active:text-white'>
                <Link href='#'  className='flex items-center text-16'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='group-hover:stroke-white group-active:stroke-white' d="M16 8V8C16.93 8 17.395 8 17.7765 8.10222C18.8117 8.37962 19.6204 9.18827 19.8978 10.2235C20 10.605 20 11.07 20 12V18C20 19.1046 19.1046 20 18 20V20C16.8954 20 16 19.1046 16 18V7.2C16 6.07989 16 5.51984 15.782 5.09202C15.5903 4.71569 15.2843 4.40973 14.908 4.21799C14.4802 4 13.9201 4 12.8 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H18" stroke="#3B3B3B" stroke-width="2"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M12 8H8V12H12V8Z" stroke="#3B3B3B" stroke-width="2" stroke-linejoin="round"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M8 16H12" stroke="#3B3B3B" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <span className='ml-2'>Settings</span>
                </Link>
              </li> */}
              <li className='group font-montserrate text-sm font-semibold  p-4 rounded-xl active:bg-blackLight hover:bg-blackLight text-darkgrey hover:text-white active:text-white'>
                <Link href='/admin/restaurants'  className='flex items-center text-16'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='group-hover:stroke-white group-active:stroke-white' d="M16 8V8C16.93 8 17.395 8 17.7765 8.10222C18.8117 8.37962 19.6204 9.18827 19.8978 10.2235C20 10.605 20 11.07 20 12V18C20 19.1046 19.1046 20 18 20V20C16.8954 20 16 19.1046 16 18V7.2C16 6.07989 16 5.51984 15.782 5.09202C15.5903 4.71569 15.2843 4.40973 14.908 4.21799C14.4802 4 13.9201 4 12.8 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H18" stroke="#3B3B3B" stroke-width="2"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M12 8H8V12H12V8Z" stroke="#3B3B3B" stroke-width="2" stroke-linejoin="round"/>
                    <path className='group-hover:stroke-white group-active:stroke-white'd="M8 16H12" stroke="#3B3B3B" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <span className='ml-2'>Restaurants</span>
                </Link>
              </li>
            </ul>
            <ul className='absolute bottom-3 w-11/12'>
              <li className='flex items-center justify-between bg-blackLight rounded-xl xl:p-3 lg:p-3 md:p-3 sm:p-2 p-2' onClick={()=>router.push("/")}>
                <div className='flex items-center xl:w-5/6 w-full'>
                  {/* <Image className="lg:w-12 md:w-10" src='../../assets/images/sidebar-footer-logo.png' alt=''/> */}
                  <div className='ml-3'>
                    <p className='text-white'>Foodgienic
                    <a className='block text-clight'>Foodgienic@gmail.com</a>
                    </p>
                  </div>
                </div>
                  <div className='group cursor-pointer xl:w-1/6 w-full text-right'>
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className='inline-block xl:w-8'>
                    <circle cx="20.5" cy="20.5" r="20" fill="#333333" stroke="white"/>
                    <path fillRule="evenodd" clip-rule="evenodd" d="M17.0625 14.4375C15.095 14.4375 13.5 16.0325 13.5 18V24C13.5 25.9675 15.095 27.5625 17.0625 27.5625H22.5C24.4675 27.5625 26.0625 25.9675 26.0625 24C26.0625 23.6893 25.8107 23.4375 25.5 23.4375C25.1893 23.4375 24.9375 23.6893 24.9375 24C24.9375 25.3462 23.8462 26.4375 22.5 26.4375H19.0981C19.6962 25.8003 20.0625 24.9429 20.0625 24V18C20.0625 17.0571 19.6962 16.1997 19.0981 15.5625H22.5C23.8462 15.5625 24.9375 16.6538 24.9375 18C24.9375 18.3107 25.1893 18.5625 25.5 18.5625C25.8107 18.5625 26.0625 18.3107 26.0625 18C26.0625 16.0325 24.4675 14.4375 22.5 14.4375H17.0625ZM26.3598 22.8977C26.1402 22.6781 26.1402 22.3219 26.3598 22.1023L26.8996 21.5625H22.3125C22.0018 21.5625 21.75 21.3107 21.75 21C21.75 20.6893 22.0018 20.4375 22.3125 20.4375H26.8996L26.3598 19.8977C26.1402 19.6781 26.1402 19.3219 26.3598 19.1023C26.5795 18.8826 26.9357 18.8826 27.1553 19.1023L28.125 20.0719C28.6376 20.5845 28.6376 21.4155 28.125 21.9281L27.1553 22.8977C26.9357 23.1174 26.5795 23.1174 26.3598 22.8977Z" fill="white"/>
                  </svg>
                  </div>
              </li>
            </ul>
          </div>
         
        </div>

           
</>
  )
}

export default AdminNav
