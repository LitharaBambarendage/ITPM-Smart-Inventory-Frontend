import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Table/Table.css';

function createData(product, weight, amount, status) {
  return { product, weight, amount, status };
}

const rows = [
  createData('Frozen yoghurt', '500g', 15, 'Available'),
  createData('Ice cream', '1L', 7, 'Available'),
  createData('Butter', '500g', 20, 'Available'),
  createData('Milk Powder', '400g', 0, 'Not Available'),
  createData('Coffee', '200g', 5, 'Available'),
  createData('Sugar', '1kg', 8, 'Available'),
  createData('Tea Bags', '200g', 10, 'Available'),
  createData('Chocolates', '300g', 3, 'Not Available'),
];

export default function BasicTable() {
  return (
    <div>
      <h3>Predicted Stock List</h3>

      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px rgba(128, 128, 128, 0.27)' }}>
        <Table sx={{ minWidth: 650 }} aria-label="predicted stock table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="center">Weight</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.product}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  // Reduce row padding for tighter spacing
                  padding: '8px 0', 
                }}
              >
                <TableCell 
                  component="th" 
                  scope="row" 
                  style={{ padding: '8px 16px', lineHeight: '1.2' }}
                >
                  {row.product}
                </TableCell>
                <TableCell 
                  align="center" component="th" scope="row"
                  style={{ padding: '8px 16px', lineHeight: '1.2' }}
                >
                  {row.weight}
                </TableCell>
                <TableCell 
                  align="center" component="th" scope="row"
                  style={{ padding: '8px 16px', lineHeight: '1.2' }}
                >
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
