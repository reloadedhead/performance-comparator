import React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import FunctionsIcon from '@material-ui/icons/Functions';
import ClassIcon from '@material-ui/icons/Class';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const Sidebar = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const pages = [
    { title: t('sidebar.item.arithmetic'), link: '/aritmetica' },
    { title: t('sidebar.item.weighted'), link: '/aritmetica-ponderada' },
    { title: t('sidebar.item.geometric'), link: '/geometrica' },
  ];

  if (isMobile) return null;
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {pages.map(page => (
            <ListItem
              selected={location.pathname === page.link}
              button
              key={page.link}
              onClick={() => history.push(page.link)}
            >
              <ListItemIcon>
                <FunctionsIcon />
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              window.location.href = 'http://arqui2.alumnos.exa.unicen.edu.ar/';
            }}
          >
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary={t('sidebar.item.class')} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
