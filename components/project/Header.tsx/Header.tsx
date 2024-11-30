import Link from "next/link";
import {
  TransformCaseFormatTypeProps,
  TransformCaseTypeProps,
} from "../lib/types";
import { transformCase } from "../lib/utils";

/**
 * HeaderProps defines the properties for the Header component.
 *
 * @property {string} title - The main title text to display in the header.
 * @property {TransformCaseFormatTypeProps} caseName - Format for the title transformation.
 * - `"small"`: Converts the title to lowercase.
 * - `"title"`: Capitalizes the first letter of each word.
 * - `"upper"`: Converts the title to uppercase.
 * - `"default"`: Leaves the title unchanged.
 * @property {boolean} [recentButton=true] - Whether to display the "Recent" button.
 */
type HeaderProps = {
  title: string;
  caseName: TransformCaseFormatTypeProps;
  recentButton?: boolean;
};

/**
 * Header Component
 *
 * Renders a sticky header with a formatted title and an optional "Recent" button.
 * The title is dynamically transformed based on the `caseName` prop using the `transformCase` utility.
 *
 * @param {HeaderProps} props - The props for the Header component.
 * @returns {JSX.Element} The rendered Header component.
 *
 * @example
 * <Header title="my blog" caseName="title" recentButton={false} />
 * // Output: A header with the title "My Blog" and no "Recent" button.
 *
 * <Header title="my blog" caseName="upper" />
 * // Output: A header with the title "MY BLOG" and a "Recent" button.
 */
const Header = ({
  title = "",
  caseName = "small",
  recentButton = true,
}: HeaderProps) => {
  /**
   * Prepare the transformation object for the `transformCase` utility.
   */
  const transformObject: TransformCaseTypeProps = {
    text: title,
    caseName: caseName,
  };

  /**
   * Transform the title according to the requested format.
   */
  title = transformCase(transformObject);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo or Title */}
        <Link href="/">
          <h1 className="text-xl font-bold">{title}</h1>
        </Link>
        {/* Optional Button or CTA */}
        {recentButton ? (
          <Link
            href="/posts/recent"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 font-bold text-xl shadow"
          >
            Recent
          </Link>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
