/**
 * Transforms a given text into a specified case format.
 *
 * This function leverages a unique and extensible approach by using an
 * object literal (`formatters`) as a lookup table for different case transformations.
 * Each key in the object corresponds to a specific formatting type, allowing for
 * clean and efficient mapping of the `caseName` parameter to its respective logic.
 *
 * @param {Object} params - The input parameters.
 * @param {string} params.text - The sentence or word to transform.
 * @param {"small"|"title"|"upper"} params.caseName - The desired case transformation.
 * - `small`: Converts the text to lowercase.
 * - `title`: Converts each word to "Title Case" (only the first letter capitalized).
 * - `upper`: Converts the text to uppercase.
 *
 * @returns {string} - The transformed text.
 *
 * @throws {Error} Throws an error if an invalid `caseName` is provided.
 *
 * @example
 * transformCase({ text: "my blog", caseName: "title" });
 * // Output: "My Blog"
 *
 * @example
 * transformCase({ text: "my blog", caseName: "upper" });
 * // Output: "MY BLOG"
 *
 * @example
 * transformCase({ text: "my blog", caseName: "small" });
 * // Output: "my blog"
 */

import { TransformCaseTypeProps } from "./types";

export const transformCase = ({ text, caseName }: TransformCaseTypeProps) => {
  /**
   * A lookup table for case transformation logic.
   * This pattern avoids multiple conditional branches (`if`/`switch`) and ensures
   * a modular design where adding new case formats requires minimal changes.
   */
  const formatters: Record<string, () => string> = {
    small: () => text.toLocaleLowerCase(),
    title: () =>
      text
        .split(" ")
        .map(
          (word) => word.toLowerCase().charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" "),
    upper: () => text.toUpperCase(),
    default: () => text,
  };

  // Lookup the transformation logic using the `caseName` key.
  const transform = formatters[caseName];

  // Handle invalid case formats.
  if (!transform) {
    throw new Error(
      `Invalid format: "${caseName}". Allowed formats are: ${Object.keys(
        formatters
      ).join(", ")}`
    );
  }

  // Execute the transformation function and return the result.
  return transform();
};
