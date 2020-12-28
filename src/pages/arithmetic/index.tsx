import React from 'react';
import BenchmarkTable from '../../components/table';
import { useBenchmarks } from '../../contexts/benchmarks';

const ArithmeticPage = () => {
  const { machines, benchmarks } = useBenchmarks();
  return <BenchmarkTable machines={machines} data={benchmarks} />;
};

export default ArithmeticPage;
