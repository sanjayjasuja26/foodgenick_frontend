import React from 'react'
import Image from "next/image";
import { useState, useEffect } from "react";
import AddRestaurant from "../forms/AddRestaurant";
import logo from '../../../public/assets/images/logo.png'
import togglebar from '../../../public/assets/images/togglebar.png'
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
export default function AdminHead(_props) {
const dispatch = useDispatch()
const router = useRouter()
  const [isOpen, setOpen] = useState(false);
  const userToggleForm = () => setOpen(!isOpen);
  const hideSidebar = isOpen ? ' xl:w-3/2 lg:w-3/4 md:w-3/5' : ' xl:w-full lg:w-full md:w-full';
  const logoutHandler = (ele) => {
    console.log(ele)
   Cookies.remove("token");
   Cookies.remove("type");
   router.push("/")

  };
 
  return (
    <>
      <div className="mx-auto header flex justify-between items-center flex-wrap rounded-xl	shadow-light p-3 bg-white sticky top-0 z-10">
        <div className="flex justify-between items-center flex-wrap flex-shrink-0 xl:w-1/5 lg:w-1/ md:w-1/3 sm:w-full w-full left-div  w-1/4">
          <div className="flex-shrink-0" onClick={()=>router.push("/")}>
            <Image alt="" className="lg:w-16 md:w-16" src={logo}></Image>
          </div>
          <div className='icon-div cursor-pointer' onClick={()=>{_props.setIsOpen(!_props.isOpen)}}>
            <Image alt="" src={togglebar} ></Image>
           
          </div>
        </div>
        <div className="flex justify-end items-center flex-wrap lg:w-1/2 md:w-1/2 sm:w-full w-full left-div">
          <div className=" flex justify-center items-center flex-wrap">
            <span className='border rounded-full border-neutral-900	h-11 w-11 flex items-center justify-center mr-3 cursor-pointer'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 8.25C13.5 11.1495 11.1495 13.5 8.25 13.5C5.35051 13.5 3 11.1495 3 8.25C3 5.35051 5.35051 3 8.25 3C11.1495 3 13.5 5.35051 13.5 8.25Z" fill="black" />
                <path d="M15 15L13.5 13.5" stroke="black" stroke-width="2" stroke-linecap="round" />
              </svg>
            </span>
            <span className='border rounded-full border-neutral-900	h-11 w-11 flex items-center justify-center mr-3 cursor-pointer'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd" d="M5.82227 1.71634C6.11699 1.6181 6.43555 1.77737 6.53379 2.07209C6.63203 2.36681 6.47275 2.68536 6.17803 2.7836L6.06257 2.82209C4.88681 3.21401 3.96419 4.13663 3.57227 5.31239L3.53379 5.42785C3.43555 5.72257 3.11699 5.88184 2.82227 5.7836C2.52756 5.68536 2.36828 5.36681 2.46652 5.07209L2.50501 4.95663C3.0089 3.44494 4.19512 2.25872 5.70681 1.75482L5.82227 1.71634ZM12.178 1.71634C11.8833 1.6181 11.5647 1.77737 11.4665 2.07209C11.3682 2.36681 11.5275 2.68536 11.8222 2.7836L11.9377 2.82209C13.1134 3.21401 14.0361 4.13663 14.428 5.31239L14.4665 5.42785C14.5647 5.72257 14.8833 5.88184 15.178 5.7836C15.4727 5.68536 15.632 5.36681 15.5337 5.07209L15.4952 4.95663C14.9913 3.44494 13.8051 2.25872 12.2934 1.75482L12.178 1.71634ZM9.00012 3C6.57833 3 4.54049 4.86814 4.25985 7.34553L4.00119 9.62887C3.93692 10.1962 3.70697 10.7302 3.34174 11.16C2.56669 12.0723 3.19573 13.5 4.37272 13.5H13.6275C14.8045 13.5 15.4336 12.0723 14.6585 11.16C14.2933 10.7302 14.0633 10.1962 13.9991 9.62887L13.7404 7.34553C13.4598 4.86814 11.4219 3 9.00012 3ZM9.00012 16.5C10.0175 16.5 10.8862 15.8994 11.2292 15.0536C11.2435 15.0184 11.2501 14.9805 11.2501 14.9425C11.2501 14.7671 11.108 14.625 10.9327 14.625H7.06759C6.89226 14.625 6.75012 14.7671 6.75012 14.9425C6.75012 14.9805 6.75674 15.0184 6.77104 15.0536C7.11407 15.8994 7.98272 16.5 9.00012 16.5Z" fill="black" />
              </svg>

            </span>
          </div>
          <div className='icon-div'>
            <button  onClick={(ele)=>logoutHandler(ele)} className='flex justify-center items-center text-sm font-semibold border border-black rounded-full ease-in duration-500 bg-blackLight text-white	p-2	w-32 hover:bg-yellow hover:text-white hover:border-yellow'>
             Logout
            </button>
          </div>
        </div>
      </div>
    </>

    
  )
  
}







