import React, { FunctionComponent } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import Looks5Icon from '@material-ui/icons/Looks5';
import Looks6Icon from '@material-ui/icons/Looks6';

const iconMap: { [key: number]: JSX.Element } = {
  0: <LooksOneIcon />,
  1: <LooksTwoIcon />,
  2: <Looks3Icon />,
  3: <Looks4Icon />,
  4: <Looks5Icon />,
  5: <Looks6Icon />,
};

interface ResultCardProps {
  values: number[];
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.primary.main,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    title: {
      color: '#fff',
    },
  })
);

const ResultCard: FunctionComponent<ResultCardProps> = ({ values, title }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        className={classes.header}
        title={
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" className={classes.title}>
            {'Para cada máquina'}
          </Typography>
        }
      />
      <CardContent>
        {values.map((value, index) => (
          <Chip
            key={`benchmark-chip-${index}`}
            icon={iconMap[index]}
            label={value.toFixed(2)}
            className={classes.chip}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
