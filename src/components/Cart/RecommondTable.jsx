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
  createData('Pumpkin', '1kg', 5, 'Available'),   
  createData('Ginger', '', null, 'Not Available'), 
  createData('Cinnamon', '100g', 4, 'Available'),  
  createData('Maple Syrup', '', null, 'Not Available'), 
];

export default function BasicTable() {
  return (
    <div>
      <h3>Recommendations</h3>

      <TableContainer 
        component={Paper} 
        style={{ 
          boxShadow: '0px 13px 20px 0px rgba(128, 128, 128, 0.27)', 
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Table 
          sx={{ 
            width: '100%', 
            tableLayout: 'fixed', 
          }} 
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '40%', padding: '4px 8px' }}>Item</TableCell> 
              <TableCell align="center" style={{ width: '30%', padding: '4px 8px' }}>Weight</TableCell>
              <TableCell align="center" style={{ width: '30%', padding: '4px 8px' }}>Available Amount</TableCell>
              <TableCell align="center" style={{ width: '30%', padding: '4px 8px' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.product}
                sx={
                  row.status === 'Not Available' 
                    ? { backgroundColor: 'rgba(255, 158, 145, 0.5)' } 
                    : {} // No special styling for Available rows
                }
              >
                <TableCell component="th" scope="row" style={{ padding: '4px 8px' }}>
                  {row.product}
                </TableCell>
                <TableCell align="center" style={{ padding: '4px 8px' }}>
                  {row.weight || null}
                </TableCell>
                <TableCell align="center" style={{ padding: '4px 8px' }}>
                  {row.amount !== null ? row.amount : null}
                </TableCell>
                <TableCell align="center" style={{ padding: '6px 8px', color: row.status === 'Not Available' ? 'red' : 'green' }}>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
