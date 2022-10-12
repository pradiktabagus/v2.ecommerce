import type { LinkProps } from 'next/link';
import Link from 'next/link';

export type TCustomLink = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;
export default function CustomLink({
  children,
  className,
  ...props
}: TCustomLink) {
  return (
    <Link {...props}>
      <a className={className && className}>{children}</a>
    </Link>
  );
}
