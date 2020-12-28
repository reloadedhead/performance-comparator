import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Benchmark } from '../../types';
import TableToolbar from './table-toolbar';

interface TableProps {
  data: Benchmark[];
  machines: string[];
}

export default function BenchmarkTable({ data, machines }: TableProps) {
  return (
    <TableContainer component={Paper}>
      <TableToolbar />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {machines.map(machine => (
              <TableCell key={machine} align="center">
                {machine}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((benchmark, index) => (
            <TableRow key={`benchmark-${index}`}>
              {benchmark.map(value => (
                <TableCell key={value} align="center">
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
