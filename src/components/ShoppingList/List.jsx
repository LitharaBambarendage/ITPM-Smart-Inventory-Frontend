import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TAX_RATE = 0.10;

function ccyFormat(num) {
  return Number(num).toFixed(2);
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, weight, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, weight, qty, unit, price };
}

function subtotal(items) {
  return items.reduce((sum, { price }) => sum + price, 0);
}

const rows = [
  createRow('Maple Syrup', '200ml', 2, 350.56),
  createRow('Milk Powder', '400g', 3, 1050.50),
  createRow('Coffee', '200g', 2, 1020.89),
  createRow('Sugar', '1kg', 4, 240.69),
  createRow('Tea Bags', '200g', 3, 150.80),
  createRow('Chocolates', '', 4, 320.89),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceSubtotal + invoiceTaxes;

export default function SpanningTable() {
  return (
    <div><h1>Shopping List</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{ccyFormat(row.unit)}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)}%`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <strong>Total</strong>
            </TableCell>
            <TableCell align="right">
              <strong>{ccyFormat(invoiceTotal)}</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
