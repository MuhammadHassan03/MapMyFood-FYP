import React from 'react';
import { Text } from 'tamagui';

let CustomLink;
if (typeof window !== 'undefined') {
  const NextLink = require('next/link').default;
  CustomLink = ({ href, children, ...props }) => (
    <NextLink href={href} {...props}>
      <Text>{children}</Text>
    </NextLink>
  );
} else {
  CustomLink = ({ href, children }) => (
    <Text>{children}</Text>
  );
}

const Link = (props) => {
  return <CustomLink {...props} />;
};

export default Link;
