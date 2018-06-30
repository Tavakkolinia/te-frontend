import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import './table.scss';

const TableResults = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Property Type</TableCell>
        <TableCell className="percentage">Coverage</TableCell>
        <TableCell className="price">Savings</TableCell>
        <TableCell>Contact</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      <TableRow className="columns">
        <TableCell>Small House</TableCell>
        <TableCell>25%</TableCell>
        <TableCell>£3000</TableCell>
        <TableCell>
          <button type="button" className="button">Enquire</button>


        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Big House</TableCell>
        <TableCell>50%</TableCell>
        <TableCell>£4500</TableCell>
        <TableCell><button type="submit" className="button">Enquire</button></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Warehouse</TableCell>
        <TableCell>100%</TableCell>
        <TableCell>£5600</TableCell>
        <TableCell><button type="submit" className="button">Enquire</button></TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default TableResults;
