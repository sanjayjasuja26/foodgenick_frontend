import React, { useState, useRef, useMemo } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Card from "@mui/material/Card";
import ShowImg from '../../../public/assets/images/Show.svg'
import Hide from '../../../public/assets/images/Hide.svg'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { RestaurantStore, addRestaurantFunc, updateRestaurantFunc } from "@/app/auth/store/RestaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { RestaurantStore, addRestaurantFunc, updateRestaurantFunc, } from "@/app/auth/store/Slices/RestaurantSlice";
import { Paper } from "@mui/material";
import Dropzone from "react-dropzone";
import AWS from '../../aws';
import Image from 'next/image'
import camera from '../../../public/assets/images/camera.svg'
import gallery from '../../../public/assets/images/gallery.svg'


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const GST_REGEX = /^([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1})$/;
const validationSchema = Yup.object().shape({
    firstname: Yup.string().required(" First name is required"),
    lastName: Yup.string().required(" Last name is required"),
    restaurantname: Yup.string().required("Restaurant name is required"),
    companyName: Yup.string().required(" Company name is Required"),
    gst: Yup.string().matches(GST_REGEX, 'Invalid GST number')
        .required('GST number is required'),
    kitchenArea: Yup.number()
        .required("Kitchen area is required")
        .min(1, "Kitchen area must be greater than or equal to 1")
        .max(1000, "Kitchen area must be less than or equal to 1000"),
    streetAddress: Yup.string().required(" Street address is required"),
    city: Yup.string().required(" City is required"),
    state: Yup.string().required(" State is required"),
    postalZipCode: Yup.string()
        .matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/, 'Postal code is not valid')
        .required('Postal code is required'),
    country: Yup.string().required(" Country is Required"),
    description: Yup.string().required(" Country is Required"),
    phone: Yup.string()
        .required("Phone number is required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "too short")
        .max(10, "too long"),
    email: Yup.string().email("Invalid email").required(" Email is required"),
    // password: Yup.string().required("Password is required"),
    // confirmPassword: Yup.string().required("Confirm Password is Required"),
});

const AddRestaurant = (props) => {
    const { open, onClose, editRestaurantData } = props
    const dispatch = useDispatch()
    const selecter = useSelector(RestaurantStore)
    const memoizedSelectedData = useMemo(() => selecter, [selecter]);
    const [show, setShow] = useState(false)
    const [showpassword, setShowpassword] = useState(false)

    const toggle = () => {
        setShow(!show)
    }
    const togglePassword = () => {
        setShowpassword(!showpassword)
    }


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

            <Dialog onClose={onClose} open={open} fullWidth className="addblog_popup md:max-w-4xl max-w-none w-full	 mx-auto">
                <DialogContent>
                    <div className="w-full ModalGenerateInvoicesPrints">
                        <Card className="shadow-0">
                            <Paper className="InvoicesPrints Invoices-nw">

                                <section className=''>
                                    <div className='md:max-w-xl mx-auto md:p-4 relative'>
                                        <h2 className="font-montserrate text-2xl font-bold text-dark z-10 relative mb-3 border-b pb-2.5 ">{editRestaurantData && editRestaurantData.id ? `Edit` : `Add`} Restaurant</h2>
                                        <div className='mt-4 relative z-10'>
                                            <Formik
                                                initialValues={{
                                                    firstname: editRestaurantData && editRestaurantData.firstname ? editRestaurantData.firstname : "",
                                                    lastName: editRestaurantData && editRestaurantData.lastName ? editRestaurantData.lastName : "",
                                                    email: editRestaurantData && editRestaurantData.email ? editRestaurantData.email : "",
                                                    phone: editRestaurantData && editRestaurantData.phone ? editRestaurantData.phone : "",
                                                    restaurantname: editRestaurantData && editRestaurantData.restaurantname ? editRestaurantData.restaurantname : "",
                                                    companyName: editRestaurantData && editRestaurantData.companyName ? editRestaurantData.companyName : "",
                                                    gst: editRestaurantData && editRestaurantData.gst ? editRestaurantData.gst : "",
                                                    kitchenArea: editRestaurantData && editRestaurantData.kitchenArea ? editRestaurantData.kitchenArea : "",
                                                    streetAddress: editRestaurantData && editRestaurantData.streetAddress ? editRestaurantData.streetAddress : "",
                                                    city: editRestaurantData && editRestaurantData.city ? editRestaurantData.city : "",
                                                    state: editRestaurantData && editRestaurantData.state ? editRestaurantData.state : "",
                                                    postalZipCode: editRestaurantData && editRestaurantData.postalZipCode ? editRestaurantData.postalZipCode : "",
                                                    country: editRestaurantData && editRestaurantData.country ? editRestaurantData.country : "",
                                                    image: editRestaurantData && editRestaurantData.image ? editRestaurantData.image : "",
                                                    description: editRestaurantData && editRestaurantData.description ? editRestaurantData.description : "",
                                                    password: "",
                                                    confirmPassword: "",

                                                }}
                                                validationSchema={validationSchema}



                                                onSubmit={async (values) => {
                                                    if (values) {
                                                        if (editRestaurantData && editRestaurantData.city) {
                                                            values.restaurentId = JSON.stringify(editRestaurantData.id)
                                                            delete values.password;
                                                            delete values.confirmPassword;

                                                            if(values.image.path){
                                                            const first_Img = values.image;
                                                            const imageUrl = await uploadImageToS3(first_Img);
                                                             values.image = imageUrl
                                                            const update = await dispatch(updateRestaurantFunc(values))
                                                            if (update && update.payload && update.payload.success) {
                                                                onClose()
                                                                toast.success(`${update.payload.message}`)
                                                            } else {
                                                                onClose()
                                                                toast.error(`${update.payload.data.message}`)
                                                            }


                                                            }else{
                                                                const update = await dispatch(updateRestaurantFunc(values))

                                                                if (update && update.payload && update.payload.success) {
                                                                onClose()
                                                                toast.success(`${update.payload.message}`)
                                                            } else {
                                                                onClose()
                                                                toast.error(`${update.payload.data.message}`)
                                                            }

                                                            }
                                                          
                                                           
                                                        } else {
                                                    
                                                            const first_Img = values.image;
                                                            const imageUrl = await uploadImageToS3(first_Img);
                                                            values.image = imageUrl
                                                            const added = await dispatch(addRestaurantFunc(values))
                                                            if (added && added.payload && added.payload.success) {
                                                                onClose()
                                                                toast.success(`${added.payload.message}`)
                                                            } else {
                                                                onClose()
                                                                toast.error(`${added.payload.data.message}`)
                                                            }

                                                        }
                                                    }
                                                }}>
                                                {({ errors, touched }) => (
                                                    <Form>
                                                        <div className=''>
                                                            <div className="flex justify-between flex-wrap">
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>First Name*</label>
                                                                        <Field name="firstname" placeholder="Owner's First Name*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="firstname" />
                                                                    </div>
                                                                </div>
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>Last Name*</label>
                                                                    <Field name="lastName" placeholder="Owner's Last Name*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="lastName" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between flex-wrap">
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>Email*</label>
                                                                        <Field name="email" placeholder="Company's Email*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="email" />
                                                                    </div>
                                                                </div>
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>Phone*</label>
                                                                        <Field name="phone" placeholder="Owner's Contact No.*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                    
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="phone" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between flex-wrap">
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>Food OutLet/Restaurant*</label>
                                                                        <Field name="restaurantname" placeholder="Restaurant Name*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                    
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="restaurantname" />
                                                                    </div>
                                                                </div>
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>Company*</label>
                                                                        <Field name="companyName" placeholder="Company Name*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="companyName" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between flex-wrap">
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>GST*</label>
                                                                        <Field name="gst" placeholder="Add GST*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="gst" />
                                                                    </div>
                                                                </div>
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>Kitchen Area*</label>
                                                                        <Field name="kitchenArea" placeholder="(In Sq. Ft.)" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="kitchenArea" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between flex-wrap">
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>Street Address*</label>
                                                                        <Field name="streetAddress" placeholder="Street Address*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="streetAddress" />
                                                                    </div>
                                                                </div>
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>City*</label>
                                                                        <Field name="city" placeholder="City*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="city" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between flex-wrap">
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>Region/State/Province*</label>
                                                                        <Field name="state" placeholder="Region/State/Province*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="state" />
                                                                    </div>
                                                                </div>
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>Postal/Zip Code*</label>
                                                                        <Field name="postalZipCode" placeholder="Postal/Zip Code*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                    <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="postalZipCode" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex justify-between flex-wrap">
                                                                <div className='md:w-49% w-full mb-3'>
                                                                    <label className='w-full font-bold'>Country*</label>
                                                                    <Field name="country" placeholder="Country*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="country" />
                                                                    </div>
                                                                </div>
                                                                <div className='md:w-49% w-full mb-3'>
                                                                        <label className='w-full font-bold'>Description*</label>
                                                                        <Field name="description" placeholder="description*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                <div className='text-red mt-1 text-xs'>
                                                                        <ErrorMessage name="description" />
                                                                    </div>
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
                                                                                                <Image src={camera} alt="image" className="w-4	"/>
                                                                                            </div> 
                                                                                        </div>
                                                                                    ) : (
                                                                                        <div className="border-2 border-gray-200 bg-grey-light rounded p-2 mt-1 flex justify-center flex-col text-center items-center text-grey2 h-44">
                                                                                        <Image src={gallery} alt="image" className="md:w-20 w-16"/>
                                                                                        Drop image here and click to upload</div>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </Dropzone>
                                                                    )}
                                                                </Field>
                                                                {/* <div className="text-red">
                                                                    <ErrorMessage name="price_First_Section.first_Img" />
                                                                </div> */}
                                                            </div>



                                                            {editRestaurantData && editRestaurantData.firstname ? null :
                                                                <>
                                                                <div className="flex justify-between flex-wrap">
                                                                    <div className='md:w-49% w-full mb-3 relative'>
                                                                        <label className='w-full font-bold'>Password*</label>
                                                                            <Field type={show ? "text" : "password"} name="password" placeholder="password*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />

                                                                            {show ? <div className='absolute top-8 right-5' onClick={toggle}><Image src={Hide} alt="hide"/></div> : <div className='absolute top-8 right-5' onClick={toggle}><Image src={ShowImg} alt="show"/></div>}
                                                                        
                                                                        <div className='text-red mt-1'>
                                                                            <ErrorMessage name="password" />
                                                                        </div>
                                                                    </div>
                                                                    <div className='md:w-49% w-full mb-3 relative'>
                                                                        <label className='w-full font-bold'>Confirm Password*</label>
                                                                            <Field type={showpassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                                            {showpassword ? <div className='absolute top-8 right-5' onClick={togglePassword}><Image src={Hide} alt="hide" /></div> : <div className='absolute top-8 right-5' onClick={togglePassword}><Image src={ShowImg} alt="show" /></div>}
                                                                       
                                                                        <div className='text-red mt-1'>
                                                                            <ErrorMessage name="confirmPassword" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </>
                                                            }
                                                            <div className='text-center w-full mt-2'>
                                                                <button type="submit" className='duration-700 hover:bg-black bg-orange h-10 px-10 text-base text-white rounded-3xl mt-2'>Submit</button>
                                                            </div>
                                                        </div>

                                                    </Form>
                                                )}
                                            </Formik>

                                        </div>
                                    </div>
                                </section>
                            </Paper>
                        </Card>
                    </div>
                </DialogContent>
            </Dialog>
            {/* <ToastContainer /> */}
        </>
    )
}

export default AddRestaurant




