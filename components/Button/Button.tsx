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
  isRounded?: boolean;
  iconSize?: IconSizes;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({
  children,
  href,
  target = '_self',
  className,
  iconStart,
  iconEnd,
  isRounded,
  iconSize = 'medium',
  onClick,
}) => {
  const classes = clsx(
    'flex h-11 w-full items-center justify-center gap-x-2 px-8'
  );

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
          className={clsx(classes, { 'rounded-lg': isRounded }, className)}
          target={target}
        >
          {ChildrenComponents}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={clsx(classes, { 'rounded-lg': isRounded }, className)}
      onClick={onClick}
    >
      {ChildrenComponents}
    </button>
  );
};

export { Button };
