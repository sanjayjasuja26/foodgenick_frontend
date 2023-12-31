import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import aboutbanner from '/public/assets/images/aboutbanner.png'
import ourstory from '/public/assets/images/ourstory.png'
import bglogo from '/public/assets/images/bglogo.png'
import dots3 from '/public/assets/images/dots3.png'
import dots2 from '/public/assets/images/dots2.png'
import dot from '/public/assets/images/dots.png'
// import {AboutData} from '../../../common/PagesContent'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDynamicData, getaboutData } from '@/app/auth/store/Slices/DynamicContentSlice'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  const dispatch = useDispatch()
  const selecter = useSelector(getaboutData)
  console.log("selecterData",selecter)
  let AboutData = []
  AboutData.push(selecter)
  console.log("getAboutData>>>>>>>>>",AboutData)
  useEffect(()=>{
    getApi()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getApi=async()=>{
    const data = await dispatch(getAllDynamicData())
    console.log("getAboutData",data)
  }


  return (
    <>
      <Head>
        <title>About us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
      {AboutData && AboutData.length > 0 && AboutData.map((ele,index)=>{
        return (
          <div key={index}>

        <section className='md:bg-right md:bg-no-repeat 2xl:bg-700 xl:bg-680 lg:bg-590 md:bg-460 relative xl:py-32 lg:py-20 md:py-14 py-14' >
          <div className='lg:max-w-xxxl md:max-w-xxxl mx-auto  md:pl-7 pl-2	'>
            <div className='flex flex-wrap items-center	justify-between relative'>
              <div className='w-full lg:w-5/12	'>
                  <h1 className='font-montserrate xl:text-6xl font-bold text-dark lg:mb-6 md:mb-2 mb-2.5	md:text-4xl lg:text-5xl text-3xl relative lg:before:content-[attr(before)] before:absolute before:bg-aboutus before:bg-10%	before:bg-no-repeat	before:-z-10 xl:before:-top-6 lg:before:-top-6 md:before:-top-2 before:-top-1 lg:before:-left-2.5 md:before:left-0 xl:before:w-34r md:before:h-28 before:h-20 md:before:w-80 before:w-60'> {ele.about_First_Section.first_title}</h1>
                  <p className='font-montserrate lg:text-xl text-sm md:text-lg font-medium text-dark lg:leading-9 md:leading-8 leading-6 text-dark mb-6'>{ele.about_First_Section.first_descriptions} </p>
              </div>
              <div className='lg:w-7/12 md:full relative z-10 '>
                <Image
                  alt="Logo"
                  height={850}
                  width={850}
                  src={ele?.about_First_Section?.first_Img}
                />
              </div>
            </div>
          </div>

        </section>
        <section className='relative xl:pt-64	xl:pb-36 xl:py-20 md:pt-40 md:pb-20 md:pt-16 pt-28 pb-20 bg-aboutbg'>
          <div className='lg:max-w-xxxl md:max-w-xxxl mx-auto  pl-7	pr-7 '>
            
              <h2 className='font-montserrate xl:text-6xl lg:text-5xl md:text-4xl font-bold text-dark lg:mb-20 md:mb-10 text-center z-10 relative lg:before:content-[attr(before)] before:absolute before:bg-story-text xl:before:h-28 xl:before:w-5/12 md:before:h-28 before:h-12 lg:before:w-96 md:before:w-80		 before:w-72 before:bg-10%	before:bg-no-repeat xl:before:-top-6 before:-top-2 lg:before:-top-9 md:before:-top-5 before:-left-2.5 before:right-0 before:left-0	before:mx-auto before:-z-10 text-4xl mb-8'>{ele.about_Second_Section.Second_title}</h2>
              <div className='flex flex-wrap items-center	justify-between relative'>
                <div className='lg:w-5/12	md:w-5/12 relative z-10'>

                  <p className='font-montserrate lg:text-xl text-sm md:text-lg font-medium text-dark lg:leading-9 md:leading-8 leading-6 text-dark mb-6'>
                  {/* <strong>Foodgienic</strong>  */}
                  {ele.about_Second_Section.Second_descriptions}
                  </p>
                  <p className='font-montserrate lg:text-xl text-sm md:text-lg font-medium text-dark lg:leading-9 md:leading-8 leading-6 text-dark'><strong>{ele.about_Second_Section.Second_moreInfo}</strong></p>
                </div>
                <div className='lg:w-6/12 md:w-6/12 sm:w-3/5 sm:mx-auto bg-gradient-to-r from-black to-white p-1 rounded-b-full rounded-tl-full rounded-tr-180 md:mt-0	mt-8	relative z-10 '>
                  <div className='overflow-hidden rounded-b-full rounded-tl-full rounded-tr-180 relative test'>
                    <Image
                      alt="Our Story"
                      height={470}
                      width={699}
                      src={ele?.about_Second_Section?.Second_Img}
                      className='object-cover h-full w-full'
                    />
                  </div>
                </div>
                <div className='absolute top-0 left-0 right-0 '>
                  <Image
                    alt="Logo"
                    src={bglogo}
                    className='mx-auto'
                  />
                </div>
              </div>
            
          </div>
          <div className='absolute left-0	xl:-top-28 md:-top-20 -left-1.5	hidden md:block'>
            <Image
              alt="Dots"
              src={dots2}
              className='md:w-3/5 xl:w-full md:mr-auto md:w-10/12 xl:m-0'
            />
          </div>
        </section>
        <section className='relative xl:pb-36 md:pb-20 xl:pt-36 md:pt-20 pt-28 pb-20'>
          <div className='lg:max-w-xxxl md:max-w-xxxl mx-auto  pl-7	pr-7 '>
            
              <h2 className='font-montserrate xl:text-6xl lg:text-5xl md:text-4xl font-bold text-dark lg:mb-20 md:mb-10 text-center z-10 relative lg:before:content-[attr(before)] before:absolute before:bg-our-story xl:before:h-28 xl:before:w-5/12 md:before:h-28 before:h-12 lg:before:w-96 md:before:w-80 before:w-72 before:bg-10%	before:bg-no-repeat xl:before:-top-9 before:-top-4 lg:before:-top-9 md:before:-top-5 before:-left-2.5 before:right-0 before:left-0	before:mx-auto before:-z-10 text-4xl mb-8'>{ele.about_Third_Section.Third_title}
              </h2>
              <div className='flex flex-wrap items-center	justify-between relative'>
                <div className='w-full relative z-10'>
                {ele && ele.about_Third_Section && ele.about_Third_Section.Third_descriptions_section.map((element,index)=>{
                  return(
                    <div key={index}>

                  <p className='font-montserrate lg:text-xl text-sm md:text-lg font-medium text-dark lg:leading-9 md:leading-8 leading-6 text-dark mb-6 text-center'>
                   {element.descriptions}
                  </p>
                    </div>
                  )
                })}
              
                </div>
              </div>
            
          </div>
          <div className='absolute right-0 -top-52 hidden md:block'>
            <Image
              alt="Dots"
              src={dot}
              className='md:w-3/5 xl:w-full md:mr-auto md:w-10/12 xl:m-0'
            />
          </div>
        </section>    

          </div>
        )
      })}



      </main>
    </>
  )
}
