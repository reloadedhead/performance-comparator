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
import { Result } from '../../types';
import { useTranslation } from 'react-i18next';

interface ResultCardProps {
  results: Result[];
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

const ResultCard: FunctionComponent<ResultCardProps> = ({ results, title }) => {
  const classes = useStyles();
  const { t } = useTranslation();
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
            {t('main.results.subtitle')}
          </Typography>
        }
      />
      <CardContent>
        {results.map(result => (
          <Chip
            key={`benchmark-chip-${result.machineId}`}
            label={`${result.machineId}: ${result.value.toFixed(2)}`}
            className={classes.chip}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
