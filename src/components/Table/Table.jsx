import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';
// import { colors } from '@mui/material';
// import { green } from '@mui/material/colors';

function createData(product, weight, amount, status) {
  return { product, weight, amount, status };
}

const rows = [
  createData('Frozen yoghurt', '', 10, 'Available'),
  createData('Ice cream', '1L', 0, 'Not Available'),
  createData('Butter', '500g', 2, 'Available'),
  createData('Milk Powder', '400g', 0, 'Not Available'),
  createData('Coffee', '200g', 1, 'Available'),
];

const makeStyles=(status)=>{
    if(status === 'Available')
    {
        return{
            background: "rgba(182, 255, 145, 0.53)",
            color: 'green',
        }
    }
    else if(status === 'Not Available')
        {
            return{
                background: "rgba(255, 158, 145, 0.5)",
                color: 'red',
            }
        }
        
}

export default function BasicTable() {
  return (
    <div>
        <h3>My Stock</h3>
   
    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px rgba(128, 128, 128, 0.27)'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="center">Weight</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
             component="th" scope="row"
              key={row.product}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell align="center" component="th" scope="row">{row.weight}</TableCell>
              <TableCell align="center" component="th" scope="row">{row.amount}</TableCell>
              <TableCell align="center" component="th" scope="row">
                <span className="status" style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
