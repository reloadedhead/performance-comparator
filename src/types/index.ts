export interface BenchmarkValues {
  [key: string]: number;
}

export type Benchmark = {
  id: string;
  values: BenchmarkValues;
};
