import { removeAccents } from "./removeAccents";

/**
 * @param {String} string
 * @return {String}
 **/
export function generateCSSClass(string) {
  return removeAccents(string.toLowerCase()).replace(" ", "-");
}