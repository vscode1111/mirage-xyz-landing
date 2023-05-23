import { ImgHTMLAttributes } from "react";

interface ImageProps<T> extends ImgHTMLAttributes<T> {
  pictureClassName?: string;
  className?: string;
}

export const Image = ({ pictureClassName, alt, ...rest }: ImageProps<any>) => (
  <picture className={pictureClassName}>
    <img alt={alt} {...rest} />
  </picture>
)