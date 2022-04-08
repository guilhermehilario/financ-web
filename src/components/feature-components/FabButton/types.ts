import { Link } from 'react-router-dom';

import { iconsLib } from '../../../global/icons';

export interface FabButtonProps {
  name?: string;
  icon: typeof iconsLib;
  link?: typeof Link;
  active: boolean;
}
