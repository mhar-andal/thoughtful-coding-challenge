import { describe, it, expect } from 'vitest';
import { isPackageBulky } from '../../helpers/isPackageBulky';
import { DIMENSION_THRESHOLD, VOLUME_THRESHOLD } from '../../constants/package';

describe('isPackageBulky', () => {
  it('should return true when volume is greater than or equal to VOLUME_THRESHOLD', () => {
    const width = 10;
    const height = 10;
    const length = Math.ceil(VOLUME_THRESHOLD / (width * height));
    expect(isPackageBulky(width, height, length)).toBe(true);
  });

  it('should return true when any dimension is greater than or equal to DIMENSION_THRESHOLD', () => {
    expect(isPackageBulky(DIMENSION_THRESHOLD, 10, 10)).toBe(true);
    expect(isPackageBulky(10, DIMENSION_THRESHOLD, 10)).toBe(true);
    expect(isPackageBulky(10, 10, DIMENSION_THRESHOLD)).toBe(true);
  });

  it('should return false when volume is less than VOLUME_THRESHOLD and all dimensions are less than DIMENSION_THRESHOLD', () => {
    const width = Math.floor(DIMENSION_THRESHOLD / 2);
    const height = Math.floor(DIMENSION_THRESHOLD / 2);
    const length = Math.floor(VOLUME_THRESHOLD / (width * height) / 2);
    expect(isPackageBulky(width, height, length)).toBe(false);
  });
});

