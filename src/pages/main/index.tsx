import { Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ResultCard from '../../components/result-card';
import BenchmarkTable from '../../components/table';
import { useBenchmarks } from '../../contexts/benchmarks';

const MainPage = () => {
  const { machines, benchmarks, getArithmeticMedian, getGeometricMedian } = useBenchmarks();
  const { t } = useTranslation();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <BenchmarkTable machines={machines} data={benchmarks} />
      </Grid>
      <Grid item xs={6}>
        <ResultCard
          title={t('main.results.arithmeticMedian')}
          results={machines.map(machineId => ({
            machineId,
            value: getArithmeticMedian(machineId),
          }))}
        />
      </Grid>
      <Grid item xs={6}>
        <ResultCard
          title={t('main.results.geometricMedian')}
          results={machines.map(machineId => ({ machineId, value: getGeometricMedian(machineId) }))}
        />
      </Grid>
    </Grid>
  );
};

export default MainPage;
