/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Benchmark } from '../types';

interface BenchmarksContext {
  numberOfMachines: number;
  benchmarks: Benchmark[];
  addBenchmark: (newBench: Benchmark) => void;
  deleteBenchmark: (bench: number) => void;
  getArithmeticMedian: (forMachine: number) => number;
}

const initialState: BenchmarksContext = {
  numberOfMachines: 3,
  benchmarks: [],
  addBenchmark: (_newBench: Benchmark) => {},
  deleteBenchmark: (_bench: number) => {},
  getArithmeticMedian: (forMachine: number) => 0,
};

const BenchmarksContext = createContext(initialState);

export const BenchmarksProvider = ({ children }: { children: ReactNode }) => {
  const [numberOfMachines, setNumberOfMachines] = useState(3);
  const [benchmarks, setBenchmarks] = useState([
    [100, 50, 150],
    [200, 150, 50],
    [400, 700, 400],
  ]);

  const addBenchmark = (newBench: Benchmark) => setBenchmarks(b => [...b, newBench]);

  const deleteBenchmark = (benchmarkNumber: number) =>
    setBenchmarks(b => b.filter((_, i) => i !== benchmarkNumber));

  const getArithmeticMedian = (forMachine: number) => {
    let median = 0;
    benchmarks.forEach(b => {
      median += b[forMachine];
    });
    return median / benchmarks.length;
  };

  return (
    <BenchmarksContext.Provider
      value={{ addBenchmark, deleteBenchmark, benchmarks, numberOfMachines, getArithmeticMedian }}
    >
      {children}
    </BenchmarksContext.Provider>
  );
};

export const useBenchmarks = () => useContext(BenchmarksContext);
