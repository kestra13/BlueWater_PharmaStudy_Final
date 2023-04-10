import React, { useState } from 'react';
import {
    Modal,
    Box,
    Typography,
    Grid,
    Paper,
    TextField,
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Stack,
    CircularProgress,
  } from "@mui/material";


const Send_Samples = () => {
  return (
    <div>
        <div style={{textAlign: "center", marginTop: "10em"}}>


            <Table>

                <TableRow>
            <TableCell style={{fontSize: 30}}>Ongoing Study:  
                    <input style={{fontSize: 25, padding: 10, marginLeft: 10, borderRadius: 10}}
                        type="text"
                        id="input-box"
                        value={"Study Name"}
                        onChange={"adf"}
                />
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{fontSize: 30}}>Shipment History: 
                <input style={{fontSize: 25, padding: 10, marginLeft: 10, borderRadius: 10}}
                        type="text"
                        id="input-box"
                        value={"Shipping status"}
                        onChange={"adf"}
                />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{fontSize: 30}}>Drug Name: 
                <input style={{fontSize: 25, padding: 10, marginLeft: 10, borderRadius: 10}}
                        type="text"
                        id="input-box"
                        value={"Drug name/type"}
                        onChange={"adf"}
                />
                </TableCell>
              </TableRow>

            <h1>Placebo, batchNumber, and ID is for Vendia only.</h1>
              <TableRow>
                <TableCell style={{fontSize: 30}}>Placebo: 
                <input style={{fontSize: 25, padding: 10, marginLeft: 10, borderRadius: 10}}
                        type="text"
                        id="input-box"
                        value={"true/falses"}
                        onChange={"adf"}
                />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{fontSize: 30}}>Batch Number: 
                <input style={{fontSize: 25, padding: 10, marginLeft: 10, borderRadius: 10}}
                        type="text"
                        id="input-box"
                        value={"1-50"}
                        onChange={"adf"}
                />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{fontSize: 30}}>ID: 
                <input style={{fontSize: 25, padding: 10, marginLeft: 10, borderRadius: 10}}
                        type="text"
                        id="input-box"
                        value={"Ex. 45678"}
                        onChange={""}
                />
                </TableCell>
              </TableRow>


            </Table>

            <Button style={{fontSize: 30, padding: 40, border: "2px solid black", margin: 50}}>Confirm to Order Shipment</Button>

            <p>Vendia part not added. Design only.</p>
        </div>
    </div>
  )
}

export default Send_Samples