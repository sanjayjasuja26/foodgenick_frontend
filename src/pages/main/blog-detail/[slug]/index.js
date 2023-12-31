import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getSingleBlogFunc } from '@/app/auth/store/Slices/BlogSlice';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';
import user from '../../../../../public/assets/images/user.png'
import thumbimg from '../../../../../public/assets/images/aboutbanner.png'
import moment from "moment/moment";

const BlogDetaisl = () => {
   const [blogData,setBlogData]= useState(null)
    const dispatch = useDispatch()
  const router = useRouter();
const {slug} = router.query;

useEffect(()=>{
  if(slug){
    getData()
  }
},[slug])

 const getData= async()=>{
  const singleblogData = await dispatch(getSingleBlogFunc(Number(slug)))
  if(singleblogData &&  singleblogData.payload  && singleblogData.payload.success){
    setBlogData(singleblogData.payload.data)
  }
 }
  
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        {blogData && blogData.length > 0 && blogData.map((ele, index)=>{
          return (
            <div key={index}>
              <section className="md:bg-right  md:bg-no-repeat 2xl:bg-700 xl:bg-680 lg:bg-590 md:bg-460 relative xl:pb-48 xl:pt-24 md:py-28	py-14 services-image bg-about-banner">
                <div className="lg:max-w-xxxl md:max-w-xxxl mx-auto md:pl-7 pl-2 md:pr-7 pr-2">
                  <div className="flex flex-wrap items-center	justify-between relative">
                    <div className="md:w-6/12">
                      <h3 className="bg-grey3 text-lightgrey text-base inline-block rounded-lg font-semibold px-3 py-1.5">
                        Foodgienic
                      </h3>
                      <h1 className="text-32 leading-52 text-dark font-bold font-montserrate py-5 ">
                        {ele?.title}
                      </h1>
                      <div className="flex items-center">
                        <div className="flex items-center	mr-5">
                          <Image
                            src={user}
                            alt="user"
                            className="rounded-full h-9	w-9	object-cover mr-2"
                          />
                          <h4 className="text-grey4 text-base	font-medium	">
                            Tracey Wilson
                          </h4>
                        </div>
                        <p className="text-sm text-grey4 font-montserrate">
                          {" "}
                          {moment(ele?.updatedAt).format("DD-MM-YYYY")}
                        </p>
                      </div>
                    </div>
                    <div className="lg:w-7/12 md:w-7/12 relative z-10 md:hidden lg:-mr-3.5	-mr-2"></div>
                  </div>
                </div>
              </section>
              <section className="relative 2xl:pt-64 2xl:pb-36 xl:pt-44 xl:pb-36 md:pt-40 md:pb-20 md:pt-16 pt-28 pb-20 bg-aboutbg bg-contain bg-no-repeat bg-repeat">
                <div className="lg:max-w-xxxl md:max-w-xxxl mx-auto md:pl-7 pl-2 md:pr-7 pr-2">
                  <div className="flex flex-wrap justify-between">
                    <div className="md:w-72% w-full">
                      <div className="mb-6">
                        <Image
                          alt="Logo"
                          height={900}
                          width={900}
                          src={ele?.image}
                          className="md:h-466 w-full object-cover rounded-xl h-96	"
                        />
                      </div>
                      <div className='font-montserrate font-medium text-dark text-base leading-6 text-sm  mb-0.5 mt-3 single-blog'
                        dangerouslySetInnerHTML={{ __html: ele?.description }}
                      />
                      {/* <p className="font-montserrate text-sm md:text-base font-medium text-dark lg:leading-9 md:leading-8 leading-6 text-dark mb-6">
                        {ele?.description}
                      </p> */}
                    </div>
                    <div className='md:w-24% w-full'>
                      <div className='rounded-lg overflow-hidden bg-white	shadow-2'>
                        <div className='bg-black p-3'>
                          <h3 className='text-white	font-montserrate font-medium text-xl'>Latest Posts</h3>
                        </div>
                        <div className='p-2.5'>
                          <div className='flex flex-wrap justify-between items-center border-grey-light border rounded-md p-1.5 mb-2'>
                            <div className='h-72px w-72px rounded-lg overflow-hidden	'>
                              <Image src={thumbimg} alt="latest post" className='w-full h-full object-cover rounded-lg'/>
                            </div>
                            <div className='w-[calc(100%-84px)]'>
                              <h3 class="bg-grey3 text-lightgrey text-xs inline-block rounded-lg font-semibold px-2.5 py-1">Foodgienic</h3>
                              <h4 className='text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap lg:w-56 xl:w-44 md:w-36 w-48 pt-1'>Foodgienic is the symbol of hygienic</h4>
                              <a href="#" className='text-orange text-xs'>Read more</a>
                            </div>
                          </div>
                          <div className='flex flex-wrap justify-between items-center border-grey-light border rounded-md p-1.5'>
                            <div className='h-72px w-72px rounded-lg overflow-hidden	'>
                              <Image src={thumbimg} alt="latest post" className='w-full h-full object-cover rounded-lg'/>
                            </div>
                            <div className='w-[calc(100%-84px)]'>
                              <h3 class="bg-grey3 text-lightgrey text-xs inline-block rounded-lg font-semibold px-2.5 py-1">Foodgienic</h3>
                              <h4 className='text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap lg:w-56 xl:w-44 md:w-36 w-48 pt-1'>Foodgienic is the symbol of hygienic</h4>
                              <a href="#" className='text-orange text-xs'>Read more</a>
                            </div>
                          </div>
                        </div>
                          
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })} 
      </main>
    </div>
  )
}

export default BlogDetaisl
