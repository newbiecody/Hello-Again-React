import { useEffect } from "react";

export const triggerCbOnInterval = (cb: () => void, delay: number = 1000) => {
  useEffect(() => {
    const interval = setInterval(() => {
      cb();
    }, delay);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [cb, delay]);
};

export const convertCentsToDollars = (cents: number) => cents > 0 ? (cents / 100).toFixed(2) : null;

export const joinArrayWithItem = (array: unknown[], separator: unknown) => {
  return array.reduce((acc: unknown[], curr, index) => {
    if (index < array.length - 1) {
      acc.push(curr, separator);
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}