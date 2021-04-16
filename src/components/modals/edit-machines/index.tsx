import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import { useBenchmarks } from '../../../contexts/benchmarks';
import DeleteIcon from '@material-ui/icons/Delete';

interface EditMachinesProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface MachineItemProps {
  machineId: string;
}

const EditMachines: FunctionComponent<EditMachinesProps> = ({ open, setOpen }) => {
  const { machines, deleteMachine } = useBenchmarks();
  const [isAddingNewMachine, setIsAddingNewMachine] = useState(false);
  const handleClose = () => setOpen(false);

  const handleDeleteMachine = (machineId: string) => deleteMachine(machineId);

  const MachineItem: FunctionComponent<MachineItemProps> = ({ machineId }) => (
    <ListItem>
      <ListItemText>{machineId}</ListItemText>
      <ListItemSecondaryAction>
        <Tooltip title="Eliminar">
          <IconButton onClick={() => handleDeleteMachine(machineId)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>{'Editar Máquinas'}</DialogTitle>
      <DialogContent>
        <List>
          {machines.map(machineId => (
            <MachineItem key={`listItem-machine-${machineId}`} machineId={machineId} />
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditMachines;
