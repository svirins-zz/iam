import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
};

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * IsPublished? — `boolean`
   *
   *
   */
  isPublished?: boolean;

  /**
   * Is displayed at footer menu? — `boolean`
   *
   *
   */
  isAtFooter?: boolean;

  /**
   * Price — `number`
   *
   *
   */
  price?: number;

  /**
   * SEO Title — `string`
   *
   *
   */
  seoTitle?: string;

  /**
   * SEO Description — `string`
   *
   *
   */
  seoDescription?: string;

  /**
   * Text — `array`
   *
   *
   */
  text?: Array<SanityKeyed<SanityBlock> | SanityKeyed<InlineImage>>;

  /**
   * Svg image (square) — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Date — `datetime`
   *
   *
   */
  date?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };
}

export type InlineImage = {
  _type: "inlineImage";
  asset: SanityAsset;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Alternative text — `text`
   *
   * Please, provide an alternative description
   */
  alt?: string;
};

export type Social = {
  _type: "social";
  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Url — `string`
   *
   *
   */
  url?: string;
};

export type SiteSettings = {
  _type: "siteSettings";
  /**
   * Site Name — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Site Description — `string`
   *
   *
   */
  email?: string;

  /**
   * Social Links — `array`
   *
   *
   */
  socialLinks?: Array<SanityKeyed<Social>>;
};

export type Documents = Page;
