import React from 'react';
import { Text } from 'tamagui';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, onClick }) => {
  if (typeof window !== 'undefined') {
    const NextLink = require('next/link').default;

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        event.preventDefault();
        onClick();

        if (href !== '#') {
          window.location.href = href;
        }
      }
    };

    return (
      <NextLink href={href}>
        <Text>{children}</Text>
      </NextLink>
    );
  }

  return <Text>{children}</Text>;
};

export default CustomLink;
