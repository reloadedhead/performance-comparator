import { Grid } from '@material-ui/core';
import React from 'react';
import { ArithmeticResults, GeometricResults, WeightedResults } from '../../components/result-card';
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
      <Grid item xs={6}>
        <WeightedResults />
      </Grid>
    </Grid>
  );
};

export default MainPage;
