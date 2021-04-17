import { Grid } from '@material-ui/core';
import React from 'react';
import { ArithmeticResults, GeometricResults } from '../../components/result-card';
import BenchmarkTable from '../../components/table';
import { useBenchmarks } from '../../contexts/benchmarks';

const MainPage = () => {
  const { machines, benchmarks } = useBenchmarks();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <BenchmarkTable machines={machines} data={benchmarks} />
      </Grid>
      <Grid item xs={6}>
        <ArithmeticResults />
      </Grid>
      <Grid item xs={6}>
        <GeometricResults />
      </Grid>
      {/* <Grid item xs={6}>
        <ResultCard
          title={t('main.results.geometricMedian')}
          results={machines.map(machineId => ({ machineId, value: getGeometricMedian(machineId) }))}
        />
      </Grid> */}
    </Grid>
  );
};

export default MainPage;
