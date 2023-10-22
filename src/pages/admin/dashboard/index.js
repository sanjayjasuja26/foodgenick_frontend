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
import restaurant from '../../../../public/assets/images/restaurants.svg'
import user from '../../../../public/assets/images/users.svg'
import varified from '../../../../public/assets/images/varified.svg'
import Head from 'next/head'
export default function Admin() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isOpen, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [resdata, setResdata] = useState(null);
  const [verifideResdata, setVerifideResdata] = useState(null);
   const userCount = rows.data && rows.data && rows.data.length
   const dispatch = useDispatch()
  const userToggleForm = () => setOpen(!isOpen);
    //const hideSidebar = isOpen ? ' xl:w-3/2 lg:w-3/4 md:w-3/5' : ' xl:w-full lg:w-full md:w-full';
 //const hideSidebar = isOpen ? ' xl:w-3/2 lg:w-3/4 md:w-3/5' : ' xl:w-3/2 lg:w-3/4 md:w-3/5';

useEffect ( ()=>{
  fetch(`${constants.URLLOCAL}/user/getUser`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setRows(json)
      })
      getrestorantdata()
      getverifideRestorantdata()
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

const getrestorantdata = async() =>{
const data =  await dispatch(getRestaurantFunc())
if(data && data.payload && data.payload.data){
  setResdata(data.payload.data)
}
}
const getverifideRestorantdata = async() =>{
const data =  await dispatch(getVerifidRestaurantsFunc())
if(data && data.payload && data.payload.data){
  setVerifideResdata(data.payload.data)
}
}

const cardData=[
  {
    "id": 1,
    "image": restaurant,
    "name": "Restaurants",
    "dis": "Total",
    "views": `${resdata && resdata.length}`
  },
  {
    "id": 2,
    "image": varified,
    "name": "Verified Restaurants  ",
    "dis": "Total",
    "views": `${verifideResdata && verifideResdata.length}`
  },
  {
    "id": 3,
    "image":  user,
    "name": "Users",
    "dis": "Total",
    "views": `${userCount}`
  }
]



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
      <div className='content-area mt-4  md:pl-8 w-full'>
        <div className='title-section mb-5 bg-white rounded-xl shadow-light px-8 py-4 '>
          <h2 className='font-bold text-2xl text-orange'>Dashboard</h2>
          <p className='text-lightgrey text-16'>Welcome, Foodgienic</p>
        </div>
        <div className='flex justify-between gap-x-5 flex-shrink-none xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap'>
          {cardData && cardData.map((ele,index)=>{
            return(
              <div key={index} className='bg-white shadow-light rounded-xl card1 xl:w-1/2 w-full xl:mb-0 lg:mb-4 md:mb-5 sm:mb-5 mb-5 xs:mb-5 sm:p-7 p-5	 flex xl:flex-nowrap flex-wrap  justify-between md:text-start sm:justify-between justify-center hover:bg-blackLight ease-in duration-300 hover:ease-in group hover:text-white'>
                <div className='left xl:mb-0 lg:mb-4'>
                  <h5 className='font-montserrate font-semibold text-xl'>{ele.name}</h5>
                  <h3 className='font-montserrate text-lightgrey font-normal group-hover:text-white'>{ele.dis}</h3>
                </div>
                <div className='right'>
                  <Image src={ele.image} alt="Restaurant" className="w-14"/>
                </div>
            </div>
            )
          })}
        </div>
        <div className="mb-3 mt-7">
          <h3 className='font-bold text-2xl mb-4 text-orange'> Users</h3>
          <TableContainer component={Paper} className='shadow-none'>
          <div className="px-8 bg-white shadow-light rounded-xl py-7">
            <div className="overflow-y-scroll max-h-30">
              <Table sx={{ minWidth: 650 }} aria-label="simple table" className="overflow-x-scroll w-full">
                <TableHead>
                  <TableRow className="bg-grey-light1">
                    <TableCell className="font-semibold text-sm text-orange font-montserrate w-14	 text-left">Id</TableCell>
                    <TableCell className="font-semibold text-sm	text-orange font-montserrate text-left">First Name</TableCell>
                    <TableCell className="font-semibold text-sm	text-orange font-montserrate text-left" align="right">Last Name</TableCell>
                    <TableCell className="font-semibold text-sm	text-orange font-montserrate text-left" align="right">Email</TableCell>
                    <TableCell className="font-semibold text-sm	text-orange font-montserrate text-left" align="right">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows && rows.data && rows.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row ,index) => (
                    <TableRow className="odd:bg-white even:bg-grey-light1"
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="right" className="text-sm font-montserrate text-lightgrey w-14 text-left">{row.id}</TableCell>
                      <TableCell align="right" className="text-sm font-montserrate text-lightgrey  text-left">{row.firstname}</TableCell>
                      <TableCell align="right" className="text-sm font-montserrate text-lightgrey text-left whitespace-nowrap	overflow-hidden	text-ellipsis	max-w-md">{row.lastName}</TableCell>
                      <TableCell align="right" className="text-sm font-montserrate text-lightgrey text-left whitespace-nowrap	overflow-hidden	text-ellipsis	max-w-md">{row.email}</TableCell>
                      <TableCell align="right" className="text-sm font-montserrate text-lightgrey text-left">{moment(row.createdAt).format('DD-MM-YYYY')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
        <TablePagination
    rowsPerPageOptions={[0,5,10,15,20]}
    component="div"
    count={userCount}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />



        </div>

          </TableContainer>
        </div>
      </div>
    </>
  )
}

Admin.getLayout = function getLayout(page) {
  return (
    <>
     {page}
    </>
  )
}