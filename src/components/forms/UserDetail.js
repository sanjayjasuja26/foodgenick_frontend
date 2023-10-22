
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required(" First name is required"),
  lastName: Yup.string().required(" Last name is required"),
  phone: Yup.string()
  .required(" Phone number is required")
  .matches(phoneRegExp, 'Phone number is not valid')
  .min(10, "too short")
  .max(10, "too long"),
  email: Yup.string().email("Invalid email").required(" Email is required"),
});



const UserDetail = (props) => {
    const {_handlSubmit,userdata} = props
  return (
    <Formik
    initialValues={{ 
      firstname :userdata && userdata.firstname ?userdata.firstname :"",
      lastName:userdata && userdata.lastName ?userdata.lastName :"",
      email: userdata && userdata.email ?userdata.email :"", 
      phone: userdata && userdata.phone ?userdata.phone :"" ,
      }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      if(values){
      const type = "user"
      _handlSubmit(values,type)
      }
    }}
  >
    {({ errors, touched }) => (
      <Form>
    <div className='flex flex-wrap mt-8'>
    <div className='lg:w-2/4 md:w-2/4 w-full 4 px-2.5 pb-6'>
    <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0 '>
      <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>First Name*</legend>
      <Field name="firstname" placeholder="First Name*" className='border-0 bg-transparent outline-0 w-full' />
    </fieldset>
    <div className='text-red mt-1'>
      <ErrorMessage name="firstname" />
    </div>
  </div>
  <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
    <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
      <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Last Name*</legend>
      <Field name="lastName" placeholder="Last Name*" className='border-0 bg-transparent outline-0 w-full' />
    </fieldset>
    <div className='text-red mt-1'>
      <ErrorMessage name="lastName" />
    </div>
  </div>
  <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
    <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
      <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Email*</legend>
      <Field name="email" placeholder="Email*" className='border-0 bg-transparent outline-0 w-full' />
    </fieldset>
    <div className='text-red mt-1'>
      <ErrorMessage name="email" />
    </div>
  </div>
  <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
    <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
      <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Phone*</legend>
      <Field name="phone" placeholder="Contact No.*" className='border-0 bg-transparent outline-0 w-full' />
    </fieldset>
    <div className='text-red mt-1'>
      <ErrorMessage name="phone" />
    </div>
  </div>
   
  <div className='text-center w-full'>
      <button type="submit" className='font-montserrate text-base font-semibold	bg-black hover:bg-yellow hover:text-white duration-700 hover:border-yellow text-white uppercase	inline-block py-3.5 px-12	rounded-md'>Next</button>
    </div>
  </div>
  </Form>
      )}
    </Formik>
  )
}

export default UserDetail





