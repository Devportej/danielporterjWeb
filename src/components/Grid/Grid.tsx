import { ReactNode, FC, CSSProperties } from 'react';
import './Grid.css';

type Props = {
  children: ReactNode;
  /** Number of rows in the grid (can be 1) */
  rows: number;
  /** Number of columns in the grid (can be 1) */
  cols: number;
  /** Shorthand gap (e.g. "16px" or 16) applied to both row and column gaps */
  gap?: string | number;
  /** Explicit row gap (overrides `gap` if provided) */
  rowGap?: string | number;
  /** Explicit column gap (overrides `gap` if provided) */
  colGap?: string | number;
  className?: string;
  style?: CSSProperties;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyItems'];
  /** If provided, switch to a responsive column layout using `auto-fit` and `minmax(minColWidth, 1fr)` */
  minColWidth?: string | number;
  /** Optional cap on the number of columns when using `minColWidth` (e.g. 4) */
  maxCols?: number;
};

const toCssValue = (v?: string | number) =>
  v === undefined ? undefined : typeof v === 'number' ? `${v}px` : v;

const Grid: FC<Props> = ({
  children,
  rows,
  cols,
  gap = '16px',
  rowGap,
  colGap,
  className,
  style,
  align = 'stretch',
  justify = 'stretch',
  minColWidth,
  maxCols,
}) => {
  const cssMinCol = toCssValue(minColWidth);
  const maxColsValue =
    typeof maxCols === 'number' && maxCols > 0 ? maxCols : undefined;
  // When minColWidth + maxCols are provided, limit the grid container's maxWidth
  // so `auto-fit` cannot create more than maxCols columns on wide viewports.
  const maxWidthWhenCapped =
    cssMinCol && maxColsValue
      ? `calc(${maxColsValue} * ${cssMinCol})`
      : undefined;
  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: cssMinCol
      ? `repeat(auto-fit, minmax(${cssMinCol}, 1fr))`
      : `repeat(${cols}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${rows}, auto)`,
    gap: toCssValue(
      rowGap === undefined && colGap === undefined ? gap : undefined
    ),
    rowGap: toCssValue(rowGap ?? gap),
    columnGap: toCssValue(colGap ?? gap),
    alignItems: align,
    justifyItems: justify,
    ...style,
    // Apply maxWidth only when capped; keep width:100% behaviour otherwise
    ...(maxWidthWhenCapped ? { maxWidth: maxWidthWhenCapped } : {}),
  };

  return (
    <div
      className={`grid ${className ?? ''}`}
      style={gridStyle}
      data-rows={rows}
      data-cols={cols}
    >
      {children}
    </div>
  );
};

export default Grid;
