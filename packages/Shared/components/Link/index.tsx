import React from 'react';
import { Text } from 'tamagui';
import Link, { LinkProps as NextLinkProps } from 'next/link';

interface CustomLinkProps extends NextLinkProps {
  children: React.ReactNode;
}

let CustomLink: React.FC<CustomLinkProps>;

if (typeof window !== 'undefined') {
  const NextLink = require('next/link').default;

  CustomLink = ({ href, children, ...props }) => (
    <NextLink href={href} {...(props as NextLinkProps)}>
      <Text>{children}</Text>
    </NextLink>
  );
} else {
  CustomLink = ({ children }) => (
    <Text>{children}</Text>
  );
}

interface LinkComponentProps {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}

const LinkComponent: React.FC<LinkComponentProps> = (props) => {
  return <CustomLink {...props} />;
};

export default LinkComponent;
