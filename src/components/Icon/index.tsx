import React from 'react';
import * as Ionicons from 'react-icons/io';

import { theme } from '../../global/theme';
import { IconProps } from './types';

export const Icon = ({ name, size = 'default', color = 'text' }: IconProps) => {
  const icon = React.createElement(Ionicons[name], {
    size: theme.iconSize[size],
    color: theme.colors[color],
  });

  return <div>{icon}</div>;
};
