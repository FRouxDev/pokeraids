export type LinkItem = {
  path: string;
  label: string;
};

export type MenuItem = {
  label: string;
  subItems: LinkItem[];
};

export type NavbarItem = MenuItem | LinkItem;
