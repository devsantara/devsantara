import Link from 'next/link';
import { FC, useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Img } from '../Img';
import { SiDiscord } from 'react-icons/si';
import { GrClose, GrMenu } from 'react-icons/gr';
import { Navigation } from '../Navigation';

interface Props {}
const discordServerInviteLink = 'https://discord.com/invite/fjPnzBqthR';

const Navbar: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClickMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="border-b border-gray-light bg-white">
      <Container className="flex h-14 items-center justify-between pr-0 lg:h-16">
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
            href={discordServerInviteLink}
            target="_blank"
            className="h-full w-auto whitespace-nowrap bg-primary px-5 text-xs font-semibold text-white hover:brightness-110 lg:px-8"
            iconEnd={<SiDiscord />}
          >
            <span className="hidden md:inline">JOIN DISCORD</span>
          </Button>
          <Button
            className="h-full px-5 lg:hidden"
            iconStart={isOpen ? <GrClose /> : <GrMenu />}
            onClick={handleOnClickMenu}
          />
        </div>
      </Container>
    </nav>
  );
};

export { Navbar };
