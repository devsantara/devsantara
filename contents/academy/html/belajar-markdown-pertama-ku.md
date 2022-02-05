---
title: belajar markdown pertama ku
order: 2
slug: /academy/html/belajar-markdown-pertama-ku
description: belajar markdown pertama ku
date: '2022-02-05T04:58:34.007Z'
lastmod: '2022-02-05T05:52:01.534Z'
modDetail: null
draft: true
theme: '#E44D26'
preview: /images/academy/html/index.svg
keywords: []
tags: []
---

# Apa itu markdown?
markdown sangat mudah digunakna dalam membuat sesuatu 

```jsx
import { FC } from 'react';
import { Img } from '@/components/Img';
import { MatterMeta } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { Paragraph } from '../Paragraph';

interface Props {
  theme: string;
  preview: string;
  className?: string;
  academyModules: MatterMeta[];
}

const SideBar: FC<Props> = ({ theme, preview, academyModules, className }) => {
  const { asPath } = useRouter();

  return (
    <aside className={className}>
      <div
        style={{ backgroundColor: theme }}
        className="grid h-20 place-content-center rounded-lg"
      >
        <Img src={preview} alt="devsantara" className="aspect-square h-10" />
      </div>
      <hr className="my-4 border-gray-light" />

      <ul>
        {academyModules.map((module) => (
          <li key={module.order}>
            <Link href={module.slug}>
              <a
                title={module.title}
                className={clsx(
                  'mb-1 block truncate py-1  text-sm underline-offset-2 hover:underline lg:text-md',
                  {
                    'font-semibold text-primary': asPath === module.slug,
                  }
                )}
              >
                {module.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export { SideBar };
```

