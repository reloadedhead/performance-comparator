import { Grid } from '@material-ui/core';
import React from 'react';
import ResultCard from '../../components/result-card';
import BenchmarkTable from '../../components/table';
import { useBenchmarks } from '../../contexts/benchmarks';

const ArithmeticPage = () => {
  const { benchmarks, getArithmeticMedian } = useBenchmarks();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <BenchmarkTable machines={benchmarks.map((_, i) => `Máquina ${i}`)} data={benchmarks} />
      </Grid>
      <Grid item xs={12}>
        <ResultCard
          title="Media Aritmética"
          values={benchmarks.map((_, i) => getArithmeticMedian(i))}
        />
      </Grid>
    </Grid>
  );
};

export default ArithmeticPage;
