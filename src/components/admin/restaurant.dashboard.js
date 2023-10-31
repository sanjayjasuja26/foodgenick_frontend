import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import moment from "moment/moment";

const Restaurant = ({ restaurants, rowsPerPage, page }) => {
    console.log({ restaurant: restaurants[0] });
  return (
    <div className="mb-3 mt-7">
      <h3 className="font-bold text-2xl mb-4 text-orange"> Restaurants</h3>
      <TableContainer component={Paper} className="shadow-none">
        <div className="px-8 bg-white shadow-light rounded-xl py-7">
          <div className="overflow-y-scroll max-h-30">
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
                    Name
                  </TableCell>
                  <TableCell
                    className="font-semibold text-sm	text-orange font-montserrate text-left"
                    align="right"
                  >
                    Restaurant
                  </TableCell>
                  <TableCell
                    className="font-semibold text-sm	text-orange font-montserrate text-left"
                    align="right"
                  >
                    City
                  </TableCell>
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
                    Address
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  restaurants &&
                  restaurants
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
                            {row.restaurantname}
                          </TableCell>
                          <TableCell
                            align="right"
                            className="text-sm font-montserrate text-lightgrey text-left whitespace-nowrap	overflow-hidden	text-ellipsis	max-w-md"
                          >
                            {row.city}
                          </TableCell>
                          <TableCell
                            align="right"
                            className="text-sm font-montserrate text-lightgrey text-left whitespace-nowrap	overflow-hidden	text-ellipsis	max-w-md"
                          >
                            {row.phone}
                          </TableCell>
                          <TableCell
                            align="right"
                            className="text-sm font-montserrate text-lightgrey text-left whitespace-nowrap	overflow-hidden	text-ellipsis	max-w-md"
                          >
                            {row.streetAddress}
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
  );
};

export default Restaurant;
