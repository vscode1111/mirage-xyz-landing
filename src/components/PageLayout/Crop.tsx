import { CSSProperties, useMemo } from "react";
import { useCropStyles } from "./useCropStyles";
import ImageJPG from './assets/image.jpg';
import { useWindowSize } from "hooks/useWindowSize";

interface CropProps {
  imageWidth: number;
  imageHeight: number;
  height: string | number;
  className?: string;
  Component: (style: string) => React.ReactNode;
}

export const Crop = ({ imageWidth, imageHeight, height, className, Component } : CropProps) => {
  const imageRatio = useMemo(() => imageWidth / imageHeight, [imageWidth, imageHeight]);
  const { width: currentWidth } = useWindowSize();
  const { classes, cx } = useCropStyles({ height, currentWidth });

  const currentRatio = useMemo(() => currentWidth / Number(height), [currentWidth, height]);
  const isVertical = useMemo(() => currentRatio > imageRatio, [currentRatio, imageRatio] );

  return (
    <div className={cx(isVertical ? classes.containerV : classes.containerH, className)}>
      {Component(isVertical ? classes.divV : classes.divH)}
    </div>
  );
}