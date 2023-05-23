import { useBaseBlockStyles } from "./useBaseBlockStyles";

interface BaseBlockProps {
  className?: string
  children?: React.ReactNode;
  transparent?: boolean;
}

export const BaseBlock = ({ className, children, transparent }: BaseBlockProps) => {
  const { classes, cx } = useBaseBlockStyles({ transparent });
  return (
    <div className={cx(classes.root, className)}>
      {children}
    </div>
  );
}