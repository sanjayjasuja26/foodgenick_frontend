import React from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const ViewRestaurant = (props) => {
  const { open, onClose, restaurant } = props;

    console.log({ restaurant });
    
  return (
    <>
      <Dialog
        onClose={onClose}
        open={open}
        fullWidth
        className="addblog_popup md:max-w-3xl max-w-none w-full mx-auto"
      >
        <DialogContent>
          <div className="w-full ModalGenerateInvoicesPrints shadow-inherit">
            <div className="">
              <div className="InvoicesPrints Invoices-nw">
                <section className="lg:pb-0 relative">
                  <div className="relative">
                    <h2 className="font-montserrate text-2xl font-bold text-dark z-10 relative mb-3 border-b pb-2.5 ">
                      View Restaurant
                    </h2>
                    <div className="py-7 xl:max-w-5xl xl:mx-auto lg:p-8 rounded-lg border-black mt-4 md:py-9 relative z-10">
                      <div className="flex justify-between flex-wrap">
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">First Name</span>
                          <br />
                          <span>{restaurant?.firstname}</span>
                        </div>
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">Last Name</span>
                          <br />
                          <span>{restaurant?.lastName}</span>
                        </div>
                      </div>
                      <div className="flex justify-between flex-wrap">
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">Email</span>
                          <br />
                          <span>{restaurant?.email}</span>
                        </div>
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">Phone</span>
                          <br />
                          <span>{restaurant?.phone}</span>
                        </div>
                      </div>
                      <div className="flex justify-between flex-wrap">
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">
                            Food OutLet/Restaurant
                          </span>
                          <br />
                          <span>{restaurant?.restaurantname}</span>
                        </div>
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">Company</span>
                          <br />
                          <span>{restaurant?.companyName}</span>
                        </div>
                      </div>
                      <div className="flex justify-between flex-wrap">
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">GST</span>
                          <br />
                          <span>{restaurant?.gst}</span>
                        </div>
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">Kitchen Area</span>
                          <br />
                          <span>{restaurant?.kitchenArea}</span>
                        </div>
                      </div>
                      <div className="flex justify-between flex-wrap">
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">Street Area</span>
                          <br />
                          <span>{restaurant?.streetAddress}</span>
                        </div>
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">City</span>
                          <br />
                          <span>{restaurant?.city}</span>
                        </div>
                      </div>
                      <div className="flex justify-between flex-wrap">
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">
                            Region/State/Province
                          </span>
                          <br />
                          <span>{restaurant?.state}</span>
                        </div>
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">
                            Postal/Zip Code
                          </span>
                          <br />
                          <span>{restaurant?.postalZipCode}</span>
                        </div>
                      </div>
                      <div className="flex justify-between flex-wrap">
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">Country</span>
                          <br />
                          <span>{restaurant?.country}</span>
                        </div>
                        <div className="md:w-49% w-full mb-3">
                          <span className="w-full font-bold">Description</span>
                          <br />
                          <span>{restaurant?.description}</span>
                        </div>
                      </div>
                      <div className="flex justify-between flex-wrap">
                        <span className="w-full font-bold">Image</span>
                        <Image
                            src={restaurant?.image}
                            alt={restaurant?.restaurantname}
                            width={650}
                            height={150}
                        />
                      </div>
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
  );
};

export default ViewRestaurant;
