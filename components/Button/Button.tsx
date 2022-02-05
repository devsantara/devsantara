import { FC, MouseEvent } from 'react';
import { Children, LinkTarget } from '@/types';
import Link from 'next/link';
import clsx from 'clsx';

type IconSizes = 'small' | 'medium' | 'large';

interface Props {
  children?: Children;
  href?: string;
  target?: LinkTarget;
  iconStart?: any;
  iconEnd?: any;
  className?: string;
  rounded?: boolean;
  iconSize?: IconSizes;
  fullHeight?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({
  children,
  href,
  target = '_self',
  className,
  iconStart,
  iconEnd,
  rounded,
  iconSize = 'medium',
  fullHeight,
  onClick,
}) => {
  const classes = clsx('flex w-full items-center justify-center gap-x-2', {
    'h-full': fullHeight,
    'h-11': !fullHeight,
  });

  const iconClasses = clsx({
    'text-xl': iconSize === 'medium',
    'text-md': iconSize === 'small',
    'text-2xl': iconSize === 'large',
  });

  const ChildrenComponents = (
    <>
      {iconStart && <span className={iconClasses}>{iconStart}</span>}
      {children}
      {iconEnd && <span className={iconClasses}>{iconEnd}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <a
          className={clsx(classes, { 'rounded-lg': rounded }, className)}
          target={target}
        >
          {ChildrenComponents}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={clsx(classes, { 'rounded-lg': rounded }, className)}
      onClick={onClick}
    >
      {ChildrenComponents}
    </button>
  );
};

export { Button };
