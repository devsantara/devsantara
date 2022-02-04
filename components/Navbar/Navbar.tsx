import { FC, useEffect, useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Img } from '../Img';
import { SiDiscord } from 'react-icons/si';
import { GrClose, GrMenu } from 'react-icons/gr';
import { Navigation } from '../Navigation';
import clsx from 'clsx';
import { discordInviteLink } from '@/constants';

interface Props {}

const Navbar: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const handleOnClickMenu = () => setIsOpen((prev) => !prev);
  const onWindowScroll = () => {
    const { scrollY } = window;
    if (scrollY > 30) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);

  return (
    <nav
      className={clsx('sticky top-0 z-50 border-gray-light bg-white', {
        'border-b bg-white': isScrollDown,
      })}
    >
      <Container className="flex h-14 items-center justify-between pr-0 lg:h-16 lg:pr-4">
        <div className="flex gap-x-9">
          <Img
            src="/brand/devsantara-logo.svg"
            alt="Home Page"
            className="h-9 w-9"
            href="/"
          />
          <Navigation isOpen={isOpen} />
        </div>

        <div className="flex h-full">
          <Button
            href={discordInviteLink}
            target="_blank"
            className="h-full w-14 whitespace-nowrap bg-primary text-xs font-semibold text-white hover:brightness-110 md:w-auto md:px-8"
            iconEnd={<SiDiscord />}
          >
            <span className="hidden md:inline">JOIN DISCORD</span>
          </Button>
          <Button
            className="h-full w-14 lg:hidden"
            iconStart={isOpen ? <GrClose /> : <GrMenu />}
            onClick={handleOnClickMenu}
          />
        </div>
      </Container>
    </nav>
  );
};

export { Navbar };
