export interface BenchmarkValues {
  [key: string]: number;
}

export type Benchmark = {
  id: string;
  values: BenchmarkValues;
};

export type Option = {
  label: string;
  handler?: () => void;
  component: 'a' | 'button';
  href?: string;
};
