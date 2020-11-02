import { MetaHTMLAttributes } from "react";

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
