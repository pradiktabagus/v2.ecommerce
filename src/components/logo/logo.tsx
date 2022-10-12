/* eslint-disable import/no-cycle */
import dynamic from 'next/dynamic';
import Image from 'next/image';

import type { TCustomLink } from '../customLink/customLink';

const Link = dynamic<TCustomLink>(() =>
  import('@/components').then((component) => component.Link)
);
export default function Logo() {
  return (
    <Link
      href="/"
      className="relative h-[32px] w-[145px] no-underline hover:border-b-0"
    >
      <Image
        src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
        priority
        alt="logo"
        layout="fill"
      />
    </Link>
  );
}
