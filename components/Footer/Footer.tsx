import { Container } from '@/components/Container';
import { discordInviteLink } from '@/constants';
import { FC } from 'react';
import { SiDiscord } from 'react-icons/si';
import { Button } from '../Button';
import { Navigation } from '../Navigation';
import { Paragraph } from '../Paragraph';

interface Props {}

const Footer: FC<Props> = () => {
  const startYears = 2022;
  const endYears = new Date().getFullYear();
  const years =
    startYears < endYears ? `${startYears}-${endYears}` : startYears;

  return (
    <footer className="mt-20 border-t border-gray-light">
      <Container className="flex flex-col gap-y-2 py-6">
        <div className="flex justify-end">
          <Button
            href={discordInviteLink}
            target="_blank"
            iconStart={<SiDiscord />}
            className="mx-auto w-fit text-primary lg:mx-0"
          >
            Join our Discord server
          </Button>
        </div>
        <div className="flex flex-col justify-between text-center lg:flex-row">
          <Navigation isOpen isStatic />
          <Paragraph className="mt-6 lg:mt-0">
            © {years} Devsantara. All rights reserved
          </Paragraph>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
