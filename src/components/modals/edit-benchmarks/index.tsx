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
import React, { FunctionComponent } from 'react';
import { useBenchmarks } from '../../../contexts/benchmarks';
import DeleteIcon from '@material-ui/icons/Delete';

interface EditBenchmarksProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface BenchmarkItemProps {
  benchmarkId: string;
}

const EditBenchmarks: FunctionComponent<EditBenchmarksProps> = ({ open, setOpen }) => {
  const { benchmarks, deleteBenchmark } = useBenchmarks();
  const handleClose = () => setOpen(false);

  const handleDeleteBenchmark = (benchmarkId: string) => deleteBenchmark(benchmarkId);

  const BenchmarkItem: FunctionComponent<BenchmarkItemProps> = ({ benchmarkId }) => (
    <ListItem>
      <ListItemText>{benchmarkId}</ListItemText>
      <ListItemSecondaryAction>
        <Tooltip title="Eliminar">
          <IconButton onClick={() => handleDeleteBenchmark(benchmarkId)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>{'Editar Benchmarks'}</DialogTitle>
      <DialogContent>
        <List>
          {benchmarks.map(benchmark => (
            <BenchmarkItem key={`listItem-benchmark-${benchmark.id}`} benchmarkId={benchmark.id} />
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

export default EditBenchmarks;
