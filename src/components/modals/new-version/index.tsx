import React, { FunctionComponent } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface NewVersionProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const NewVersion: FunctionComponent<NewVersionProps> = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const handleClose = () => setOpen(false);
  const handleReload = () => window.location.reload();

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>{t('modals.newVersion.title')}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">{t('modals.newVersion.body')}</Typography>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleReload}>
          {t('modals.newVersion.refresh')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewVersion;
