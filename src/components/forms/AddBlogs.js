import React, { useState, useRef, useMemo, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Card from "@mui/material/Card";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Paper } from "@mui/material";
import Dropzone from "react-dropzone";
import AWS from '../../aws';
import Image from 'next/image'
import { addBlogFunc, updateBlogFunc } from "@/app/auth/store/Slices/BlogSlice";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import camera from '../../../public/assets/images/camera.svg'
import gallery from '../../../public/assets/images/gallery.svg'
const validationSchema = Yup.object().shape({
    title: Yup.string().required("title is required"),
    image: Yup.string().required(" image is required"),
    // description: Yup.string().required("description is required"),
});

const AddBlogs = (props) => {
    const { open, onClose, editBlogData ,isEdit } = props
    const [editorState, setEditorState] = useState("");
    const dispatch = useDispatch()
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

 useEffect(()=>{
    setEditorState(editBlogData && isEdit && editBlogData.description ? editBlogData.description  : "")
 },[isEdit])

      const editBlogDatafunc=(e)=>{
        console.log("2e333",e)
        setEditorState(e)
      }
    
    return (
        <>

            <Dialog onClose={onClose} open={open} fullWidth className="addblog_popup md:max-w-4xl max-w-none w-full	 mx-auto">
                <DialogContent>
                    <div
                        className="w-full ModalGenerateInvoicesPrints">
                        <Card className="shadow-0">
                            <Paper className="InvoicesPrints Invoices-nw">

                                <section className=''>
                                    <div className='md:max-w-xl mx-auto md:p-6 relative'>
                                        <h2 className="font-poppins text-2xl font-bold text-dark z-10 relative mb-3 border-b pb-2.5 ">{editBlogData && editBlogData.id ? `Edit` : `Add`} Blog</h2>
                                        <div className='mt-4 relative z-10'>
                                            <Formik
                                                initialValues={{
                                                    title:editBlogData && editBlogData.title ? editBlogData.title :"",
                                                    description:"",
                                                    image:editBlogData && editBlogData.image ? editBlogData.image :"",
                                                
                                                }}
                                                validationSchema={validationSchema}
                                                onSubmit={async (values,{ resetForm }) => {
                                                                                                 
                                                    if (values) {
                                                        if (editBlogData && editBlogData.title) {
                                                            values.id = JSON.stringify(editBlogData.id)
                                                            values.description = editorState
                                                            if(values.image.path){
                                                            const first_Img = values.image;
                                                            const imageUrl = await uploadImageToS3(first_Img);
                                                             values.image = imageUrl
                                                            const update = await dispatch(updateBlogFunc(values))
                                                            if (update && update.payload && update.payload.success) {
                                                                onClose()
                                                                toast.success(`${update.payload.message}`)
                                                                resetForm()
                                                            } else {
                                                                onClose()
                                                                toast.error(`${update.payload.data.message}`)
                                                                
                                                            }


                                                            }else{
                                                                const update = await dispatch(updateBlogFunc(values))

                                                                if (update && update.payload && update.payload.success) {
                                                                onClose()
                                                                toast.success(`${update.payload.message}`)
                                                                resetForm()
                                                            } else {
                                                                onClose()
                                                                toast.error(`${update.payload.data.message}`)
                                                               
                                                            }

                                                            }
                                                          
                                                           
                                                        } else {
                                                     
                                                            const first_Img = values.image;
                                                            const imageUrl = await uploadImageToS3(first_Img);
                                                            values.image = imageUrl
                                                            values.description = editorState
                                                            console.log("Blogvalues",values)
                                                            const added = await dispatch(addBlogFunc(values))
                                                            if (added && added.payload && added.payload.success) {
                                                                onClose()
                                                                toast.success(`${added.payload.message}`)
                                                                setEditorState("")
                                                                resetForm()
                                                            } else {
                                                                onClose()
                                                                toast.error(`${added.payload.data.message}`)
                                                               
                                                            }

                                                    }
                                                    }
                                                }}>
                                                {({ errors, touched }) => (
                                                    <Form>
                                                        <div className='flex flex-wrap'>
                                                            <div className='w-full mb-3'>
                                                                <label className="w-full font-bold" htmlFor="first_title">Title:</label>
                                                                    <Field name="title" placeholder="title*" className='p-2 border-2 border-gray-200 rounded w-full focus:outline-none' />
                                                           
                                                                <div className='text-red mt-1'>
                                                                    <ErrorMessage name="title" className="text-xs"/>
                                                                </div>
                                                            </div>
                                                       
                                                
                                                            <div className='w-full mb-3'>
                                                                <label className="w-full font-bold" htmlFor="first_title">Description*</label>
                                                                  
                                                                    <ReactQuill
                                                                    value={editorState}
                                                                    onChange={(e)=>editBlogDatafunc(e)}
                                                                    placeholder="Description*"
                                                                    name="description" 
                                                                    className='border-2 border-gray-200 rounded w-full focus:outline-none customtext-box'
                                                                />
                                                             
                                                                <div className='text-red mt-1'>
                                                                    <ErrorMessage name="description" className="text-xs	"/>
                                                                </div>
                                                            </div>


                                                            <div className="w-full">
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
                                                                                <div {...getRootProps()} className="dropzone">
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
                                                                                                <Image src={camera} alt="camera" className="w-4	"/>
                                                                                            </div>    
                                                                                        </div>
                                                                                    ) : (
                                                                                    <div className="border-2 border-gray-200 bg-grey-light rounded p-2 mt-1 flex justify-center flex-col text-center items-center text-grey2 h-44">
                                                                                        <Image src={gallery} alt="gallery" className="md:w-20 w-16"/>
                                                                                    Drop image here and click to upload</div>
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                        </Dropzone>
                                                                    )}
                                                                </Field>
                                                                <div className='text-red mt-1'>
                                                                    <ErrorMessage name="image" />
                                                                </div>
                                                            </div>
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

export default AddBlogs




