
import React, { useState, useRef, useMemo } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { deleteBlogFunc } from "@/app/auth/store/Slices/BlogSlice";



const DeleteBlog = (props) => {
    const { open, onClose, deleteBlogData } = props
    const dispatch = useDispatch()
    const data = {
        BlogId: JSON.stringify(deleteBlogData?.id)  
    }

    const deleteHandler = async () => {
       const deleteres = await dispatch(deleteBlogFunc(data))
       if(deleteres && deleteres.payload && deleteres.payload.success){
        onClose()
        toast.success(`${deleteres.payload.message}`)
    }else{
        onClose()
         toast.error(`${deleteres.payload.data.message}`)
    }
    }

    return (
<>

        <Dialog onClose={onClose} open={open} fullWidth className="addblog_popup md:max-w-3xl max-w-none w-full mx-auto">
            <DialogContent>
                <div className="w-full ModalGenerateInvoicesPrints shadow-inherit">
                    <div className="">
                        <div className="InvoicesPrints Invoices-nw">
                        <section className='lg:pb-0 relative'>
                                <div className='relative'>
                                    <h2 className="font-poppins text-2xl font-bold text-dark z-10 relative mb-3 border-b pb-2.5 ">Delete Blog</h2>
                                    <div className='py-7 xl:max-w-5xl xl:mx-auto lg:p-8 rounded-lg border-black mt-4 md:py-9 relative z-10'>
                                        <section className='lg:pb-0 relative'>
                                            <h2 className="mb-2 text-orange md:text-3xl text-2xl text-center font-extrabold">Are You Sure?</h2>
                                            <p className="md:text-lg text-base font-poppins text-lightgrey mb-5 flex justify-center text-center">Do you really want to delete this data?</p>
                                            <div style={{ display: "flex", justifyContent: "center" }} className="pt-7">
                                                <button onClick={deleteHandler} className="duration-700 bg-black hover:bg-orange flex items-center justify-center text-base text-white rounded-3xl mr-2 py-1 px-6">Delete</button>
                                                <button onClick={onClose} className="duration-700 bg-black hover:bg-orange flex items-center justify-center text-base text-white rounded-3xl ml-2 py-1 px-6">Cancel</button>
                                            </div>
                                        </section>

                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
        {/* <ToastContainer/> */}
        </>
    )
}

export default DeleteBlog















