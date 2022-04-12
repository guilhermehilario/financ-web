import React from 'react';
import { LinkProps } from 'react-router-dom';

export type LinkButtonProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & { label: string };
