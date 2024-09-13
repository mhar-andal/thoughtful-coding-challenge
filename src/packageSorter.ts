import { DIMENSION_THRESHOLD, VOLUME_THRESHOLD } from "./constants/package";
import { isPackageHeavy } from "./helpers/isPackageHeavy";
import { isPackageBulky } from "./helpers/isPackageBulky";

// Define the dispatch type as an enum
export enum DispatchType {
  STANDARD = 'STANDARD',
  SPECIAL = 'SPECIAL',
  REJECTED = 'REJECTED'
}

/**
 * Represents the dimensions of a package in centimeters.
 */
export interface PackageDimensions {
  width: number;
  height: number;
  length: number;
}

/**
 * Sorts packages based on their dimensions and mass.
 * @param dimensions - An object containing the package dimensions in centimeters
 * @param mass - The mass of the package in kilograms
 * @returns The DispatchType indicating where the package should be dispatched
 */
export function sort(dimensions: PackageDimensions, mass: number): DispatchType {
  const isBulky = isPackageBulky(dimensions.width, dimensions.height, dimensions.length);
  const isHeavy = isPackageHeavy(mass);

  if (isBulky && isHeavy) {
    return DispatchType.REJECTED;
  } else if (isBulky || isHeavy) {
    return DispatchType.SPECIAL;
  } else {
    return DispatchType.STANDARD;
  }
}
