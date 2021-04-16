/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Benchmark } from '../types';

interface BenchmarksContext {
  benchmarks: Benchmark[];
  machines: string[];
  addBenchmark: (newBenchmark: Benchmark) => void;
  deleteBenchmark: (benchmarkId: string) => void;
  deleteMachine: (machineId: string) => void;
  addMachine: (machineId: string, values: number[]) => void;
  getArithmeticMedian: (forMachine: string) => number;
}

const initialState: BenchmarksContext = {
  machines: ['Máquina A', 'Máquina B', 'Máquina C'],
  benchmarks: [
    { id: 'Benchmark 1', values: { 'Máquina A': 200, 'Máquina B': 150, 'Máquina C': 300 } },
    { id: 'Benchmark 2', values: { 'Máquina A': 100, 'Máquina B': 450, 'Máquina C': 50 } },
    { id: 'Benchmark 3', values: { 'Máquina A': 500, 'Máquina B': 50, 'Máquina C': 250 } },
  ],
  addBenchmark: (newBenchmark: Benchmark) => {},
  deleteBenchmark: (benchmarkId: string) => {},
  addMachine: (machineId: string, values: number[]) => {},
  deleteMachine: (machineId: string) => {},
  getArithmeticMedian: (forMachine: string) => 0,
};

const BenchmarksContext = createContext(initialState);

export const BenchmarksProvider = ({ children }: { children: ReactNode }) => {
  const [benchmarks, setBenchmarks] = useState<Benchmark[]>(initialState.benchmarks);
  const [machines, setMachines] = useState<string[]>(initialState.machines);

  const addBenchmark = (newBenchmark: Benchmark) =>
    setBenchmarks(benchs => [...benchs, newBenchmark]);

  const deleteBenchmark = (benchmarkId: string) =>
    setBenchmarks(benchs => [...benchs.filter(b => b.id !== benchmarkId)]);

  const addMachine = (machineId: string, values: number[]) => {
    setMachines(machines => [...machines, machineId]);
    setBenchmarks(benchmarks =>
      benchmarks.map((benchmark, index) => ({
        id: benchmark.id,
        values: { ...benchmark.values, [machineId]: values[index] },
      }))
    );
  };

  const deleteMachine = (machineId: string) => {
    setMachines(machines => machines.filter(machine => machine !== machineId));
    setBenchmarks(benchmarks =>
      benchmarks.map(benchmark => {
        const { [machineId]: _, ...filteredValues } = benchmark.values;
        return { id: benchmark.id, values: filteredValues };
      })
    );
  };

  const getArithmeticMedian = (forMachine: string) => 0;

  return (
    <BenchmarksContext.Provider
      value={{
        benchmarks,
        machines,
        addBenchmark,
        deleteBenchmark,
        addMachine,
        deleteMachine,
        getArithmeticMedian,
      }}
    >
      {children}
    </BenchmarksContext.Provider>
  );
};

export const useBenchmarks = () => useContext(BenchmarksContext);
