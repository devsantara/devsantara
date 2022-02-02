// import { forwardRef } from 'react';
import Image from 'next/image';
import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { LinkTarget } from '@/types';

interface Props {
  className?: string;
  src: any;
  alt: string;
  target?: LinkTarget;
  href?: string;
}

const Img: FC<Props> = ({ className, src, alt, href, target }) => {
  const classes = clsx('block relative', className);

  const ImageComponent = <Image src={src} alt={alt} layout="fill" />;

  return href ? (
    <Link href={href}>
      <a target={target} className={classes}>
        {ImageComponent}
      </a>
    </Link>
  ) : (
    <div className={classes}>{ImageComponent}</div>
  );
};
Img.displayName = 'Img';

export { Img };
