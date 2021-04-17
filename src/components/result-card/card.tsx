import React, { FunctionComponent } from 'react';
import { Card, CardHeader, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface ResultCardProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.primary.main,
    },
    title: {
      color: '#fff',
    },
  })
);

const ResultCard: FunctionComponent<ResultCardProps> = ({ title, children }) => {
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
      {children}
    </Card>
  );
};

export default ResultCard;
