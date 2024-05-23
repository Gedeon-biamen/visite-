import { increment } from "./increment";

Test('test increment function', () => {
    expert(increment(1)).toBe(2)
    expert(increment(42)).toBe(43)
    expert(increment(-41)).toBe(41)
})