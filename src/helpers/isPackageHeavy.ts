import { MASS_THRESHOLD } from "../constants/package";

/**
 * Checks if a package is heavy based on its mass.
 * @param mass - The mass of the package in kilograms
 * @returns A boolean indicating whether the package is heavy
 */
export function isPackageHeavy(mass: number): boolean {
  return mass >= MASS_THRESHOLD;
}