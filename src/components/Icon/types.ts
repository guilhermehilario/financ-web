import { theme } from '../../global/theme';
import { IconsNames } from './icons';

export interface IconProps {
  name: IconsNames;
  size?: keyof typeof theme.iconSize;
  color?: keyof typeof theme.colors;
}
