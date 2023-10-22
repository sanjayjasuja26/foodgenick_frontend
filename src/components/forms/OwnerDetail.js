
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const GST_REGEX = /^([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1})$/;
const validationSchema = Yup.object().shape({
  restaurantname: Yup.string().required(" Restaurant name is required"),
  companyName: Yup.string().required(" Company name is Required"),
  gst:  Yup.string().matches(GST_REGEX, 'Invalid GST number')
  .required('GST number is required'),
  kitchenArea: Yup.number()
  .required("Kitchen area is required")
  .min(1, "Kitchen area must be greater than or equal to 1")
  .max(1000, "Kitchen area must be less than or equal to 1000"),
});

const OwnerDetail = (props) => {
    const {_handleBack,_handlSubmit,userdata,Ownerdata} = props
  return (
    <Formik
    initialValues={{ 
      firstname :userdata && userdata.firstname ? userdata.firstname :"",
      lastName:userdata && userdata.lastName ? userdata.lastName :"",
      email: userdata && userdata.email ? userdata.email :"", 
      phone: userdata && userdata.phone ? userdata.phone :"" ,
      restaurantname :Ownerdata && Ownerdata.restaurantname ? Ownerdata.restaurantname :"" , 
      companyName:Ownerdata && Ownerdata.companyName ? Ownerdata.companyName :"" ,
       gst: Ownerdata && Ownerdata.gst ? Ownerdata.gst :"" ,
       kitchenArea: Ownerdata && Ownerdata.kitchenArea ? Ownerdata.kitchenArea :"" 
      }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      if(values){
        const type = "Owner"
        _handlSubmit(values,type)
        }
    }}
  >
    {({ errors, touched }) => (
      <Form>
    <div className='flex flex-wrap'>
    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
        <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Food OutLet/Restaurant*</legend>
        <Field name="restaurantname" placeholder="Restaurant Name*" className='border-0 bg-transparent outline-0 w-full' />
      </fieldset>
      <div className='text-red mt-1'>
        <ErrorMessage name="restaurantname" />
      </div>
    </div>
    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
        <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Company*</legend>
        <Field name="companyName" placeholder="Company Name*" className='border-0 bg-transparent outline-0 w-full' />
      </fieldset>
      <div className='text-red mt-1'>
        <ErrorMessage name="companyName" />
      </div>
    </div>
    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
        <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>GST*</legend>
        <Field name="gst" placeholder="Add GST*" className='border-0 bg-transparent outline-0 w-full' />
      </fieldset>
      <div className='text-red mt-1'>
        <ErrorMessage name="gst" />
      </div>
    </div>
    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
        <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Kitchen Area</legend>
        <Field name="kitchenArea" placeholder="(In Sq. Ft.)" className='border-0 bg-transparent outline-0 w-full' />
      </fieldset>
      <div className='text-red mt-1'>
        <ErrorMessage name="kitchenArea" />
      </div>
    </div>
    <div className='text-center w-full flex justify-center gap-5'>
      <button onClick={_handleBack} className='font-montserrate text-base font-semibold	bg-black text-white uppercase	inline-block py-3.5 px-12	rounded-md	'>Back</button>
      <button type="submit" className='font-montserrate text-base font-semibold	bg-black text-white uppercase	inline-block py-3.5 px-12	rounded-md	'>Next</button>
    </div>
   

  </div>
  </Form>
      )}
    </Formik>
  )
}

export default OwnerDetail





