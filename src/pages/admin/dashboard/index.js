import { useState,useEffect,React  } from "react";
import AdminNAv from '@/components/forms/AdminNav';
import Table from '@mui/material/Table';
import Image from 'next/image'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from "react-redux";
import { getRestaurantFunc, getVerifidRestaurantsFunc } from "@/app/auth/store/Slices/RestaurantSlice";
import moment from "moment/moment";
import { TablePagination } from "@mui/material";
import Link from "next/link";
import { constants } from "@/common/Constant";
import User from "../../../components/admin/user.dashboard";
import Restaurant from "../../../components/admin/restaurant.dashboard";
import restaurant from '../../../../public/assets/images/restaurants.svg'
import user from '../../../../public/assets/images/users.svg'
import varified from '../../../../public/assets/images/varified.svg'
import Head from 'next/head';

const ContentType = {
  USERS: "Users",
  RESTAURANTS: "Restaurants",
  VERIFIED_RESTAURANTS: "Verified Restaurants",
};
export default function Admin() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isOpen, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedContent, setSelectedContent] = useState(ContentType.RESTAURANTS);
  const [restaurantData, setRestaurantData] = useState([]);
  const [verifiedResData, setVerifiedResData] = useState([]);
   const dispatch = useDispatch()
  const userToggleForm = () => setOpen(!isOpen);
    //const hideSidebar = isOpen ? ' xl:w-3/2 lg:w-3/4 md:w-3/5' : ' xl:w-full lg:w-full md:w-full';
 //const hideSidebar = isOpen ? ' xl:w-3/2 lg:w-3/4 md:w-3/5' : ' xl:w-3/2 lg:w-3/4 md:w-3/5';

  useEffect(() => {
    setPage(0);
  },[selectedContent])
  
useEffect ( ()=>{
  fetch(`${constants.URLLOCAL}/user/getUser`)
      .then(response => response.json())
      .then(json => {
        setUsers(json.data);
      })
      getrestorantdata()
      getverifiedRestorantdata()
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  
const getrestorantdata = async() =>{
const data =  await dispatch(getRestaurantFunc())
if(data && data.payload && data.payload.data){
  setRestaurantData(data.payload.data)
}
}
const getverifiedRestorantdata = async() =>{
const data =  await dispatch(getVerifidRestaurantsFunc())
if(data && data.payload && data.payload.data){
  setVerifiedResData(data.payload.data)
}
}

const cardData = [
  {
    id: 1,
    image: restaurant,
    name: "Restaurants",
    dis: "Total",
    views: `${restaurantData && restaurantData.length}`,
  },
  {
    id: 2,
    image: varified,
    name: "Verified Restaurants",
    dis: "Total",
    views: `${verifiedResData && verifiedResData.length}`,
  },
  {
    id: 3,
    image: user,
    name: "Users",
    dis: "Total",
    views: `${users && users.length}`,
  },
];



const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(event.target.value);
  setPage(0);
};

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="content-area mt-4  md:pl-8 w-full">
        <div className="title-section mb-5 bg-white rounded-xl shadow-light px-8 py-4 ">
          <h2 className="font-bold text-2xl text-orange">Dashboard</h2>
          <p className="text-lightgrey text-16">Welcome, Foodgienic</p>
        </div>
        <div className="flex justify-between gap-x-5 flex-shrink-none xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap">
          {cardData &&
            cardData.map((ele, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    selectedContent === ele.name
                      ? "bg-blackLight text-white"
                      : "bg-white"
                  } shadow-light rounded-xl card1 xl:w-1/2 w-full xl:mb-0 lg:mb-4 md:mb-5 sm:mb-5 mb-5 xs:mb-5 sm:p-7 p-5	 flex xl:flex-nowrap flex-wrap md:text-start sm:justify-between justify-center ease-in duration-300 hover:ease-in group cursor-pointer`}
                  onClick={() => setSelectedContent(ele.name)}
                >
                  <div className="left xl:mb-0 lg:mb-4">
                    <h5 className="font-montserrate font-semibold text-xl">
                      {ele.name}
                    </h5>
                    <h3 className="font-montserrat font-normal">
                      {ele.dis} {ele.views}
                    </h3>
                  </div>
                  <div className="right">
                    <Image src={ele.image} alt="Restaurant" className="w-14" />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="mb-3 mt-7">
          {selectedContent === ContentType.USERS && (
            <User users={users} rowsPerPage={rowsPerPage} page={page} />
          )}
          {selectedContent === ContentType.RESTAURANTS && (
            <Restaurant
              restaurants={restaurantData}
              rowsPerPage={rowsPerPage}
              page={page}
            />
          )}
          {selectedContent === ContentType.VERIFIED_RESTAURANTS && (
            <Restaurant
              restaurants={verifiedResData}
              rowsPerPage={rowsPerPage}
              page={page}
            />
          )}
          {selectedContent && (
            <TablePagination
              rowsPerPageOptions={[0, 5, 10, 15, 20]}
              component="div"
              count={selectedContent === ContentType.USERS ? users.length : selectedContent === ContentType.RESTAURANTS ? restaurantData.length : selectedContent === ContentType.VERIFIED_RESTAURANTS ? verifiedResData.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </div>
      </div>
    </>
  );
}

Admin.getLayout = function getLayout(page) {
  return (
    <>
     {page}
    </>
  )
}