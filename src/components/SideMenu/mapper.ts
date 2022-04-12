// TODO: Tipagem Label

// export type Label =
//   | 'Dashboard'
//   | 'Wallets'
//   | 'Calendar'
//   | 'Analytics'
//   | 'Learn'
//   | 'Settings';

// TODO: Tipagem Label

// export type Path =
//   | '/'
//   | '/dashboard'
//   | '/wallets'
//   | '/calendar'
//   | '/analytics'
//   | '/learn'
//   | '/settings';

// export type SideMenuMapperProps = {
//   to: Path;
//   label: Label;
// };

export const SideMenuMapper: { [key: string]: string } = {
  Dashboard: '/dashboard',
  Wallets: '/wallets',
  Calendar: '/calendar',
  Analytics: '/analytics',
  Learn: '/learn',
};
