import React from 'react';
import Link, { LinkProps } from 'next/link';

export const RawLink = ({ children, href, ...rest } : LinkProps & { children?: React.ReactNode }) => {
  return (
    <Link href={href}>
      <a href={href as any} {...rest}>
        {children}
      </a>
    </Link>
  );
};
