import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png'
import home from '../../../public/assets/images/menu/home.svg'
import service from '../../../public/assets/images/menu/service.svg'
import about from '../../../public/assets/images/menu/about.svg'
import price from '../../../public/assets/images/menu/price.svg'
import blog from '../../../public/assets/images/menu/blog.svg'
import login from '../../../public/assets/images/menu/login.svg'
import signup from '../../../public/assets/images/menu/signup.svg'
import { useState } from "react";
import { useSelector } from 'react-redux';
import { getuserData } from '@/app/auth/store/LoginSlice';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { getSignupData } from '@/app/auth/store/SignUpSlice';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';


export default function Header() {
   const router = useRouter()
   const path = usePathname();
   const activeClass ="text-orange"
  const  userData = useSelector(getuserData)
  const  SignupData = useSelector(getSignupData)
  const cookie = Cookies.get("token");
  const userType = Cookies.get("type");
  const [isMenuOpen, menuOpen] = useState(false);
  const menuToggle = () => menuOpen(!isMenuOpen);
  const slideMenu = isMenuOpen ? 'transform-none' : '-translate-x-full';
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = (ele) => {
    console.log(ele)
   Cookies.remove("token");
   Cookies.remove("type");
   router.push("/")
  };

  return (
    <>
        <header>
          <div className='lg:max-w-xxxl md:max-w-xxxl mx-auto md:pl-7 pl-2 md:pr-7 pr-2'>
            <div className='flex justify-between items-center	flex-wrap pb-3 pt-3'>
              <div className='lg:w-24 md:w-24 w-24'>
                <Link href='/'>
                  <Image
                  alt="Logo"
                  src={logo}
                  />
                </Link>
              </div>

              <div className='lg:w-2/3 '>
                <div className='lg:hidden' onClick={menuToggle}>
                  {isMenuOpen ? 
                  (
                      <svg aria-hidden="true" width="35" height="35" className="ml-auto w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill="#f8a500"></path></svg>
                      ):(
                      <>
                      <span>
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 7H19" stroke="#f8a500" stroke-width="2" stroke-linecap="round"/>
                          <path d="M5 12H19" stroke="#f8a500" stroke-width="2" stroke-linecap="round"/>
                          <path d="M5 17H19" stroke="#f8a500" stroke-width="2" stroke-linecap="round"/>
                        </svg>   
                      </span>
                      </>
                  )}
                </div>
                
                  <div id="drawer-navigation" className={`fixed shadow-md top-0 left-0 z-40 w-72 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${slideMenu}`} aria-labelledby="drawer-navigation-label">
                      <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                      <div className="py-4 overflow-y-auto">
                        <ul className="space-y-2">
                          <li>
                            <Link href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                              <Image src={home} className='w-5' />
                              <span className="ml-3" onClick={menuToggle}>Home</span>
                            </Link>
                          </li>
                         
                          <li>
                            <Link href="/../main/services" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image src={service} className='w-5' />
                            <span className="flex-1 ml-3 whitespace-nowrap" onClick={menuToggle}>Our Services</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/../main/about" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Image src={about} className='w-5' />   
                                  <span className="flex-1 ml-3 whitespace-nowrap" onClick={menuToggle}>About</span>
                            </Link>
                          </li>
                          {userType === '3' || userType === '1'  ?
                          <li>
                          <Link href="/../main/pricing" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Image src={price} className='w-5' />   
                                <span className="flex-1 ml-3 whitespace-nowrap" onClick={menuToggle}>Pricing</span>
                                </Link>
                          </li>:null}
                          <li>
                            <Link href="/../main/blog" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Image src={blog} className='w-5' />  
                                <span className="ml-3" onClick={menuToggle}>Blog</span>
                            </Link>
                          </li>

                          {cookie && cookie != undefined ?
                    <div>
                      <div className='flex justify-start items-center'>
                        <Button
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          className='w-8 h-16 text-xl bg-black hover:bg-black text-white rounded-full p-0'
                        >
                       {userData?.user?.data?.user?.firstname.charAt(0) }
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                        {userType == "2" || userType == "3" ? null:
                        <Link href="/admin/dashboard"> <MenuItem>My account</MenuItem></Link>}
                        <MenuItem onClick={(ele)=>logoutHandler(ele)}>Logout</MenuItem>
                        </Menu>
                      </div>
                    </div>:
                    <div className='lg:w-auto w-full lg:mt-0 mt-5'>
                     
                        <Link href="/login" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                              <Image src={login} className='w-5' />
									            <span className="flex-1 ml-3 whitespace-nowrap">Log In</span>
								        </Link>
                        {/* { SignupData &&  SignupData.userSignUp && SignupData.userSignUp.success ?
                        null: */}
                        <Link href="/signup" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Image src={signup} className='w-5' />
                          <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                        </Link>
                        {/* } */}
                     
                    </div>}


                          
                         </ul>
                    </div>
                  </div>
                  <div className='lg:flex flex-wrap items-center justify-between hidden'>
                  <div className='lg:w-auto w-full'>
                      <ul className='flex items-center justify-between flex-wrap'>
                        <li className='font-poppins md:text-base	text-sm	font-semibold lg:px-3.5 py-2.5	px-5 lg:px-3 lg:w-auto w-full lg:border-0	 lg:border-transparent border-b border-slate-300'><Link href="/" className={`${path === "/" ? activeClass : "" } text-dark hover:text-yellow active:text-yellow ease-in duration-500 block`}>Home</Link></li>
                        <li className='font-poppins md:text-base	text-sm	font-semibold lg:px-3.5 py-2.5	px-5 lg:px-3 lg:w-auto w-full lg:border-0	 lg:border-transparent border-b border-slate-300'><Link href="/../main/services" className={`${path === "/main/services" ? activeClass : "" } text-dark hover:text-yellow ease-in duration-300 block`}>Our Services</Link></li>
                        <li className='font-poppins md:text-base	text-sm	font-semibold lg:px-3.5 py-2.5	px-5 lg:px-3 lg:w-auto w-full lg:border-0	 lg:border-transparent border-b border-slate-300'><Link href="/../main/about" className={`${path === "/main/about" ? activeClass : "" } text-dark hover:text-yellow ease-in duration-300 block`}>About</Link></li>
                        {userType === '3' || userType === '1'  ? <li className='font-poppins md:text-base	text-sm	font-semibold lg:px-3.5 py-2.5	px-5 lg:px-3 lg:w-auto w-full lg:border-0	 lg:border-transparent border-b border-slate-300'><Link href="/../main/pricing" className={`${path === "/main/pricing" ? activeClass : "" } text-dark hover:text-yellow ease-in duration-300 block`}>Pricing</Link></li> : null}
                        <li className='font-poppins md:text-base	text-sm	font-semibold lg:px-3.5 py-2.5	px-5 lg:px-3 lg:w-auto w-full lg:border-0	 lg:border-transparent border-b border-slate-300'><Link href="/../main/blog" className={`${path === "/main/blog" ? activeClass : "" } text-dark hover:text-yellow ease-in duration-300 block`}>Blog</Link></li>
                      </ul>
                    </div>
                    {cookie && cookie != undefined ?
                    <div>
                      <div className='flex justify-end items-center'>
                        <Button
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          className='w-8 h-16 text-xl bg-black hover:bg-black text-white rounded-full p-0'
                        >
                       {userData?.user?.data?.user?.firstname.charAt(0) }
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                          className='custom-dropdown'
                        >
                        {userType == "2" || userType == "3" ? null:
                        <Link href="/admin/dashboard"> <MenuItem>My account</MenuItem></Link>}
                        <MenuItem onClick={(ele)=>logoutHandler(ele)}>Logout</MenuItem>
                        </Menu>
                      </div>
                    </div>:
                    <div className='lg:w-auto w-full lg:mt-0 mt-5'>
                      <ul className='flex'>
                        <li className='group font-poppins text-sm	font-semibold border border-black	flex items-center rounded-lg ease-in duration-500 bg-white hover:bg-yellow hover:text-white hover:border-yellow mr-2.5'><Link href="/login" className='lg:px-7 md:py-3 py-2 md:px-5	px-3'>Login
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='inline-block ml-2'>
                        <path d="M14 7L12.7071 8.29289C12.3166 8.68342 12.3166 9.31658 12.7071 9.70711L14 11M13 9L21 9M5 17C2.79086 17 1 15.2091 1 13V5C1 2.79086 2.79086 1 5 1M5 17C7.20914 17 9 15.2091 9 13V5C9 2.79086 7.20914 1 5 1M5 17H13C15.2091 17 17 15.2091 17 13M5 1H13C15.2091 1 17 2.79086 17 5" stroke="black" stroke-width="1.5" stroke-linecap="round" className='group-hover:stroke-white ease-in duration-500 '/>
                        </svg>
                      
                        </Link></li>
                        <li className='group font-poppins text-sm	font-semibold border border-black	 flex items-center rounded-lg ease-in duration-500 bg-white hover:bg-yellow hover:text-white hover:border-yellow'><Link href="/signup" className='lg:px-7 md:py-3 py-2 md:px-5 px-3'>Sign Up 
                        <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='inline-block ml-2'>
                        <path d="M4 6.13193V5.61204C4 3.46614 4 2.3932 4.6896 1.79511C5.37919 1.19703 6.44136 1.34877 8.56569 1.65224L12.8485 2.26408C15.3047 2.61495 16.5327 2.79039 17.2664 3.63628C18 4.48217 18 5.72271 18 8.20377V13.7962C18 16.2773 18 17.5178 17.2664 18.3637C16.5327 19.2096 15.3047 19.385 12.8485 19.7359L8.56568 20.3478C6.44136 20.6512 5.37919 20.803 4.6896 20.2049C4 19.6068 4 18.5339 4 16.388V16.066" stroke="black" stroke-width="2" className='group-hover:stroke-white ease-in duration-500'/>
                        <path d="M13 11L13.7809 10.3753L14.2806 11L13.7809 11.6247L13 11ZM1 12C0.447715 12 0 11.5523 0 11C0 10.4477 0.447715 10 1 10V12ZM9.78087 5.3753L13.7809 10.3753L12.2191 11.6247L8.21913 6.6247L9.78087 5.3753ZM13.7809 11.6247L9.78087 16.6247L8.21913 15.3753L12.2191 10.3753L13.7809 11.6247ZM13 12H1V10H13V12Z" fill="black" className='group-hover:fill-white ease-in duration-500' />
                        </svg>  </Link></li>
                      </ul>
                    </div>}
                  </div>
              </div>
            </div>  
          </div>
        </header>

{/* <ToastContainer/> */}
    </>
  )
}
