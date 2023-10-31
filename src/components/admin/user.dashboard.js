import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import Paper from "@mui/material/Paper";
import moment from "moment/moment";

const Users = ({ users, rowsPerPage, page, title }) => {
  return (
    <div className="mb-3 mt-7">
      <h3 className="font-bold text-2xl mb-4 text-orange">{title}</h3>
      <TableContainer component={Paper} className="shadow-none">
        <div className="px-8 bg-white shadow-light rounded-xl py-7">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="overflow-x-scroll w-full"
            >
              <TableHead>
                <TableRow className="bg-grey-light1">
                  <TableCell className="font-semibold text-sm text-orange font-montserrate w-14	 text-left">
                    Id
                  </TableCell>
                  <TableCell className="font-semibold text-sm	text-orange font-montserrate text-left">
                    First Name
                  </TableCell>
                  <TableCell
                    className="font-semibold text-sm	text-orange font-montserrate text-left"
                    align="right"
                  >
                    Last Name
                  </TableCell>
                  <TableCell
                    className="font-semibold text-sm	text-orange font-montserrate text-left"
                    align="right"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    className="font-semibold text-sm	text-orange font-montserrate text-left"
                    align="right"
                  >
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  users &&
                  users
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        className="odd:bg-white even:bg-grey-light1"
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          align="right"
                          className="text-sm font-montserrate text-lightgrey w-14 text-left"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="text-sm font-montserrate text-lightgrey  text-left"
                        >
                          {row.firstname}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="text-sm font-montserrate text-lightgrey text-left whitespace-nowrap	overflow-hidden	text-ellipsis	max-w-md"
                        >
                          {row.lastName}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="text-sm font-montserrate text-lightgrey text-left whitespace-nowrap	overflow-hidden	text-ellipsis	max-w-md"
                        >
                          {row.email}
                        </TableCell>
                        <TableCell
                          align="right"
                          className="text-sm font-montserrate text-lightgrey text-left"
                        >
                          {moment(row.createdAt).format("DD-MM-YYYY")}
                        </TableCell>
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
        </div>
      </TableContainer>
    </div>
  );
};

export default Users