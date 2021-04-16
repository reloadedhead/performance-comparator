import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Benchmark } from '../../types';
import TableToolbar, { ToolbarAction } from './table-toolbar';
import SettingsIcon from '@material-ui/icons/Settings';
import EditMachines from '../modals/edit-machines';
import EditMenu from '../menus/edit-menus';
import EditBenchmarks from '../modals/edit-benchmarks';

interface TableProps {
  data: Benchmark[];
  machines: string[];
}

export default function BenchmarkTable({ data, machines }: TableProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openEditMachines, setOpenEditMachines] = useState(false);
  const [openEditBenchmarks, setOpenEditBenchmarks] = useState(false);

  const handleCloseEditMenu = () => setAnchorEl(null);
  const handleOpenEditMachines = () => {
    setOpenEditMachines(true);
    handleCloseEditMenu();
  };
  const handleOpenEditBenchmarks = () => {
    setOpenEditBenchmarks(true);
    handleCloseEditMenu();
  };

  const handleOpenEditPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const editMenuOptions = [
    { label: 'Editar Máquinas', handler: handleOpenEditMachines },
    { label: 'Editar Benchmarks', handler: handleOpenEditBenchmarks },
  ];

  const toolbardActions: ToolbarAction[] = [
    { title: 'Editar', icon: <SettingsIcon />, handler: handleOpenEditPopover },
  ];

  return (
    <TableContainer component={Paper}>
      <TableToolbar actions={toolbardActions} />
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
          {data.map(benchmark => (
            <TableRow key={`benchmark-${benchmark.id}`}>
              {Object.values(benchmark.values).map(value => (
                <TableCell key={value} align="center">
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditMenu anchorEl={anchorEl} handleClose={handleCloseEditMenu} options={editMenuOptions} />
      <EditMachines open={openEditMachines} setOpen={setOpenEditMachines} />
      <EditBenchmarks open={openEditBenchmarks} setOpen={setOpenEditBenchmarks} />
    </TableContainer>
  );
}
