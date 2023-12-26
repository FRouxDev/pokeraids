type SidebarLink = {
  target: string;
};

type SidebarAction = {
  action: () => void;
};

export type SidebarItem = {
  label: string;
} & (SidebarLink | SidebarAction);
