

import * as React from 'react';
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image'
import ShowImg from '../../../public/assets/images/Show.svg'
import Hide from '../../../public/assets/images/Hide.svg'
import close from '../../../public/assets/images/close.svg';
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
const inter = Inter({ subsets: ['latin'] })
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { getSignupData, userSignUpFunc } from '@/app/auth/store/SignUpSlice';
import { useState } from 'react';
import Dropzone from 'react-dropzone';


const validationSchema = Yup.object().shape({
  postalZipCode: Yup.string()
    .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/, 'Postal code is not valid')
    .required('Postal code is required'),
  streetAddress: Yup.string().required("Street Address is required"),
  city: Yup.string().required(" City is required"),
  state: Yup.string().required(" State is required"),
  country: Yup.string().required(" Country is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is Required"),
  image: Yup.string().required("image is Required"),
  description: Yup.string().required("description is Required"),
});

export default function AddressDetail(props) {
  const [show, setShow] = useState(false)
  const [showpassword, setShowpassword] = useState(false)
  const [accHolderName, setAccHolderName] = useState(null)
  const { _handleBack, Ownerdata } = props
  const router = useRouter()
  const dispatch = useDispatch()
  const userSignupData = useSelector(getSignupData)
  console.log("userSignupData", userSignupData)
  const toggle = () => {
    setShow(!show)
  }
  const togglePassword = () => {
    setShowpassword(!showpassword)
  }

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false)
    router.push("/login")
  };


  const uploadImageToS3 = async (file) => {

    const uploadParams = {
      Bucket: 'rajatfoodgienic',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
    };

    const s3 = new AWS.S3();

    try {
      const data = await s3.upload(uploadParams).promise();
      const imageUrl = data.Location;
      console.log('Image uploaded successfully:', imageUrl);
      return imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return file
    }
  };





  return (
    <>

      <main>
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
              Welcome {accHolderName ? accHolderName : " As restaurant"}
              </Typography>
            </Box>
          </Modal>
        </div>
        <section className='lg:pt-5 xl:pb-8	lg:pb-0 relative md:pt-16	pt-12'>
          <div className='lg:max-w-xxxl md:max-w-xxxl mx-auto px-3.5 relative'>
            <Formik
              initialValues={{
                firstname: Ownerdata && Ownerdata.firstname ? Ownerdata.firstname : "",
                lastName: Ownerdata && Ownerdata.lastName ? Ownerdata.lastName : "",
                email: Ownerdata && Ownerdata.email ? Ownerdata.email : "",
                phone: Ownerdata && Ownerdata.phone ? Ownerdata.phone : "",
                restaurantname: Ownerdata && Ownerdata.restaurantname ? Ownerdata.restaurantname : "",
                companyName: Ownerdata && Ownerdata.companyName ? Ownerdata.companyName : "",
                gst: Ownerdata && Ownerdata.gst ? Ownerdata.gst : "",
                kitchenArea: Ownerdata && Ownerdata.kitchenArea ? Ownerdata.kitchenArea : "",
                streetAddress: "",
                city: "",
                state: "",
                image: "",
                description: "",
                postalZipCode: "",
                country: "",
                password: "",
                confirmPassword: ""

              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                console.log(values);
                const first_Img = values.image;
                const imageUrl = await uploadImageToS3(first_Img);
                values.image = imageUrl
                const singUpRes = await dispatch(userSignUpFunc(values))
                console.log("singUpRes", singUpRes)
                if (singUpRes && singUpRes.payload && singUpRes.payload.success) {
                  toast.success(`${singUpRes.payload.message}`)
                  setAccHolderName(singUpRes?.payload?.data?.firstname)
                  setOpen(true)
                } else {
                  toast.error(`${singUpRes.payload.data.message}`)
                }

              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className='flex flex-wrap'>

                    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                        <legend className='font-poppins text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Street Address*</legend>
                        <Field name="streetAddress" placeholder="Street Address*" className='border-0 bg-transparent outline-0 w-full' />
                      </fieldset>
                      <div className='text-red mt-1'>
                        <ErrorMessage name="streetAddress" />
                      </div>
                    </div>

                    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                        <legend className='font-poppins text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>City*</legend>
                        <Field name="city" placeholder="City*" className='border-0 bg-transparent outline-0 w-full' />
                      </fieldset>

                      <div className='text-red mt-1'>
                        <ErrorMessage name="city" />
                      </div>
                    </div>

                    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                        <legend className='font-poppins text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Region/State/Province*</legend>
                        <Field name="state" placeholder="Region/State/Province*" className='border-0 bg-transparent outline-0 w-full' />
                      </fieldset>

                      <div className='text-red mt-1'>
                        <ErrorMessage name="state" />
                      </div>
                    </div>

                    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                        <legend className='font-poppins text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Postal/Zip Code*</legend>
                        <Field name="postalZipCode" placeholder="Postal/Zip Code*" className='border-0 bg-transparent outline-0 w-full' />
                      </fieldset>
                      <div className='text-red mt-1'>
                        <ErrorMessage name="postalZipCode" />
                      </div>
                    </div>



                    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                        <legend className='font-poppins text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Country*</legend>
                        <Field name="country" placeholder="Country*" className='border-0 bg-transparent outline-0 w-full' />
                      </fieldset>
                      <div className='text-red mt-1'>
                        <ErrorMessage name="country" />
                      </div>
                    </div>
                    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                        <legend className='font-poppins text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Description*</legend>
                        <Field name="description" placeholder="description*" className='border-0 bg-transparent outline-0 w-full' />
                      </fieldset>
                      <div className='text-red mt-1'>
                        <ErrorMessage name="description" />
                      </div>
                    </div>


                    <div className="w-full mb-3">
                      <label htmlFor="image" className="font-bold">Image:</label>
                      <Field name="image" >
                        {({ form }) => (
                          <Dropzone
                            onDrop={(acceptedFiles) =>
                              form.setFieldValue(
                                "image",
                                acceptedFiles[0]
                              )
                            }
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div {...getRootProps()} className="dropzone w-full focus:outline-none">
                                <input {...getInputProps()} />
                                {form?.values?.image ? (
                                  <div className="relative w-full border-2 border-gray-200 rounded h-44">

                                    {form?.values?.image?.path ?
                                      <Image
                                        src={URL.createObjectURL(
                                          form?.values?.image
                                        )}
                                        alt="uploaded"
                                        height={172}
                                        width={691}
                                        className="uploaded-image rounded w-full h-full object-cover"
                                      /> :
                                      <Image
                                        src={form?.values?.image}
                                        alt="uploaded"
                                        height={172}
                                        width={691}
                                        className="uploaded-image rounded w-full h-full object-cover"
                                      />}
                                    <div className="-top-3 md:-right-3 -right-0.5 absolute bg-grey-light h-8 w-8 flex rounded-full border border-white items-center justify-center">
                                      {/* <Image src={camera} alt="image" className="w-4	" /> */}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="border-2 border-gray-200 bg-grey-light rounded p-2 mt-1 flex justify-center flex-col text-center items-center text-grey2 h-44">
                                    {/* <Image src={gallery} alt="image" className="md:w-20 w-16" /> */}
                                    Drop image here and click to upload</div>
                                )}
                              </div>
                            )}
                          </Dropzone>
                        )}
                      </Field>
                      <div className="text-red">
                        <ErrorMessage name="image" />
                         </div>
                    </div>











                    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                        <legend className='font-poppins text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Password*</legend>
                        <Field type={show ? "text" : "password"} name="password" placeholder="password*" className='relative border-0 bg-transparent outline-0 w-full' />
                        {show ? <div className='absolute top-2 right-5 bottom-0' onClick={toggle}><Image src={Hide} alt="hide" /></div> : <div className='absolute top-2 right-5 bottom-0' onClick={toggle}><Image src={ShowImg} alt="show" /></div>}
                      </fieldset>
                      <div className='text-red mt-1'>
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                    <div className='lg:w-2/4 md:w-2/4 w-full px-2.5 pb-6'>
                      <fieldset className='bg-white	rounded-md drop-shadow px-5	pt-2	pb-3 focus-within:border-b-2 border-b-yellow border-0'>
                        <legend className='font-poppins text-xs	bg-white rounded-xl	font-medium	px-2 py-1.5'>Confirm Password*</legend>
                        <Field type={showpassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password*" className='relative border-0 bg-transparent outline-0 w-full' />
                        {showpassword ? <div className='absolute top-2 right-5 bottom-0' onClick={togglePassword}><Image src={Hide} alt="hide" /></div> : <div className='absolute top-2 right-5 bottom-0' onClick={togglePassword}><Image src={ShowImg} alt="show" /></div>}
                      </fieldset>
                      <div className='text-red mt-1'>
                        <ErrorMessage name="confirmPassword" />
                      </div>
                    </div>
                    <div className='text-center w-full flex justify-center gap-5'>
                      <button onClick={_handleBack} className='font-poppins text-base font-semibold	bg-black text-white uppercase	inline-block py-3.5 px-12	rounded-md	'>Back</button>
                      <button type="submit" className='font-poppins text-base font-semibold	bg-black text-white uppercase	inline-block py-3.5 px-12	rounded-md'>Submit</button>
                    </div>
                  </div>

                </Form>
              )}
            </Formik>

          </div>
        </section>
      </main>
      {/* <ToastContainer /> */}
    </>
  )
}






