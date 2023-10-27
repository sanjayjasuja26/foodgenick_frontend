import { useState, useEffect, useMemo } from "react";
import AdminNAv from '@/components/forms/AdminNav';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
// import { RestaurantStore, getRestaurantData, getRestaurantFunc } from "../../../app/auth/store/RestaurantSlice";
import AddRestaurant from "@/components/forms/AddRestaurant";
import ViewRestaurant from "@/components/Modals/ViewRestaurant";
import DeleteRestaurant from "@/components/forms/DeleteRestaurant";
import { RestaurantStore, getRestaurantData, getRestaurantFunc,verifileRestaurantFunc } from "@/app/auth/store/Slices/RestaurantSlice";
import { ToastContainer, toast } from "react-toastify";
import Image from 'next/image'
import plus from '../../../../public/assets/images/plus.svg'
import bin2 from '../../../../public/assets/images/bin2.svg'
import edit from '../../../../public/assets/images/edit.svg'
import eye from '../../../../public/assets/images/eye.svg'
import Head from 'next/head'
import Link from "next/link";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function Restaurant() {
  const dispatch = useDispatch()
  const restaurantStore = useSelector(RestaurantStore)
  const selecter = useSelector(getRestaurantData)
  const memoizedSelectedData = useMemo(() => selecter, [selecter]);
  const [addResModal, setAddResModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false);
  const [deleteResModal, setDeleteResModal] = useState(false)
  const [selectedData, setSelectedData] = useState(null)
  let testArr = []
  for(let i = 0; i < memoizedSelectedData.length; i++){
    testArr.push(memoizedSelectedData[i])
  }
  console.log("testarr",testArr.sort((a,b) => a.id - b.id))
  useEffect(() => {
    dispatch(getRestaurantFunc())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log("memoizedSelectedData>>>.", memoizedSelectedData)

  const handleClickOpen = (val) => {
    if(val){
      setAddResModal(true);
      setSelectedData(val)
    }else{
      setAddResModal(true);
    }
  };

  const handleViewOpen = val => {
    setShowViewModal(true);
    setSelectedData(val);
  }

  const handleCloseInvoice = () => {
    setAddResModal(false);
    dispatch(getRestaurantFunc())
  };

  const deleteHandleClickOpen = (val) => {
    setDeleteResModal(true);
    setSelectedData(val)
  };

  const deleteHandleClickClose = () => {
    setDeleteResModal(false);
    dispatch(getRestaurantFunc())
  };
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = async(value, id) => {
   if(id){
    const data ={
      restaurentId:JSON.stringify(id),
      isVerified:value

    }
    const verifyres = await dispatch(verifileRestaurantFunc(data))
    if(verifyres && verifyres.payload && verifyres.payload.success){
      toast.success(`${verifyres.payload.message}`)
      dispatch(getRestaurantFunc())
    }else{
      toast.error(`${verifyres.payload.data.message}`)
    }  

   }

}

  return (
    <>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="content-area mt-4  md:pl-8 w-full">
        <div className="flex justify-between align-center flex-wrap bg-white rounded-xl shadow-light px-8 py-4">
          <div className="title-section  sm:mb-0 mb-1 sm:w-auto w-full">
            <h3 className="font-bold text-2xl text-orange">Restaurant</h3>
            <p className="text-lightgrey text-16">Welcome, Foodgienic</p>
          </div>
          <div className="icon-div flex justify-between  sm:w-auto w-full">
            <div
              className="icon-div flex justify-end"
              onClick={handleClickOpen}
            >
              <a
                href="#"
                className="duration-700 hover:bg-black ml-auto bg-orange flex items-center justify-center h-10 px-5 text-base text-white rounded-3xl mt-2"
              >
                <Image
                  src={plus}
                  alt="delete"
                  className="w-3.5	mr-2"
                  width={10}
                />{" "}
                Add New
              </a>
            </div>
          </div>
        </div>

        {restaurantStore && restaurantStore.loading ? (
          <div className="mb-3 mt-7">
            {/* <h3 className='font-bold text-2xl mb-4 text-orange'>Data</h3> */}
            <TableContainer component={Paper} className="shadow-none ">
              <div className="px-8 bg-white shadow-light rounded-xl py-7">
                <div className="overflow-y-scroll max-h-thirty-two">
                  <Table
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                    className="overflow-x-scroll w-full"
                  >
                    <TableHead>
                      <TableRow className="bg-grey-light1">
                        <TableCell className="font-semibold text-sm text-orange font-montserrate w-14	 text-left">
                          S.No
                        </TableCell>
                        <TableCell
                          className="font-semibold text-sm	text-orange font-montserrate text-left"
                          align="right"
                        >
                          Name
                        </TableCell>
                        <TableCell
                          className="font-semibold text-sm	text-orange font-montserrate text-left"
                          align="right"
                        >
                          Restaurant
                        </TableCell>
                        {/* <TableCell className="font-semibold text-sm	text-orange font-montserrate text-left" align="right">Address</TableCell> */}
                        <TableCell
                          className="font-semibold text-sm	text-orange font-montserrate text-left"
                          align="right"
                        >
                          City
                        </TableCell>
                        {/* <TableCell className="font-semibold text-sm	text-orange font-montserrate text-left" align="right">State</TableCell> */}
                        <TableCell
                          className="font-semibold text-sm	text-orange font-montserrate text-left"
                          align="right"
                        >
                          Phone
                        </TableCell>
                        <TableCell
                          className="font-semibold text-sm	text-orange font-montserrate text-left"
                          align="right"
                        >
                          View
                        </TableCell>
                        <TableCell
                          className="font-semibold text-sm	text-orange font-montserrate text-left"
                          align="right"
                        >
                          Edit
                        </TableCell>
                        <TableCell
                          className="font-semibold text-sm	text-orange font-montserrate text-left"
                          align="right"
                        >
                          Delete
                        </TableCell>
                        <TableCell
                          className="font-semibold text-sm	text-orange font-montserrate text-left"
                          align="right"
                        >
                          Verify
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {testArr &&
                        testArr
                          ?.sort((a, b) => a.id - b.id)
                          ?.map((val, index) => {
                            return (
                              <TableRow
                                className="odd:bg-white even:bg-grey-light1"
                                key={index}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell
                                  align="right"
                                  className="text-sm font-montserrate text-lightgrey w-14 text-left"
                                >
                                  {val.id}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  className="text-sm font-montserrate text-lightgrey  text-left"
                                >
                                  {val.firstname}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  className="text-sm font-montserrate text-lightgrey text-left whitespace-nowrap	overflow-hidden	text-ellipsis	max-w-md"
                                >
                                  {val.restaurantname}
                                </TableCell>
                                {/* <TableCell align="right" className="text-sm font-montserrate text-lightgrey text-left whitespace-nowrap	overflow-hidden	text-ellipsis	max-w-md">{val.streetAddress}</TableCell> */}
                                <TableCell
                                  align="right"
                                  className="text-sm font-montserrate text-lightgrey text-left"
                                >
                                  {val.city}
                                </TableCell>
                                {/* <TableCell align="right" className="text-sm font-montserrate text-lightgrey text-left">{val.state}</TableCell> */}
                                <TableCell
                                  align="right"
                                  className="text-sm font-montserrate text-lightgrey text-left"
                                >
                                  {val.phone}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  className="text-sm font-montserrate text-lightgrey text-left"
                                  onClick={() => handleViewOpen(val)}
                                >
                                  <div className="delete-btn bg-blue-600 border-blue-600 border rounded-lg w-14 rounded-3xl p-1 hover:bg-white cursor-pointer">
                                    <Image
                                      src={eye}
                                      alt="delete"
                                      className="w-4  mx-auto"
                                    />
                                  </div>
                                </TableCell>
                                <TableCell
                                  align="right"
                                  className="text-sm font-montserrate text-lightgrey text-left"
                                  onClick={() => handleClickOpen(val)}
                                >
                                  <div className="delete-btn bg-green border-green border rounded-lg w-14 rounded-3xl p-1 hover:bg-white cursor-pointer">
                                    <Image
                                      src={edit}
                                      alt="delete"
                                      className="w-4  mx-auto"
                                    />
                                  </div>
                                </TableCell>
                                <TableCell
                                  align="right"
                                  className="text-sm font-montserrate text-lightgrey text-left"
                                  onClick={() => deleteHandleClickOpen(val)}
                                >
                                  <div className="action-btn  bg-red border-red border rounded-lg w-14 rounded-3xl p-1 hover:bg-white cursor-pointer">
                                    <Image
                                      src={bin2}
                                      alt="delete"
                                      className="w-4 mx-auto"
                                    />
                                  </div>
                                </TableCell>
                                <TableCell
                                  align="right"
                                  className="text-16 text-lightgrey w-1/5 text-left"
                                >
                                  {" "}
                                  <Switch
                                    checked={
                                      val && val.isVerified && val.isVerified
                                    }
                                    onChange={(e) =>
                                      handleChange(e.target.checked, val?.id)
                                    }
                                  />
                                </TableCell>
                              </TableRow>
                            );
                          })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TableContainer>
          </div>
        ) : (
          <h1>loading .....</h1>
        )}
        <ViewRestaurant
          open={showViewModal}
          onClose={() => setShowViewModal(false)}
          restaurant={selectedData}
        />
        <AddRestaurant
          open={addResModal}
          onClose={handleCloseInvoice}
          editRestaurantData={selectedData}
        />
        <DeleteRestaurant
          open={deleteResModal}
          onClose={deleteHandleClickClose}
          deleteRestaurantData={selectedData}
        />
        {/* <ToastContainer /> */}
      </div>
    </>
  );
}

Restaurant.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}
