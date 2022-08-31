import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: '2px solid rgba(255,255,255,1)',
  borderRadius: 20,
  margin: 10,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0095F6',
    color: theme.palette.common.white,
    fontSize: 21,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  border: 0,

  marginBottom: 5,
  '&:nth-of-type(odd)': {
    backgroundColor: '#F2F2F2',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#FaFaFa',
  },
}));

export function createRow(arr, id) {
  return { row: arr.map((i) => ({ value: i })), id };
}

const TableBasic = ({ data }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 450, maxWidth: 650 }} aria-label='simple table'>
      <TableHead>
        <StyledTableRow>
          {data.labels.map((label) => (
            <StyledTableCell align='center' key={label}>
              <span className='font-bold'>{label}</span>
            </StyledTableCell>
          ))}
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {data.rows.map((row) => (
          <StyledTableRow key={row.id}>
            {row.row.map((cell) => (
              <StyledTableCell align='center' key={cell.value}>
                {cell.value}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TableBasic;
