import { makeStyles, Theme, createStyles, CssBaseline, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import NewVersion from '../modals/new-version';
import Header from './header';
import ContentRouter from './router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const AppShell = () => {
  const classes = useStyles();
  const [isNewVersionOpen, setIsNewVersionOpen] = useState(false);

  const handleOpenNewVersionModal = () => setIsNewVersionOpen(true);

  document.addEventListener('new-version', handleOpenNewVersionModal);

  return (
    <div>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <Toolbar />
        <ContentRouter />
      </main>
      <NewVersion open={isNewVersionOpen} setOpen={setIsNewVersionOpen} />
    </div>
  );
};

export default AppShell;
