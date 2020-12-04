import { MetaHTMLAttributes, ReactChild, ReactChildren } from "react";

export interface SeoProps {
  description?: string;
  lang?: string;
  meta?: MetaHTMLAttributes<HTMLMetaElement>[];
  title: string;
}
export type Frontmatter = {
  price: number;
  slug: string;
  tile: string;
  title: string;
};
export interface ContentProps {
  frontmatter: Frontmatter;
  html: string;
}
export interface HeaderProps {
  menuAlt: string;
  menuUrl: string;
  designAlt: string;
  designUrl: string;
}
export interface ImageProps {
  alt: string;
  url: string;
}

export type ContextProps = {
  menuVisible: { isVisible: boolean };
  modalVisible: { isVisible: boolean };
  handleSelect: () => void;
  closeMenu: () => void;
  showMenu: () => void;
  showModal: () => void;
  closeModal: () => void;
};

export interface AuxProps {
  children: ReactChild | ReactChildren;
}

export interface MenuItem {
  name: string;
  link: string;
}