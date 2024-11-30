/**
 * Supported formats for text case transformation.
 *
 * - `small`: Converts all characters to lowercase.
 * - `title`: Capitalizes the first letter of each word.
 * - `upper`: Converts all characters to uppercase.
 * - `default`: Leaves the text unchanged.
 */
export type TransformCaseFormatTypeProps =
  | "small"
  | "title"
  | "upper"
  | "default";

/**
 * Supported formats for date transformation.
 *
 * Currently only supports `default`, but can be extended
 * for other formats like `short`, `long`, or `time`.
 */
export type DateFormatProps = "default";

/**
 * Parameters for the `transformCase` utility function.
 *
 * @property {string} text - The sentence or word to transform.
 * @property {TransformCaseFormatTypeProps} caseName - Specifies the case transformation format.
 */
export type TransformCaseTypeProps = {
  text: string;
  caseName: TransformCaseFormatTypeProps;
};

/**
 * Represents an author of a post.
 *
 * @property {number} id - Unique identifier for the author.
 * @property {string} name - Full name of the author.
 * @property {string} email - Email address of the author.
 */
export type AuthorProps = {
  id: number;
  name: string;
  email: string;
};

/**
 * Represents a single blog post.
 *
 * @property {number} id - Unique identifier for the post.
 * @property {number} userId - Identifier linking the post to its user.
 * @property {AuthorProps} author - Information about the post's author.
 * @property {string} title - The title of the blog post.
 * @property {string} [description] - Optional short summary of the post.
 * @property {string} body - The full content of the post.
 */
export type PostTypeProps = {
  id: number;
  userId: number;
  author: AuthorProps;
  title: string;
  description?: string;
  body: string;
};

/**
 * Properties for rendering a back button component.
 *
 * @property {string} href - The URL to navigate back to.
 * @property {string} [color] - Optional CSS class or style for the button's color.
 */
export type BackButtonProps = {
  href: string;
  color?: string;
};

/**
 * Represents a minimal post object associated with an author.
 *
 * Useful for listing an author's posts in a simplified format.
 *
 * @property {number} userId - Identifier linking the post to its user.
 * @property {number} id - Unique identifier for the post.
 * @property {string} title - The title of the post.
 * @property {string} body - The content of the post.
 */
export type AuthorPostsProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
