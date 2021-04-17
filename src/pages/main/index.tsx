import { Grid } from '@material-ui/core';
import React from 'react';
import ResultCard from '../../components/result-card';
import BenchmarkTable from '../../components/table';
import { useBenchmarks } from '../../contexts/benchmarks';

const MainPage = () => {
  const { machines, benchmarks, getArithmeticMedian, getGeometricMedian } = useBenchmarks();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <BenchmarkTable machines={machines} data={benchmarks} />
      </Grid>
      <Grid item xs={6}>
        <ResultCard
          title="Media Aritmética"
          values={machines.map(machineId => getArithmeticMedian(machineId))}
        />
      </Grid>
      <Grid item xs={6}>
        <ResultCard
          title="Media Geométrica"
          values={machines.map(machineId => getGeometricMedian(machineId))}
        />
      </Grid>
    </Grid>
  );
};

export default MainPage;
