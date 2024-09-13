import { DIMENSION_THRESHOLD, VOLUME_THRESHOLD } from "../constants/package";

/**
 * Checks if a package is bulky based on its dimensions.
 * @param width - The width of the package in centimeters
 * @param height - The height of the package in centimeters
 * @param length - The length of the package in centimeters
 * @returns A boolean indicating whether the package is bulky
 */
export function isPackageBulky(width: number, height: number, length: number): boolean {
  const volume = width * height * length;
  return volume >= VOLUME_THRESHOLD || Math.max(width, height, length) >= DIMENSION_THRESHOLD;
}
