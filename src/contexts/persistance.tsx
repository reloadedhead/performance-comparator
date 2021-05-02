/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, FunctionComponent, useContext } from 'react';

interface PersistanceContext {
  persist: (key: string, value: unknown) => void;
  retrieve: (key: string) => unknown | null;
  remove: (key: string) => void;
}

const PersistanceContext = createContext<PersistanceContext>({
  persist: () => {},
  retrieve: () => new Promise(() => {}),
  remove: () => {},
});

export const PersistanceProvider: FunctionComponent = ({ children }) => {
  const persist = (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value));

  const retrieve = (key: string) => {
    const retrieved = localStorage.getItem(key);
    return retrieved ? (JSON.parse(retrieved) as unknown) : null;
  };

  const remove = (key: string) => localStorage.removeItem(key);

  return (
    <PersistanceContext.Provider value={{ persist, retrieve, remove }}>
      {children}
    </PersistanceContext.Provider>
  );
};

export const usePersistance = () => useContext(PersistanceContext);
