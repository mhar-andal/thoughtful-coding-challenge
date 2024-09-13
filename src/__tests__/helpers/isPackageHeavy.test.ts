import { describe, it, expect } from 'vitest';
import { isPackageHeavy } from '../../helpers/isPackageHeavy';
import { MASS_THRESHOLD } from '../../constants/package';

describe('isPackageHeavy', () => {
  it('should return true for a package with mass equal to the threshold', () => {
    expect(isPackageHeavy(MASS_THRESHOLD)).toBe(true);
  });

  it('should return true for a package with mass above the threshold', () => {
    expect(isPackageHeavy(MASS_THRESHOLD + 1)).toBe(true);
  });

  it('should return false for a package with mass below the threshold', () => {
    expect(isPackageHeavy(MASS_THRESHOLD - 1)).toBe(false);
  });

  it('should return false for a package with zero mass', () => {
    expect(isPackageHeavy(0)).toBe(false);
  });

  it('should return false for a package with negative mass', () => {
    expect(isPackageHeavy(-10)).toBe(false);
  });
});
