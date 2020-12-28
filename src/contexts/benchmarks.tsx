/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Benchmark } from '../types';

interface BenchmarksContext {
  machines: string[];
  addMachine: (newMachine: string) => void;
  deleteMachine: (machine: string) => void;
  benchmarks: Benchmark[];
  addBenchmark: (newBench: Benchmark) => void;
  deleteBenchmark: (bench: number) => void;
}

const initialState: BenchmarksContext = {
  machines: [],
  addMachine: (_newMachine: string) => {},
  deleteMachine: (_machine: string) => {},
  benchmarks: [],
  addBenchmark: (_newBench: Benchmark) => {},
  deleteBenchmark: (_bench: number) => {},
};

const BenchmarksContext = createContext(initialState);

export const BenchmarksProvider = ({ children }: { children: ReactNode }) => {
  const [machines, setMachines] = useState(['Máquina A', 'Máquina B', 'Máquina C']);
  const [benchmarks, setBenchmarks] = useState([
    [100, 50, 150],
    [200, 150, 50],
    [400, 700, 400],
  ]);

  const addMachine = (newMachine: string) => setMachines(m => [...m, newMachine]);

  const addBenchmark = (newBench: Benchmark) => setBenchmarks(b => [...b, newBench]);

  const deleteBenchmark = (benchmarkNumber: number) =>
    setBenchmarks(b => b.filter((_, i) => i !== benchmarkNumber));

  const deleteMachine = (machine: string) => setMachines(m => m.filter(_ => _ !== machine));

  return (
    <BenchmarksContext.Provider
      value={{ addBenchmark, addMachine, deleteBenchmark, deleteMachine, machines, benchmarks }}
    >
      {children}
    </BenchmarksContext.Provider>
  );
};

export const useBenchmarks = () => useContext(BenchmarksContext);
