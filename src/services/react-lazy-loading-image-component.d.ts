declare module "react-lazy-load-image-component" {
  export const LazyLoadImage: React.FC<{
    alt: string;
    height: number | string;
    src: string;
    effect?: string;
    width?: number | string;
    style?: React.CSSProperties;
  }>;

  export const trackWindowScroll: any;
}
