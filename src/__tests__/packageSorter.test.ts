import { expect, test, describe } from 'vitest';
import { sort, DispatchType } from '../packageSorter';

describe('Package Sorter', () => {
  const standardPackage = { width: 50, height: 50, length: 50, mass: 10 };
  const bulkyPackage = { width: 150, height: 50, length: 50, mass: 10 };
  const heavyPackage = { width: 50, height: 50, length: 50, mass: 25 };
  const bulkyAndHeavyPackage = { width: 150, height: 150, length: 150, mass: 25 };
  const largeVolumePackage = { width: 100, height: 100, length: 100, mass: 15 };

  test('should return STANDARD for a standard package', () => {
    const { width, height, length, mass } = standardPackage;
    expect(sort({ width, height, length }, mass)).toBe(DispatchType.STANDARD);
  });

  test('should return SPECIAL for a bulky package', () => {
    const { width, height, length, mass } = bulkyPackage;
    expect(sort({ width, height, length }, mass)).toBe(DispatchType.SPECIAL);
  });

  test('should return SPECIAL for a heavy package', () => {
    const { width, height, length, mass } = heavyPackage;
    expect(sort({ width, height, length }, mass)).toBe(DispatchType.SPECIAL);
  });

  test('should return REJECTED for a bulky and heavy package', () => {
    const { width, height, length, mass } = bulkyAndHeavyPackage;
    expect(sort({ width, height, length }, mass)).toBe(DispatchType.REJECTED);
  });

  test('should return SPECIAL for a package with large volume', () => {
    const { width, height, length, mass } = largeVolumePackage;
    expect(sort({ width, height, length }, mass)).toBe(DispatchType.SPECIAL);
  });
});