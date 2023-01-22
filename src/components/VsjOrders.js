import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VsjTitle from './VsjTitle';

// Generate Order Data
function createData(id, bookname, subject, author,type, link) {
  
  link = <a target="vsj" href={link}>Purchase</a>;
  return {id,  bookname, subject, author,type, link };
}

const rows = [
  createData(
    1,
    
    'The Recursion Sutras',
    'Recursion',
    'Champak Roy',
    'Ebook',
    'https://www.amazon.in/Recursion-Sutras-Structures-Recursion-Iterative-ebook/dp/B079QJLD73'
  ),
  createData(
    2,
    'Object Oriented Programing in Java',
    'Object Oriented Programming',
    'Champak Roy',
    'Ebook',
    'https://www.amazon.in/gp/product/B07SRQ8JJ5/'
  ),
  createData(
    3,
    
    'The Recursion Sutras',
    'Recursion',
    'Champak Roy',
    'Paperback',
    'https://www.amazon.in/Recursion-Sutras-Structures-Recursion-Programming/dp/198025026X/'
  ),
  createData(
    4,
    'Object Oriented Programing in Java',
    'Object Oriented Programming',
    'Champak Roy',
    'Paperback',
    'https://www.amazon.in/How-Object-Oriented-Programing-Illustrating/dp/1072916371/'
  ),

];

function preventDefault(event) {
  event.preventDefault();
}

export default function VsjsOrders() {
  return (
    <React.Fragment>
      <VsjTitle>Latest Book Sales</VsjTitle>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>SNo</TableCell>
            <TableCell>Book Name</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Link</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.bookname}</TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.link}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}