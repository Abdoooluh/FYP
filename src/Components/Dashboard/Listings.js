import React, { useState } from "react";
import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableFooter,
   TableHead,
   TableRow,
   TablePagination,
} from "@mui/material";
import "./Listings.css";

let y = [];
for (let i = 0; i < 10; i++) {
   let x = {
      Id: i + 1,
      Name: `Item ${i + 1}`,
      inStock: i % 2,
      unitQuantity: i % 2 ? "10 pcs" : "1 Kg",
      unitCost: i * 10,
   };
   y.push(x);
}

const Listing = () => {
   const [listingData, setListingData] = useState(y);
   const [seller, setSeller] = useState("Seller Name");
   const [rowsPerPage, setRowsPerPage] = React.useState(5);
   const [page, setPage] = React.useState(0);

   const handleChangePage = (e, newpage) => {
      setPage(newpage);
   };

   const handleChangeRowsPerPage = (e) => {
      setRowsPerPage(parseInt(e.target.value, 10));
      setPage(0);
   };

   return (
      <div>
         <div>
            <TableContainer className="TableContainer">
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell className="TableHeadRow">
                           Listing ID
                        </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>In Stock</TableCell>
                        <TableCell>Unit Quantity</TableCell>
                        <TableCell>Unit Cost</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {(rowsPerPage > 0
                        ? listingData.slice(
                             page * rowsPerPage,
                             page * rowsPerPage + rowsPerPage
                          )
                        : listingData
                     ).map((listing) => (
                        <TableRow>
                           <TableCell>{listing.Id}</TableCell>
                           <TableCell>{listing.Name}</TableCell>
                           <TableCell>{listing.inStock}</TableCell>
                           <TableCell>{listing.unitQuantity}</TableCell>
                           <TableCell>{listing.unitCost}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
                  <TableFooter>
                     <TableRow>
                        <TablePagination
                           rowsPerPageOptions={[
                              5,
                              10,
                              25,
                              { label: "All", value: -1 },
                           ]}
                           count={listingData.length}
                           rowsPerPage={rowsPerPage}
                           page={page}
                           SelectProps={{
                              inputProps: {
                                 "aria-label": "rows per page",
                              },
                              native: true,
                           }}
                           onPageChange={handleChangePage}
                           onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                     </TableRow>
                  </TableFooter>
               </Table>
            </TableContainer>
         </div>
      </div>
   );
};

export default Listing;
