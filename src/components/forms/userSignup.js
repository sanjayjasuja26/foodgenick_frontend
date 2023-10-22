
import React, { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { constants } from "@/common/Constant";
import { ToastContainer, toast } from 'react-toastify';
import close from '../../../public/assets/images/close.svg';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import ShowImg from '../../../public/assets/images/Show.svg'
import Hide from '../../../public/assets/images/Hide.svg'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("  First name is required"),
  lastName: Yup.string().required(" Last name is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is Required"),
  email: Yup.string().email("Invalid email").required(" Email is required"),
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const UserSignup = () => {
const router = useRouter()
  const [show, setShow] = useState(false)
  const [userName, setUserName] = useState(null)
  const [showpassword, setShowpassword] = useState(false)
  const toggle = () => {
    setShow(!show)
  }
  const togglePassword = () => {
    setShowpassword(!showpassword)
  }

  const [open, setOpen] = React.useState(false);
  const handleClose = () =>{
     setOpen(false)
     router.push("/login")
    };
  return (
    <>

<div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        
        <Box sx={style}>
        <button onClick={handleClose} className='absolute top-2 right-1'>
          <Image
                        alt="close"
                        src={close}
                        className='inline-block mr-3.5 ' />
          
          </button>
          <Typography className='text-2xl font-semibold' id="modal-modal-title" variant="h6" component="h2">
            Welcome {userName ? userName : "user"}
          </Typography>
         
        </Box>
      </Modal>
    </div>

      <Formik
        initialValues={{ firstname: "", lastName: "", email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          if (values) {
          fetch(`${constants.URLLOCAL}/user/addUser`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
              console.log("answer", json);
              if (json.success) {
                toast.success(`${json.message}`);
                setUserName(json?.data?.firstname)
                resetForm();
                setOpen(true)
              } else {
                toast.error(`${json.message}`);
                resetForm();
              }
            })
            .catch((error) => {
              console.error("Error occurred:", error );
              // Handle the error as per your requirements
              // For example, display an error message to the user
              toast.error("An error occurred. Please try again later.");
            });


          }

        }}
      >
        {({ errors, touched }) => (
          <>
            <Form>
              <div className='flex flex-wrap'>
                <div className='lg:w-2/4 md:w-2/4 w-full 4 px-2.5 pb-6'>
                  <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                    <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>First Name*</legend>
                    {/* <input type="text" placeholder="First Name*" className='border-0 bg-transparent outline-0 width-full' /> */}
                    <Field name="firstname" placeholder="First Name*" className='border-0 bg-transparent outline-0 w-full' />
                  </fieldset>
                  <div className='text-red mt-1'>
                    <ErrorMessage name="firstname" />
                  </div>
                </div>
                <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                  <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                    <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Last Name*</legend>
                    {/* <input type="text" placeholder="Last Name*" className='border-0 bg-transparent outline-0 width-full' /> */}
                    <Field name="lastName" placeholder="Last Name*" className='border-0 bg-transparent outline-0 w-full' />
                  </fieldset>
                  <div className='text-red mt-1'>
                    <ErrorMessage name="lastName" />
                  </div>
                </div>

                <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                  <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                    <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Email*</legend>
                    {/* <input type="text" placeholder="Email*" className='border-0 bg-transparent outline-0 width-full' /> */}
                    <Field name="email" placeholder="Email*" className='border-0 bg-transparent outline-0 w-full' />
                  </fieldset>
                  <div className='text-red mt-1'>
                    <ErrorMessage name="email" />
                  </div>
                </div>

                <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                  <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                    <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Password*</legend>
                    <Field type={show ? "text" : "password"} name="password" placeholder="password*" className='relative border-0 bg-transparent outline-0 w-full' />
                    {show ? <div className='absolute top-2 right-5 bottom-0' onClick={toggle}><Image src={Hide} alt="hide" /></div> : <div className='absolute top-2 right-5 bottom-0' onClick={toggle}><Image src={ShowImg} alt="show" /></div>}
                  </fieldset>
                  <div className='text-red mt-1'>
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                  <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                    <legend className='font-montserrate text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Confirm Password*</legend>
                    <Field type={showpassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password*" className='relative border-0 bg-transparent outline-0 w-full' />
                    {showpassword ? <div className='absolute top-2 right-5 bottom-0' onClick={togglePassword}><Image src={Hide} alt="hide" /></div> : <div className='absolute top-2 right-5 bottom-0' onClick={togglePassword}><Image src={ShowImg} alt="show" /></div>}
                  </fieldset>
                  <div className='text-red mt-1'>
                    <ErrorMessage name="confirmPassword" />
                  </div>
                </div>
                <div className='text-center w-full'>
                  <button type="submit" className='font-montserrate text-base font-semibold	bg-black text-white uppercase	inline-block py-3.5 px-12	rounded-md'>Submit</button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
      {/* <ToastContainer /> */}
    </>
  )
}

export default UserSignup
