import { MetaHTMLAttributes, ReactChild, ReactChildren } from "react";

export interface SeoProps {
  description?: string;
  lang?: string;
  meta?: MetaHTMLAttributes<HTMLMetaElement>[];
  title: string;
}

export interface ImageProps {
  alt: string;
  url: string;
}

export type ContextProps = {
  choice: { key: string };
  menuVisible: { isVisible: boolean };
  modalVisible: { isVisible: boolean };
  handleSelect: (e: Event) => void;
  closeMenu: () => void;
  showMenu: () => void;
  showModal: () => void;
  closeModal: () => void;
};

export interface AuxProps {
  children: ReactChild | ReactChildren;
}
